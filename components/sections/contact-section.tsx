"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Reveal } from "@/components/reveal"
import { Linkedin, Instagram, Mail, Phone } from "lucide-react"
import { toast } from "sonner"

import { useEffect, useState } from "react"

export function ContactSection() {
  const { t } = useLanguage()
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const LINKEDIN_URL = "https://www.linkedin.com/in/alejandro-heras-espinosa/";
  const INSTAGRAM_URL = "https://www.instagram.com/alexandreheras/";
  const EMAIL = "heras27@live.fr";
  const PHONE = "+33 7 81 68 29 72";

  return (
    <section id="contact" style={{ overflow: "hidden" }}>
      <Reveal>
      <main style={{ 
        padding: "5% 5% 5%",
        width: "90%",
        margin: "0 auto"
      }}>
        <style>{`
          @media (max-width: 640px) {
            #contact {
              margin-bottom: 7vh !important;
            }
          }
        `}</style>
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "2vh",
          maxWidth: "100%"
        }}>
          
          <div className="flex items-center" style={{ gap: "2%" }}>
            <h2 className="font-bold" style={{ 
              color: 'var(--text-primary)',
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)"
            }}>
              <span style={{ color: 'var(--text-accent)' }}>05.</span> {t.contact.title}
            </h2>
            <div className="flex-grow" style={{ 
              backgroundColor: 'var(--surface-border)',
              height: '1px'
            }} />
          </div>

          
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <p style={{ 
              color: 'var(--text-body)',
              fontSize: "clamp(0.875rem, 1vw, 1.1rem)",
              lineHeight: "1.6"
            }}>
              {isMobile && t.contact.mobile ? t.contact.mobile.message : t.contact.message}
            </p>


            
            <div style={{ marginTop: "3%" }}>
              <div className="flex" style={{ gap: "clamp(0.5rem, 1.2%, 1.2rem)", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'clamp(2.5rem, 3vw, 3.5rem)',
                    height: 'clamp(2.5rem, 3vw, 3.5rem)',
                    border: '1px solid var(--chip-border)',
                    borderRadius: '0.6vw',
                    color: 'var(--text-accent)',
                    backgroundColor: 'var(--chip-bg)'
                  }}
                  className="hover:opacity-80 transition-opacity"
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--surface-hover)' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--chip-bg)' }}
                >
                  <Linkedin size={"clamp(1rem, 1.4vw, 1.5rem)"} />
                </a>
                
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'clamp(2.5rem, 3vw, 3.5rem)',
                    height: 'clamp(2.5rem, 3vw, 3.5rem)',
                    border: '1px solid var(--chip-border)',
                    borderRadius: '0.6vw',
                    color: 'var(--text-accent)',
                    backgroundColor: 'var(--chip-bg)'
                  }}
                  className="hover:opacity-80 transition-opacity"
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--surface-hover)' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--chip-bg)' }}
                >
                  <Instagram size={"clamp(1rem, 1.4vw, 1.5rem)"} />
                </a>
                
                <button
                  type="button"
                  aria-label="Copy email"
                  onClick={() => {
                    navigator.clipboard.writeText(EMAIL)
                      .then(() => toast.success(t.contact.emailCopied))
                      .catch(() => toast.error(t.contact.emailFailed))
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'clamp(2.5rem, 3vw, 3.5rem)',
                    height: 'clamp(2.5rem, 3vw, 3.5rem)',
                    border: '1px solid var(--chip-border)',
                    borderRadius: '0.6vw',
                    color: 'var(--text-accent)',
                    backgroundColor: 'var(--chip-bg)',
                    cursor: 'pointer'
                  }}
                  className="hover:opacity-80 transition-opacity font-mono"
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--surface-hover)' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--chip-bg)' }}
                >
                  <Mail size={"clamp(1rem, 1.4vw, 1.5rem)"} />
                </button>
                
                <button
                  type="button"
                  aria-label="Copy phone number"
                  onClick={() => {
                    navigator.clipboard.writeText(PHONE)
                      .then(() => toast.success(t.contact.phoneCopied))
                      .catch(() => toast.error(t.contact.phoneFailed))
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'clamp(2.5rem, 3vw, 3.5rem)',
                    height: 'clamp(2.5rem, 3vw, 3.5rem)',
                    border: '1px solid var(--chip-border)',
                    borderRadius: '0.6vw',
                    color: 'var(--text-accent)',
                    backgroundColor: 'var(--chip-bg)',
                    cursor: 'pointer'
                  }}
                  className="hover:opacity-80 transition-opacity font-mono"
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--surface-hover)' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--chip-bg)' }}
                >
                  <Phone size={"clamp(1rem, 1.4vw, 1.5rem)"} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      </Reveal>
    </section>
  )
}
