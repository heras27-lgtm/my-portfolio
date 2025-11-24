"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import { useTheme } from "next-themes"
import { Monitor, X } from "lucide-react"

export function MobileNotice() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check if we're on mobile and if the notice has been shown before
    const isMobile = window.innerWidth <= 768
    const hasSeenNotice = localStorage.getItem('hasSeenMobileNotice')
    
    if (isMobile && !hasSeenNotice) {
      // Small delay for better UX
      setTimeout(() => {
        setIsVisible(true)
      }, 500)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('hasSeenMobileNotice', 'true')
  }

  if (!isVisible || !mounted) return null

  const accent = resolvedTheme === "light" ? "#C86B3C" : "#64ffda"
  const bgColor = resolvedTheme === "light" 
    ? "oklch(0.99 0.008 45)" 
    : "oklch(0.145 0 0)"
  const textColor = resolvedTheme === "light" ? "#2D1B0E" : "#ccd6f6"
  const textSecondary = resolvedTheme === "light" ? "#6B5344" : "#8892b0"

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 9998,
          animation: 'fadeIn 0.3s ease-in-out'
        }}
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: bgColor,
          borderRadius: '12px',
          padding: '2rem',
          maxWidth: '85vw',
          width: '400px',
          zIndex: 9999,
          boxShadow: resolvedTheme === "light" 
            ? '0 10px 40px rgba(200, 107, 60, 0.3)' 
            : '0 10px 40px rgba(100, 255, 218, 0.3)',
          border: `1px solid ${resolvedTheme === "light" ? 'rgba(200, 107, 60, 0.2)' : 'rgba(100, 255, 218, 0.2)'}`,
          animation: 'slideIn 0.3s ease-out'
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: textSecondary,
            padding: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = resolvedTheme === "light" 
              ? 'rgba(200, 107, 60, 0.1)' 
              : 'rgba(100, 255, 218, 0.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
          }}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Icon */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '1.5rem' 
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: resolvedTheme === "light" 
              ? 'rgba(200, 107, 60, 0.1)' 
              : 'rgba(100, 255, 218, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `2px solid ${accent}`
          }}>
            <Monitor size={28} color={accent} />
          </div>
        </div>

        {/* Title */}
        <h3 style={{
          color: textColor,
          fontSize: '1.25rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '1rem',
          fontFamily: 'var(--font-sans)'
        }}>
          {t.mobileNotice?.title || "Meilleure expérience sur ordinateur"}
        </h3>

        {/* Message */}
        <p style={{
          color: textSecondary,
          fontSize: '0.95rem',
          textAlign: 'center',
          lineHeight: '1.6',
          marginBottom: '1.5rem',
          fontFamily: 'var(--font-sans)'
        }}>
          {t.mobileNotice?.message || "Pour une expérience optimale et profiter pleinement de toutes les fonctionnalités, nous vous recommandons de visiter ce portfolio sur un ordinateur."}
        </p>

        {/* Button */}
        <button
          onClick={handleClose}
          style={{
            width: '100%',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'transparent',
            color: accent,
            border: `2px solid ${accent}`,
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s',
            fontFamily: 'var(--font-mono)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = resolvedTheme === "light" 
              ? 'rgba(200, 107, 60, 0.1)' 
              : 'rgba(100, 255, 218, 0.1)'
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = resolvedTheme === "light" 
              ? '0 4px 12px rgba(200, 107, 60, 0.3)' 
              : '0 4px 12px rgba(100, 255, 218, 0.3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          {t.mobileNotice?.button || "J'ai compris"}
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translate(-50%, -45%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </>
  )
}
