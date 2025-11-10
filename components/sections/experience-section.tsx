"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Reveal } from "@/components/reveal"

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section id="experience" style={{ overflow: "hidden" }}>
      <Reveal translateY="2vh">
      <main style={{ 
        padding: "3% 5% 5%",
        width: "90%",
        margin: "0 auto"
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          {/* Section Title */}
          <div className="flex items-center" style={{ gap: "2%" }}>
            <h2 className="font-bold" style={{ 
              color: "#ccd6f6",
              fontSize: "3vw"
            }}>
              <span style={{ color: "#64ffda" }}>02.</span> {t.experience.title}
            </h2>
            <div className="flex-grow" style={{ 
              backgroundColor: "rgba(100, 255, 218, 0.2)",
              height: "1px"
            }} />
          </div>

          {/* Experience Timeline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "5vh", textAlign: "justify" }}>
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
                  className="border-l-2 transition-all duration-700 ease-out hover:border-l-4 cursor-pointer group hover:shadow-[0_0_40px_rgba(100,255,218,0.2)] rounded-r hover:bg-[rgba(100,255,218,0.03)]"
                  style={{ 
                    borderColor: "rgba(100, 255, 218, 0.2)",
                    paddingLeft: "3%",
                    display: "block",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    paddingTop: "2%",
                    paddingBottom: "2%",
                    paddingRight: "2%"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: "2%", marginBottom: "1%" }}>
                    <h3 className="font-bold group-hover:text-[#64ffda] transition-colors duration-700 ease-out" style={{ color: "#ccd6f6", fontSize: "1.6vw" }}>
                      {job.role}
                    </h3>
                    <span className="font-mono group-hover:opacity-100 transition-all duration-700 ease-out group-hover:translate-x-[0.3vw]" style={{ color: "#64ffda", fontSize: "0.9vw", opacity: 0.8 }}>@ {job.company}</span>
                  </div>
                  <p className="font-mono" style={{ color: "#8892b0", fontSize: "0.9vw", marginBottom: "1.5%" }}>
                    {job.period}
                  </p>

                  <ul style={{ display: "flex", flexDirection: "column", gap: "1vh", marginBottom: "2%" }}>
                    {job.points.map((pt) => (
                      <li key={pt} className="flex" style={{ gap: "1%", color: "#a8b2d1", fontSize: "1vw", lineHeight: 1.6 }}>
                        <span style={{ color: "#64ffda" }}>▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap" style={{ gap: "1% 1%", rowGap: "1.5vh", marginTop: "2%" }}>
                    {job.tech.map((t) => (
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
                </a>
              )
            })}
          </div>
        </div>
      </main>
      </Reveal>
    </section>
  )
}
