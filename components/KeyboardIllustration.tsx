const ROWS = [14, 14, 12, 9]

export default function KeyboardIllustration() {
  return (
    <div className="kb-scene" aria-hidden="true">
      <div className="kb">
        {ROWS.map((count, i) => (
          <div key={i} className="kb-row">
            {Array.from({ length: count }).map((_, j) => (
              <div key={j} className="key" />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
