"use client"

import React, { useEffect, useRef, useState } from "react"

export interface RevealProps {
  children: React.ReactNode
  threshold?: number
  delay?: number
  className?: string
  once?: boolean
  translateY?: string
}
export const Reveal: React.FC<RevealProps> = ({
  children,
  threshold = 0.4,
  delay = 30,
  className,
  once = true,
  translateY = "8vh",
}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            setTimeout(() => {
              setVisible(true)
              setHasShown(true)
            }, delay)
            if (once) observer.unobserve(entry.target)
          } else {
            if (!once) setVisible(false)
          }
        })
      },
      { threshold: [0, threshold] }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once, delay])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: "opacity 1s ease-out, transform 1s cubic-bezier(0.22, 1, 0.36, 1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${translateY})`,
        willChange: visible ? "auto" : "opacity, transform",
        pointerEvents: visible ? "auto" : "none",
      }}
      aria-hidden={!visible && !hasShown}
    >
      {children}
    </div>
  )
}
