"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Reveal } from "@/components/reveal"

import { useEffect, useState } from "react"

export function ExperienceSection() {
  const { t } = useLanguage()
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="experience" style={{ overflowX: "hidden", overflowY: "visible" }}>
      <Reveal translateY="2vh" threshold={0.1}>
      <main style={{ 
        padding: "3% 5% clamp(8%, 10%, 15%)",
        width: "90%",
        margin: "0 auto"
      }}>
        <style>{`
          @media (max-width: 640px) {
            #experience {
              margin-bottom: 7vh !important;
              padding-left: 8% !important;
            }
            .experience-container {
              position: relative;
              padding-left: 0 !important;
            }
            .experience-timeline-vertical {
              position: absolute;
              left: 20px;
              top: 0;
              bottom: -20px;
              width: 3px;
              background: linear-gradient(180deg, var(--text-accent) 0%, var(--surface-border) 100%);
              border-radius: 2px;
            }
            .experience-item-mobile {
              position: relative;
              margin-bottom: 8vh;
              padding-left: 60px;
              animation: fadeInUp 0.6s ease-out;
            }
            .experience-dot-mobile {
              position: absolute;
              left: 10px;
              top: 8px;
              width: 24px;
              height: 24px;
              background: var(--text-accent);
              border-radius: 50%;
              border: 4px solid var(--bg-primary);
              box-shadow: 0 0 0 3px var(--text-accent), 0 4px 12px rgba(0,0,0,0.2);
              z-index: 2;
              animation: pulse 2s ease-in-out infinite;
            }
            .experience-company-badge {
              display: inline-block;
              padding: 4px 12px;
              background: var(--chip-bg);
              border: 1px solid var(--chip-border);
              border-radius: 20px;
              font-size: 0.75rem;
              color: var(--text-accent);
              font-weight: 600;
              margin-bottom: 8px;
              letter-spacing: 0.5px;
            }
            .experience-role-mobile {
              font-size: 1.1rem;
              font-weight: 700;
              color: var(--text-primary);
              margin-bottom: 4px;
              line-height: 1.3;
            }
            .experience-period-mobile {
              font-size: 0.8rem;
              color: var(--text-secondary);
              margin-bottom: 12px;
              font-family: monospace;
              opacity: 0.8;
            }
            .experience-summary-mobile {
              font-size: 0.9rem;
              color: var(--text-body);
              line-height: 1.5;
              margin-bottom: 12px;
            }
            .experience-link-mobile {
              font-size: 0.8rem;
              color: var(--text-accent);
              text-decoration: none;
              display: inline-flex;
              align-items: center;
              gap: 4px;
              font-weight: 500;
              transition: gap 0.3s ease;
            }
            .experience-link-mobile:hover {
              gap: 8px;
            }
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
            @keyframes pulse {
              0%, 100% {
                box-shadow: 0 0 0 3px var(--text-accent), 0 4px 12px rgba(0,0,0,0.2);
              }
              50% {
                box-shadow: 0 0 0 6px var(--text-accent), 0 4px 16px rgba(0,0,0,0.3);
              }
            }
          }
          
          .experience-card {
            position: relative;
            overflow: hidden;
            transition: background-color 0.4s ease, box-shadow 0.4s ease;
            background: linear-gradient(135deg, var(--surface-subtle) 0%, transparent 60%);
          }
          .experience-card::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 2px;
            background: var(--text-accent);
            opacity: 0.6;
            transition: width 0.4s ease;
          }
          .experience-card:hover::before,
          .experience-card:active::before {
            width: 100%;
          }
          .experience-card:hover,
          .experience-card:active {
            box-shadow: inset 0 0 0 1px var(--chip-border), 0 0 12px -8px var(--chip-border);
            background-color: var(--surface-subtle);
          }
          .light .experience-card:hover,
          .light .experience-card:active {
            box-shadow: inset 0 0 0 1px rgba(200,107,60,0.25), 0 0 12px -8px rgba(200,107,60,0.18);
          }
        `}</style>
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          
          <div className="flex items-center" style={{ gap: "2%" }}>
            <h2 className="font-bold" style={{ 
              color: 'var(--text-primary)',
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)"
            }}>
              <span style={{ color: 'var(--text-accent)' }}>02.</span> {t.experience.title}
            </h2>
            <div className="flex-grow" style={{ 
              backgroundColor: 'var(--surface-border)',
              height: '1px'
            }} />
          </div>

          
          {isMobile ? (
            <div className="experience-container" style={{ position: 'relative' }}>
              <div className="experience-timeline-vertical" />
              {t.experience.jobs.map((job, idx) => {
                const companyUrls = [
                  "https://www.airbus.com/",
                  "https://www.vivadour.coop/accueil",
                  "https://www.terega.fr/"
                ]
                const summary = (job as any).mobileTimeline || (job as any).mobile?.[0] || job.points[0]
                
                return (
                  <div key={idx} className="experience-item-mobile">
                    <div className="experience-dot-mobile" />
                    <div className="experience-company-badge">{job.company}</div>
                    <div className="experience-role-mobile">{job.role}</div>
                    <div className="experience-period-mobile">{job.period}</div>
                    <div className="experience-summary-mobile">{summary}</div>
                    <a
                      href={companyUrls[idx]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="experience-link-mobile"
                    >
                      {t.learnMore} →
                    </a>
                  </div>
                )
              })}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(4vh, 6%, 6vh)", textAlign: "justify" }}>
              {t.experience.jobs.map((job, idx) => {
                const companyUrls = [
                  "https://www.airbus.com/",
                  "https://www.vivadour.coop/accueil",
                  "https://www.terega.fr/"
                ]
                return (
                  <a
                    key={idx}
                    href={companyUrls[idx]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={'border-l-2 transition-all duration-700 ease-out cursor-pointer group rounded-r experience-card'}
                    style={{ 
                      borderColor: 'var(--surface-border)',
                      paddingLeft: '3%',
                      display: 'block',
                      textDecoration: 'none',
                      paddingTop: '2%',
                      paddingBottom: '2%',
                      paddingRight: '2%',
                      
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "baseline", gap: "2%", marginBottom: "1%" }}>
                      <h3 className="font-bold transition-colors duration-700 ease-out" style={{ color: 'var(--text-primary)', fontSize: "clamp(1.2rem, 1.6vw, 1.8rem)" }}>
                        {job.role}
                      </h3>
                      <span className="font-mono group-hover:opacity-100 transition-all duration-700 ease-out group-hover:translate-x-[0.3vw]" style={{ color: 'var(--text-accent)', fontSize: "clamp(0.8rem, 0.9vw, 1rem)", opacity: 0.8 }}>@ {job.company}</span>
                    </div>
                    <p className="font-mono" style={{ color: 'var(--text-secondary)', fontSize: "clamp(0.8rem, 0.9vw, 1rem)", marginBottom: "1.5%" }}>
                      {job.period}
                    </p>

                    <ul style={{ display: "flex", flexDirection: "column", gap: "1vh", marginBottom: "2%" }}>
                      {job.points.map((pt: string) => (
                        <li key={pt} className="flex" style={{ gap: "1%", color: 'var(--text-body)', fontSize: "clamp(0.9rem, 1vw, 1.1rem)", lineHeight: 1.6 }}>
                          <span style={{ color: 'var(--text-accent)' }}>▸</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap" style={{ gap: "1% 1%", rowGap: "1.5vh", marginTop: "2%" }}>
                      {job.tech.map((tech: string) => (
                        <span
                          key={tech}
                          className='rounded'
                          style={{
                            backgroundColor: 'var(--chip-bg)',
                            color: 'var(--text-accent)',
                            borderColor: 'var(--chip-border)',
                            border: '1px solid',
                            fontSize: 'clamp(0.7rem, 0.8vw, 0.95rem)',
                            padding: '0.5% 1.5%'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </main>
      </Reveal>
    </section>
  )
}
