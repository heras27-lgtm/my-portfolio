"use client"

import { useLanguage } from "@/context/LanguageContext"
import Link from "next/link"
import { Reveal } from "@/components/reveal"

export function ProjectsSection() {
  const { t } = useLanguage()

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
          }

          /* Distinct, subtle hover for project items */
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
          {/* Section Title */}
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

          {/* Projects Grid */}
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
                    {project.tech.map((tech) => (
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
        </div>
      </main>
      </Reveal>
    </section>
  )
}
