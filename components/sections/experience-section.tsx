"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Reveal } from "@/components/reveal"

import { useEffect, useState } from "react"

export function ExperienceSection() {
  const { t } = useLanguage()
  const [isMobile, setIsMobile] = useState(false)
  const [expandedJobs, setExpandedJobs] = useState<number[]>([])
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleJob = (index: number) => {
    setExpandedJobs(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    )
  }

  const getJobStats = (idx: number) => {
    const stats = [
      [
        { icon: '👥', label: '1000+', desc: 'employees supported' },
        { icon: '💰', label: '€100k+', desc: 'investment influenced' },
        { icon: '🚀', label: '€4M+', desc: 'digital transformation' }
      ],
      [
        { icon: '⚡', label: '48h → 30s', desc: 'query optimization' },
        { icon: '🗄️', label: 'SQL', desc: 'database architecture' },
        { icon: '📊', label: 'Power BI', desc: 'dashboards created' }
      ],
      [
        { icon: '🔧', label: 'SAP', desc: 'software management' },
        { icon: '📋', label: 'Excel', desc: 'data tracking' }
      ]
    ]
    return stats[idx] || []
  }

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
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(3vh, 5%, 5vh)", position: "relative" }}>
              {/* Timeline vertical */}
              <div style={{
                position: "absolute",
                left: "-28px",
                top: "40px",
                bottom: "40px",
                width: "3px",
                background: "linear-gradient(180deg, var(--text-accent) 0%, var(--surface-border) 100%)",
                borderRadius: "2px"
              }} />

              {t.experience.jobs.map((job, idx) => {
                const companyUrls = [
                  "https://www.airbus.com/",
                  "https://www.vivadour.coop/accueil",
                  "https://www.terega.fr/"
                ]
                const isExpanded = expandedJobs.includes(idx)
                const stats = getJobStats(idx)
                const mainTechs = (job as any).mobileTech || job.tech.slice(0, 4)

                return (
                  <a
                    key={idx}
                    href={companyUrls[idx]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-card"
                    style={{ 
                      position: "relative",
                      paddingLeft: "2.5%",
                      paddingTop: "1.5%",
                      paddingBottom: "1.5%",
                      paddingRight: "2.5%",
                      borderRadius: "12px",
                      border: "1px solid var(--surface-border)",
                      background: "linear-gradient(135deg, var(--surface-subtle) 0%, transparent 60%)",
                      transition: "all 0.4s ease",
                      textDecoration: "none",
                      display: "block",
                      cursor: "pointer"
                    }}
                  >
                    {/* Timeline dot */}
                    <div style={{
                      position: "absolute",
                      left: "-39px",
                      top: "30px",
                      width: "22px",
                      height: "22px",
                      background: "var(--text-accent)",
                      borderRadius: "50%",
                      border: "4px solid var(--bg-primary)",
                      boxShadow: "0 0 0 2px var(--text-accent)",
                      zIndex: 2
                    }} />

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1%" }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "2%", marginBottom: "0.5%" }}>
                          <h3 className="font-bold" style={{ 
                            color: 'var(--text-primary)', 
                            fontSize: "clamp(1.3rem, 1.7vw, 1.9rem)",
                            lineHeight: "1.2"
                          }}>
                            {job.role}
                          </h3>
                          <span className="font-mono" style={{ 
                            color: 'var(--text-accent)', 
                            fontSize: "clamp(0.85rem, 0.95vw, 1.05rem)",
                            fontWeight: "600"
                          }}>
                            @ {job.company}
                          </span>
                        </div>
                        <p className="font-mono" style={{ 
                          color: 'var(--text-secondary)', 
                          fontSize: "clamp(0.75rem, 0.85vw, 0.95rem)",
                          opacity: 0.8
                        }}>
                          📅 {job.period}
                        </p>
                      </div>
                    </div>

                    {/* Stats badges - hidden when expanded */}
                    <div style={{ 
                      maxHeight: isExpanded ? '0' : '500px',
                      opacity: isExpanded ? 0 : 1,
                      overflow: isExpanded ? 'hidden' : 'visible',
                      transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
                      display: "flex", 
                      gap: "12px", 
                      marginTop: "1.5%",
                      marginBottom: "1.5%",
                      flexWrap: "wrap"
                    }}>
                      {stats.map((stat, statIdx) => (
                        <div
                          key={statIdx}
                          style={{
                            background: "linear-gradient(135deg, var(--chip-bg) 0%, transparent 100%)",
                            border: "1px solid var(--chip-border)",
                            borderRadius: "10px",
                            padding: "8px 14px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            transition: "all 0.3s ease",
                            transform: "translateY(0)"
                          }}
                          onMouseEnter={(e) => {
                            if (!isExpanded) {
                              e.currentTarget.style.transform = "translateY(-2px)";
                              e.currentTarget.style.borderColor = "var(--text-accent)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.borderColor = "var(--chip-border)";
                          }}
                        >
                          <span style={{ fontSize: "1.2rem" }}>{stat.icon}</span>
                          <div>
                            <div style={{ 
                              color: "var(--text-accent)", 
                              fontSize: "clamp(0.85rem, 0.9vw, 0.95rem)",
                              fontWeight: "700",
                              lineHeight: "1.2"
                            }}>
                              {stat.label}
                            </div>
                            <div style={{ 
                              color: "var(--text-secondary)", 
                              fontSize: "clamp(0.7rem, 0.75vw, 0.8rem)",
                              lineHeight: "1.2"
                            }}>
                              {stat.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Main technologies - hidden when expanded */}
                    <div 
                      className="flex flex-wrap" 
                      style={{ 
                        gap: "8px", 
                        marginBottom: "1.5%",
                        maxHeight: isExpanded ? '0' : '500px',
                        opacity: isExpanded ? 0 : 1,
                        overflow: 'hidden',
                        transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease'
                      }}
                    >
                      {mainTechs.map((tech: string) => (
                        <span
                          key={tech}
                          style={{
                            backgroundColor: 'var(--chip-bg)',
                            color: 'var(--text-accent)',
                            borderColor: 'var(--chip-border)',
                            border: '1px solid',
                            fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)',
                            padding: '4px 12px',
                            borderRadius: '6px',
                            fontWeight: '600'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expandable details */}
                    <div style={{
                      maxHeight: isExpanded ? '2000px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      marginTop: isExpanded ? '0.3%' : '0'
                    }}>
                      <ul style={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        gap: "1vh", 
                        marginBottom: "1.5%"
                      }}>
                        {job.points.map((pt: string) => (
                          <li key={pt} className="flex" style={{ 
                            gap: "1%", 
                            color: 'var(--text-body)', 
                            fontSize: "clamp(0.85rem, 0.95vw, 1.05rem)", 
                            lineHeight: 1.6 
                          }}>
                            <span style={{ color: 'var(--text-accent)' }}>▸</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {job.tech.length > mainTechs.length && (
                        <div className="flex flex-wrap" style={{ gap: "8px", marginTop: "1.5%" }}>
                          {job.tech.slice(mainTechs.length).map((tech: string) => (
                            <span
                              key={tech}
                              style={{
                                backgroundColor: 'var(--chip-bg)',
                                color: 'var(--text-accent)',
                                borderColor: 'var(--chip-border)',
                                border: '1px solid',
                                fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)',
                                padding: '4px 12px',
                                borderRadius: '6px',
                                fontWeight: '600'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div style={{ 
                      display: "flex", 
                      gap: "12px", 
                      marginTop: "1.5%",
                      alignItems: "center"
                    }}>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleJob(idx);
                        }}
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
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.borderColor = 'var(--text-accent)';
                          e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.12)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.borderColor = 'var(--surface-border)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <span style={{ fontSize: '1rem' }}>
                          {isExpanded ? '📖' : '📋'}
                        </span>
                        <span>{isExpanded ? (t.readLess || 'Less details') : (t.readMore || 'View details')}</span>
                        <span style={{ 
                          transition: 'transform 0.3s ease',
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          display: 'inline-block',
                          fontSize: '0.7rem'
                        }}>
                          ▼
                        </span>
                      </button>

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
