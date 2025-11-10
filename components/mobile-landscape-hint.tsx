"use client"

import { useEffect, useState } from "react"

export function MobileLandscapeHint() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Check if this is the first visit on mobile using sessionStorage
      const hasSeenHint = sessionStorage.getItem("landscapeHintSeen")
      
      // Check if device is mobile and in portrait
      const isMobile = window.innerWidth < 768
      const isPortrait = window.innerHeight > window.innerWidth
      
      console.log("Hint Check:", { isMobile, isPortrait, hasSeenHint, width: window.innerWidth, height: window.innerHeight })
      
      if (!hasSeenHint && isMobile && isPortrait) {
        console.log("Showing hint!")
        setShow(true)
        sessionStorage.setItem("landscapeHintSeen", "true")
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  const handleClose = () => {
    setShow(false)
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(15, 20, 25, 0.95)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        animation: "fadeIn 0.3s ease-in",
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
          100% { transform: rotate(0deg); }
        }
        .rotate-phone {
          animation: rotate 2s ease-in-out infinite;
        }
      `}</style>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          textAlign: "center",
        }}
      >
        <div className="rotate-phone" style={{ fontSize: "4rem" }}>
          📱
        </div>
        <div>
          <h2
            style={{
              color: "#ccd6f6",
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}
          >
            Tournez votre téléphone
          </h2>
          <p
            style={{
              color: "#a8b2d1",
              fontSize: "1rem",
              lineHeight: "1.6",
            }}
          >
            Pour une meilleure expérience, veuillez utiliser le mode paysage
          </p>
        </div>
        <div
          style={{
            marginTop: "1rem",
            fontSize: "0.9rem",
            color: "#64ffda",
          }}
        >
          ↻ Tournez votre appareil
        </div>
        <button
          onClick={handleClose}
          style={{
            marginTop: "2rem",
            padding: "0.5rem 1.5rem",
            backgroundColor: "rgba(100, 255, 218, 0.1)",
            border: "1px solid rgba(100, 255, 218, 0.3)",
            borderRadius: "0.5rem",
            color: "#64ffda",
            cursor: "pointer",
            fontSize: "0.9rem",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(100, 255, 218, 0.2)"
            e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.5)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(100, 255, 218, 0.1)"
            e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.3)"
          }}
        >
          Continuer
        </button>
      </div>
    </div>
  )
}
