"use client"

import { useLanguage } from "@/context/LanguageContext"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function Hero() {
  const { t } = useLanguage()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const accent = 'var(--text-accent)'
  const textPrimary = 'var(--text-primary)'
  const textSecondary = 'var(--text-secondary)'
  const textBody = 'var(--text-body)'
  const accentBgHover = mounted && resolvedTheme === "light" ? "rgba(200,107,60,0.1)" : "rgba(100, 255, 218, 0.1)"

  return (
    <main style={{ 
        padding: "clamp(4%, 6%, 8%) 5% clamp(2%, 3%, 5%)",
        width: "90%",
        margin: "0 auto"
      }}>
      <style>{`
        @media (max-width: 640px) {
          main {
            margin-top: 0 !important;
            margin-bottom: 15vh !important;
            padding-top: 0 !important;
            padding-bottom: 11vh !important;
          }
        }
      `}</style>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
        <div className="flex items-center" style={{ gap: "2%" }}>
          <p className="font-mono" style={{ 
            color: accent,
            fontSize: "clamp(0.8rem, 0.9vw, 1.1rem)"
          }}>
            {t.hero.greeting}
          </p>
        </div>

        <div>
          <h1 className="font-bold" style={{ 
            color: textPrimary,
            fontSize: "clamp(2.2rem, 5vw, 5rem)",
            marginBottom: "2%"
          }}>
            Alejandro Heras Espinosa.
          </h1>
          <h2 className="font-bold" style={{ 
            color: textSecondary,
            fontSize: "clamp(1.5rem, 3vw, 3.5rem)"
          }}>
            {t.hero.tagline}
          </h2>
        </div>

        <p style={{ 
          color: textBody,
          fontSize: "clamp(0.9rem, 1vw, 1.1rem)",
          width: "min(100%, 80%)",
          lineHeight: "1.6"
        }}>
          {t.hero.description}{" "}
          <span className="font-semibold" style={{ color: accent }}>{t.hero.role}</span>.
          <br /> {t.hero.experience}
          <br /> {t.hero.languages}
        </p>

        <div style={{ paddingTop: "2%" }}>
          <a
            href="#about"
            className="inline-block border rounded font-mono hover:bg-opacity-10 transition-all cta-button"
            style={{
              borderColor: accent,
              color: accent,
              backgroundColor: "transparent",
              padding: "clamp(0.8rem, 1.2vw, 1.5rem) clamp(1.2rem, 2vw, 1.8rem)",
              fontSize: "clamp(0.8rem, 0.9vw, 1rem)",
              borderWidth: "2px"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = accentBgHover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
            }}
          >
            {t.hero.cta}
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center scroll-indicator" style={{ 
        marginTop: "clamp(3%, 4%, 5%)",
        gap: "2vh"
      }}>
        <style>{`
          @keyframes swipeDown {
            0% {
              transform: translateY(-10px);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateY(10px);
              opacity: 0;
            }
          }
          
          .scroll-indicator .mobile-scroll {
            display: none;
          }
          
          .scroll-indicator .scroll-text {
            display: block;
          }
          
          @media (max-width: 640px) {
            .scroll-indicator .desktop-scroll {
              display: none;
            }
            .scroll-indicator .mobile-scroll {
              display: flex;
            }
            .scroll-indicator .scroll-text {
              display: none;
            }
            .scroll-indicator { margin-top: clamp(6%, 8%, 10%) !important; }
          }
        `}</style>
        
        <p className="font-mono scroll-text" style={{ 
          color: textSecondary,
          fontSize: "clamp(0.75rem, 0.9vw, 1rem)"
        }}>
          {t.hero.scroll}
        </p>
        
        <div
          className="desktop-scroll border-2 rounded-full flex items-start justify-center"
          style={{ 
            borderColor: accent,
            width: "clamp(2.5rem, 3vw, 4rem)",
            height: "clamp(5rem, 7vh, 8rem)",
            padding: "clamp(0.3rem, 0.5vw, 0.6rem)"
          }}
        >
          <div className="rounded-full animate-bounce" style={{ 
            backgroundColor: accent,
            width: "15%",
            height: "30%"
          }} />
        </div>
        
        <div className="mobile-scroll flex-col items-center" style={{ gap: "0.5vh" }}>
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            style={{ animation: "swipeDown 2s ease-in-out infinite" }}
          >
            <path 
              d="M12 5V19M12 19L5 12M12 19L19 12" 
              stroke={accent} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </main>
  )
}