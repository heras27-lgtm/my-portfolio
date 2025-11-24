"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

export function DynamicFavicon() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (!resolvedTheme) return

    const link = document.querySelector("link[rel='icon']") as HTMLLinkElement
    if (link) {
      link.href = resolvedTheme === "light" ? "/light_icon.png" : "/dark_icon.png"
    } else {
      const newLink = document.createElement("link")
      newLink.rel = "icon"
      newLink.href = resolvedTheme === "light" ? "/light_icon.png" : "/dark_icon.png"
      document.head.appendChild(newLink)
    }
  }, [resolvedTheme])

  return null  
}
