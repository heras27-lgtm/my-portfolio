"use client"

import { useLanguage } from "@/context/LanguageContext"
import Link from "next/link"
import Image from "next/image"
import { Reveal } from "@/components/reveal"

import { useEffect, useState } from "react"

export function ProjectsSection() {
  const { t } = useLanguage()
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="projects" style={{ overflow: "hidden" }}>
      <Reveal translateY="1vh" threshold={0.1}>
      <main style={{ 
        padding: "3% 5% 5%",
        width: "90%",
        margin: "0 auto"
      }}>
        <style>{`
          @media (max-width: 640px) {
            #projects {
              margin-bottom: 7vh !important;
            }
            .project-card-mobile {
              position: relative;
              background: linear-gradient(135deg, var(--surface-subtle) 0%, transparent 100%);
              border-radius: 20px;
              overflow: hidden;
              border: 1px solid var(--surface-border);
              box-shadow: 0 8px 24px rgba(0,0,0,0.12);
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .project-card-mobile::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 4px;
              background: linear-gradient(90deg, var(--text-accent), var(--text-accent) 50%, transparent 50%);
              background-size: 200% 100%;
              transition: background-position 0.5s ease;
            }
            .project-card-mobile:active {
              transform: translateY(-4px) scale(0.99);
              box-shadow: 0 12px 32px rgba(0,0,0,0.18);
              border-color: var(--text-accent);
            }
            .project-card-mobile:active::before {
              background-position: -100% 0;
            }
            .project-image-mobile {
              position: relative;
              width: 100%;
              height: 220px;
              overflow: hidden;
              background: #fffffff1;
            }
            .project-image-mobile::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: 40px;
              background: linear-gradient(to top, var(--surface-subtle), transparent);
              pointer-events: none;
            }
            .project-image-mobile img {
              transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
              filter: brightness(0.95);
            }
            .project-card-mobile:active .project-image-mobile img {
              transform: scale(1.08) rotate(1deg);
              filter: brightness(1);
            }
            .project-content-mobile {
              padding: 20px;
              position: relative;
            }
            .project-number-badge {
              position: absolute;
              top: 16px;
              right: 16px;
              width: 32px;
              height: 32px;
              background: var(--text-accent);
              color: var(--background);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 0.75rem;
              font-weight: 700;
              box-shadow: 0 2px 8px rgba(0,0,0,0.2);
              z-index: 1;
            }
            .project-title-mobile {
              font-size: 1.15rem;
              font-weight: 800;
              color: var(--text-primary);
              margin-bottom: 10px;
              line-height: 1.3;
              letter-spacing: -0.02em;
            }
            .project-desc-mobile {
              font-size: 0.9rem;
              color: var(--text-body);
              line-height: 1.5;
              margin-bottom: 16px;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
            .project-footer-mobile {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding-top: 12px;
              border-top: 1px solid var(--surface-border);
            }
            .project-link-mobile {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              font-size: 0.9rem;
              color: var(--text-accent);
              font-weight: 700;
              text-decoration: none;
              transition: all 0.3s ease;
            }
            .project-link-arrow {
              transition: transform 0.3s ease;
            }
            .project-card-mobile:active .project-link-arrow {
              transform: translateX(4px);
            }
            .project-tech-count {
              font-size: 0.75rem;
              color: var(--text-secondary);
              display: flex;
              align-items: center;
              gap: 4px;
              opacity: 0.8;
            }
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .project-card-mobile {
              animation: fadeInUp 0.6s ease-out backwards;
            }
            .project-card-mobile:nth-child(1) { animation-delay: 0.1s; }
            .project-card-mobile:nth-child(2) { animation-delay: 0.2s; }
            .project-card-mobile:nth-child(3) { animation-delay: 0.3s; }
            .project-card-mobile:nth-child(4) { animation-delay: 0.4s; }
            .project-card-mobile:nth-child(5) { animation-delay: 0.5s; }
            .project-card-mobile:nth-child(6) { animation-delay: 0.6s; }
            .project-card-mobile:nth-child(7) { animation-delay: 0.7s; }
          }

          .project-card {
            transition: box-shadow 0.5s ease, transform 0.4s ease, background-color 0.4s ease, border-left-width 0.3s ease;
            background-color: transparent;
            box-shadow: none;
          }
          .project-card:hover,
          .project-card:active {
            background-color: var(--surface-hover);
            box-shadow: 0 6px 22px -10px var(--chip-border);
            transform: translateY(-2px);
            border-left-width: 3px;
            border-color: var(--text-accent);
          }
          .light .project-card:hover,
          .light .project-card:active {
            box-shadow: 0 6px 22px -12px rgba(200,107,60,0.25);
          }
        `}</style>
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh"}}>
          
          <div className="flex items-center" style={{ gap: "2%" }}>
            <h2 className="font-bold" style={{ 
              color: 'var(--text-primary)',
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)"
            }}>
              <span style={{ color: 'var(--text-accent)' }}>03.</span> {t.projects.title}
            </h2>
            <div className="flex-grow" style={{ 
              backgroundColor: 'var(--surface-border)',
              height: '1px'
            }} />
          </div>

          
          {isMobile ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px"}}>
              {t.projects.list.map((project, index) => (
                <Link
                  key={index}
                  href={`/projects/${project.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="project-card-mobile">
                    <div className="project-number-badge">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    {(project as any).image && (
                      <div className="project-image-mobile">
                        <Image
                          src={(project as any).image}
                          alt={project.title}
                          fill
                          style={{ objectFit: 'contain', padding: '20px' }}
                          sizes="(max-width: 768px) 100vw"
                        />
                      </div>
                    )}
                    <div className="project-content-mobile">
                      <h3 className="project-title-mobile">{project.title}</h3>
                      <p className="project-desc-mobile">
                        {(project as any).mobile ? (project as any).mobile.description : project.description}
                      </p>
                      <div className="project-footer-mobile">
                        <span className="project-tech-count">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 16v-4M12 8h.01"/>
                          </svg>
                          {(() => {
                            const techCount = (project as any).mobile?.tech?.length || project.tech.length;
                            return `${techCount} ${techCount === 1 ? 'tech' : 'techs'}`;
                          })()}
                        </span>
                        <span className="project-link-mobile">
                          {t.projects.viewProject}
                          <span className="project-link-arrow">→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "3vh"}}>
              {t.projects.list.map((project, index) => (
                <div key={index} className={'border-l-2 transition-all duration-700 ease-out rounded-r project-card'} style={{ 
                  borderColor: 'var(--surface-border)',
                  paddingLeft: '3%',
                  paddingTop: '1.5%',
                  paddingBottom: '1.5%',
                  paddingRight: '1.5%',
                  transition: 'box-shadow 0.5s, transform 0.5s'
                }}
                >
                  <h3 className="font-bold" style={{ 
                    color: 'var(--text-primary)',
                    fontSize: "clamp(1.3rem, 2vw, 2rem)",
                    marginBottom: "1%"
                  }}>
                    {project.title}
                  </h3>

                  <p style={{ 
                    color: 'var(--text-body)',
                    fontSize: "clamp(0.9rem, 1vw, 1.1rem)",
                    lineHeight: "1.6",
                    marginBottom: "2%"
                  }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap" style={{ gap: "1%", marginBottom: "2%" }}>
                      {project.tech.map((tech: string) => (
                        <span
                          key={tech}
                          className='rounded'
                          style={{
                            backgroundColor: 'var(--chip-bg)',
                            color: 'var(--text-accent)',
                            borderColor: 'var(--chip-border)',
                            border: '1px solid',
                            fontSize: 'clamp(0.7rem, 0.8vw, 0.95rem)',
                            padding: '0.5% 1.5%',
                            marginBottom: '0.7em'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center font-mono transition-all hover:gap-3"
                    style={{ 
                      color: 'var(--text-accent)',
                      fontSize: "clamp(0.8rem, 0.9vw, 1rem)",
                      gap: "1%",
                      whiteSpace: "nowrap"
                    }}
                  >
                    {t.projects.viewProject}
                    <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      </Reveal>
    </section>
  )
}
