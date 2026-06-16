'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

interface ProjectCardProps {
  image: string
  imageAlt: string
  video?: string
  badge: string
  title: string
  year?: string
  description: string
  className?: string
}

export default function ProjectCard({
  image,
  imageAlt,
  video,
  badge,
  title,
  year,
  description,
  className = '',
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoActive, setVideoActive] = useState(false)

  const handleMouseEnter = () => {
    if (!video || !videoRef.current) return
    setVideoActive(true)
    videoRef.current.currentTime = 0
    videoRef.current.play().catch(() => {})
  }

  const handleMouseLeave = () => {
    if (!video || !videoRef.current) return
    videoRef.current.pause()
    setVideoActive(false)
  }

  return (
    <div className={`proj ${className}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="thumb">
        <span className="badge">{badge}</span>
        <span className="arrow">↗</span>
        <Image src={image} alt={imageAlt} fill style={{ objectFit: 'cover' }} loading="lazy" />
        {video && (
          <video
            ref={videoRef}
            className={`proj-video${videoActive ? ' active' : ''}`}
            src={video}
            muted
            loop
            playsInline
            preload="none"
          />
        )}
      </div>
      <div className="proj-info">
        <h3>{title}</h3>
        <span className="yr">{year}</span>
      </div>
      <p>{description}</p>
    </div>
  )
}
