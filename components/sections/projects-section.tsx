"use client"

import { useLanguage } from "@/context/LanguageContext"
import Link from "next/link"
import { Reveal } from "@/components/reveal"

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="projects">
      <Reveal translateY="1vh" threshold={0.1}>
      <main style={{ 
        padding: "6% 5% 3%",
        width: "90%",
        margin: "0 auto"
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh"}}>
          {/* Section Title */}
          <div className="flex items-center" style={{ gap: "2%" }}>
            <h2 className="font-bold" style={{ 
              color: "#ccd6f6",
              fontSize: "3vw"
            }}>
              <span style={{ color: "#64ffda" }}>03.</span> {t.projects.title}
            </h2>
            <div className="flex-grow" style={{ 
              backgroundColor: "rgba(100, 255, 218, 0.2)",
              height: "1px"
            }} />
          </div>

          {/* Projects Grid */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3vh"}}>
            {t.projects.list.map((project, index) => (
              <div key={index} className="border-l-2 transition-all duration-700 ease-out hover:bg-[rgba(100,255,218,0.05)] hover:border-[rgba(100,255,218,0.4)] rounded-r" style={{ 
                borderColor: "rgba(100, 255, 218, 0.2)",
                paddingLeft: "3%",
                paddingTop: "1.5%",
                paddingBottom: "1.5%",
                paddingRight: "1.5%"
              }}>
                <h3 className="font-bold" style={{ 
                  color: "#ccd6f6",
                  fontSize: "2vw",
                  marginBottom: "1%"
                }}>
                  {project.title}
                </h3>

                <p style={{ 
                  color: "#a8b2d1",
                  fontSize: "1vw",
                  lineHeight: "1.6",
                  marginBottom: "2%"
                }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap" style={{ gap: "1%", marginBottom: "2%" }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded"
                      style={{
                        backgroundColor: "rgba(100, 255, 218, 0.1)",
                        color: "#64ffda",
                        borderColor: "rgba(100, 255, 218, 0.2)",
                        border: "1px solid",
                        fontSize: "0.8vw",
                        padding: "0.5% 1.5%"
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center font-mono transition-all hover:gap-3"
                  style={{ 
                    color: "#64ffda",
                    fontSize: "0.9vw",
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
