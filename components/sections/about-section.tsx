"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Reveal } from "@/components/reveal"
import Image from "next/image"

import { useEffect, useState } from "react"

export function AboutSection() {
  const { t } = useLanguage()
  const PROFILE_IMAGE = "/IMG_2889.jpg"
  const [isMobile, setIsMobile] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="about" style={{ overflow: "hidden" }}>
      <Reveal>
      <main style={{ 
        padding: "5% 5% 5%",
        width: "90%",
        margin: "0 auto"
      }}>
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @media (max-width: 640px) {
            #about {
              margin-bottom: 7vh !important;
            }
          }
        `}</style>
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          
          <div className="flex items-center" style={{ gap: "2%" }}>
            <h2 className="font-bold" style={{ 
              color: 'var(--text-primary)',
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)"
            }}>
              <span style={{ color: 'var(--text-accent)' }}>01.</span> {t.about.title}
            </h2>
            <div className="flex-grow" style={{ 
              backgroundColor: 'var(--about-divider)',
              height: "1px"
            }} />
          </div>

          
          <div className="grid md:grid-cols-3" style={{ gap: "5%" }}>
            <div className="md:col-span-2" style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              {isMobile && t.about.mobile ? (
                <>
                  <p style={{ 
                    color: 'var(--text-body)',
                    fontSize: "clamp(0.9rem, 1vw, 1.1rem)",
                    lineHeight: "1.6",
                    textAlign: "justify"
                  }}>
                    {t.about.mobile.intro}
                  </p>
                  <p style={{ 
                    color: 'var(--text-body)',
                    fontSize: "clamp(0.9rem, 1vw, 1.1rem)",
                    lineHeight: "1.6",
                    textAlign: "justify"
                  }}>
                    {t.about.mobile.summary}
                  </p>
                </>
              ) : (
                <>
                  <p style={{ 
                    color: 'var(--text-body)',
                    fontSize: "clamp(1rem, 1.1vw, 1.15rem)",
                    lineHeight: "1.65",
                    textAlign: "justify",
                    fontWeight: '400'
                  }}>
                    {t.about.intro}
                  </p>

                  <div style={{
                    maxHeight: isExpanded ? '2000px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5vh'
                  }}>
                    <p style={{ 
                      color: 'var(--text-body)',
                      fontSize: "clamp(0.9rem, 1vw, 1.1rem)",
                      lineHeight: "1.6",
                      textAlign: "justify"
                    }}>
                      {t.about.languages}
                      <br /> {t.about.motivated}
                    </p>

                    <p style={{ 
                      color: 'var(--text-body)',
                      fontSize: "clamp(0.9rem, 1vw, 1.1rem)",
                      lineHeight: "1.6",
                      textAlign: "justify"
                    }}>
                      {t.about.degree}
                    </p>

                    <p style={{ 
                      color: 'var(--text-body)',
                      fontSize: "clamp(0.9rem, 1vw, 1.1rem)",
                      lineHeight: "1.6",
                      textAlign: "justify"
                    }}>
                      {t.about.exchange}
                    </p>

                    <p style={{ 
                      color: 'var(--text-body)',
                      fontSize: "clamp(0.9rem, 1vw, 1.1rem)",
                      lineHeight: "1.6",
                      textAlign: "justify"
                    }}>
                      {t.about.experience}
                    </p>
                  </div>

                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--text-accent)',
                      fontSize: 'clamp(0.8rem, 0.9vw, 0.9rem)',
                      fontWeight: '600',
                      background: 'linear-gradient(135deg, var(--surface-subtle) 0%, transparent 100%)',
                      border: '1.5px solid var(--surface-border)',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      padding: '8px 16px',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      alignSelf: 'flex-start',
                      position: 'relative',
                      overflow: 'hidden',
                      marginTop: '8px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
                      e.currentTarget.style.borderColor = 'var(--text-accent)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.12)';
                      const icon = e.currentTarget.querySelector('.arrow-icon') as HTMLElement;
                      if (icon) icon.style.transform = isExpanded ? 'rotate(180deg) translateX(-4px)' : 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.borderColor = 'var(--surface-border)';
                      e.currentTarget.style.boxShadow = 'none';
                      const icon = e.currentTarget.querySelector('.arrow-icon') as HTMLElement;
                      if (icon) icon.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
                    }}
                  >
                    <span style={{ fontSize: '1rem' }}>
                      {isExpanded ? '📖' : '📚'}
                    </span>
                    <span>{isExpanded ? (t.readLess || 'Read less') : (t.readMore || 'Read more')}</span>
                    <span 
                      className="arrow-icon"
                      style={{ 
                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        display: 'inline-block',
                        fontSize: '0.7rem'
                      }}
                    >
                      ▼
                    </span>
                  </button>
                </>
              )}

              <p style={{ 
                color: 'var(--text-body)',
                fontSize: "clamp(0.85rem, 0.95vw, 1rem)",
                lineHeight: "1.5",
                textAlign: "justify",
                marginBottom: "0.8rem",
                marginTop: "2rem",
                opacity: 0.9
              }}>
                {t.about.technologies}
              </p>

              <div 
                className="tech-grid"
                style={{ 
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px", 
                  paddingTop: "0.5rem",
                  marginBottom: "2rem"
                }}
              >
                <style>{`
                  @media (min-width: 768px) {
                    .tech-grid {
                      gap: 25px !important;
                    }
                  }
                `}</style>
                {[
                  { name: 'Python', icon: '🐍' },
                  { name: 'SQL', icon: '🗄️' },
                  { name: 'C', icon: '⚙️' },
                  { name: 'Hugging Face', icon: '🤗' },
                  { name: 'AWS', icon: '☁️' },
                  { name: 'GitHub', icon: '🔧' }
                ].map((tech, index) => (
                  <div 
                    key={tech.name} 
                    className="tech-card"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--surface-subtle) 0%, transparent 100%)',
                      border: '1px solid var(--surface-border)',
                      borderRadius: '10px',
                      padding: '8px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'default',
                      animation: `fadeInUp 0.5s ease-out ${index * 0.08}s backwards`,
                      position: 'relative',
                      overflow: 'hidden',
                      width: 'fit-content'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.borderColor = 'var(--text-accent)';
                      e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'var(--surface-border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>{tech.icon}</span>
                    <span style={{ 
                      color: 'var(--text-primary)', 
                      fontSize: 'clamp(0.85rem, 0.95vw, 0.95rem)',
                      fontWeight: '600'
                    }}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

              <h3 style={{ 
                color: 'var(--text-primary)',
                fontSize: "clamp(1.1rem, 1.4vw, 1.3rem)",
                fontWeight: '700',
                marginBottom: '1rem',
                marginTop: '1.5rem',
                letterSpacing: '-0.01em'
              }}>
                {t.about.hobbiesTitle || 'Hobbies & Interests'}
              </h3>

              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", 
                gap: "12px"
              }}>
                {[
                  { 
                    icon: '🤾', 
                    title: t.about.hobby1Title || 'Handball', 
                    desc: t.about.hobby1Desc || 'Semi-pro player'
                  },
                  { 
                    icon: '♟️', 
                    title: t.about.hobby2Title || 'Chess', 
                    desc: t.about.hobby2Desc || 'Club member'
                  },
                  { 
                    icon: '📚', 
                    title: t.about.hobby3Title || 'Reading', 
                    desc: t.about.hobby3Desc || 'Sociology & Psychology'
                  }
                ].map((hobby, index) => (
                  <div
                    key={index}
                    className="hobby-card"
                    style={{
                      background: 'linear-gradient(135deg, var(--surface-subtle) 0%, transparent 100%)',
                      border: '1px solid var(--surface-border)',
                      borderRadius: '12px',
                      padding: '14px',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'default',
                      animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`,
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = 'var(--text-accent)';
                      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'var(--surface-border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ 
                      fontSize: '2rem', 
                      marginBottom: '8px',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.08) rotate(3deg)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                    }}
                    >
                      {hobby.icon}
                    </div>
                    <h4 style={{ 
                      color: 'var(--text-primary)',
                      fontSize: 'clamp(0.95rem, 1.05vw, 1.05rem)',
                      fontWeight: '700',
                      marginBottom: '4px'
                    }}>
                      {hobby.title}
                    </h4>
                    <p style={{ 
                      color: 'var(--text-body)',
                      fontSize: 'clamp(0.75rem, 0.85vw, 0.85rem)',
                      lineHeight: '1.4',
                      opacity: 0.9
                    }}>
                      {hobby.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            
            <div className="hidden md:flex items-center justify-center" style={{ height: "100%" }}>
              <div
                className="rounded border-2 overflow-hidden"
                style={{
                  borderColor: 'var(--about-divider)',
                  width: "12vw",
                  height: "12vw",
                  position: "relative"
                }}
              >
                <Image
                  src={PROFILE_IMAGE}
                  alt="Profile photo"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      </Reveal>
    </section>
  )
}
