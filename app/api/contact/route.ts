import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, message } = body

    const webhookUrl = process.env.N8N_WEBHOOK_URL
    if (!webhookUrl) {
      return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 })
    }

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone: phone || null, message }),
    })

    if (!res.ok) throw new Error(`Webhook error: ${res.status}`)

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
