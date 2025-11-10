"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Reveal } from "@/components/reveal"

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section id="skills" style={{ overflow: "hidden" }}>
      <Reveal>
      <main style={{ 
        padding: "3% 5% 8%",
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
              <span style={{ color: "#64ffda" }}>04.</span> {t.skills.title}
            </h2>
            <div className="flex-grow" style={{ 
              backgroundColor: "rgba(100, 255, 218, 0.2)",
              height: "1px"
            }} />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "5% 5%" }}>
            {t.skills.categories.map((category, index) => (
              <div
                key={index}
                className="rounded border"
                style={{ 
                  borderColor: "rgba(100, 255, 218, 0.2)", 
                  backgroundColor: "rgba(100, 255, 218, 0.02)",
                  padding: "3%"
                }}
              >
                <h3 className="font-bold" style={{ 
                  color: "#64ffda",
                  fontSize: "clamp(1rem, 1.2vw, 1.5rem)",
                  marginBottom: "2%"
                }}>
                  {category.category}
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center" style={{ 
                      color: "#a8b2d1",
                      fontSize: "clamp(0.875rem, 1vw, 1.1rem)",
                      gap: "1%"
                    }}>
                      <span style={{ color: "#64ffda" }}>✓</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      </Reveal>
    </section>
  )
}
