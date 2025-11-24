"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Reveal } from "@/components/reveal"

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section id="skills" style={{ overflowX: "hidden", overflowY: "visible" }}>
      <Reveal translateY="2vh" threshold={0.1}>
      <main style={{ 
        padding: "3% 5% clamp(12vh, 12%, 18vh)",
        width: "90%",
        margin: "0 auto"
      }}>
        <style>{`
          @media (max-width: 640px) {
            #skills {
              margin-bottom: 7vh !important;
            }
          }

          .skills-card {
            transition: background 0.5s ease, box-shadow 0.5s ease, transform 0.4s ease;
            box-shadow: var(--surface-shadow);
            background: var(--surface-subtle);
          }
          .skills-card:hover,
          .skills-card:active {
            background: linear-gradient(135deg, var(--surface-hover) 0%, transparent 60%);
            box-shadow: inset 0 0 0 1px var(--chip-border), 0 0 10px -6px var(--chip-border);
            transform: translateY(-1px);
          }
          .light .skills-card:hover,
          .light .skills-card:active {
            box-shadow: inset 0 0 0 1px rgba(200,107,60,0.25), 0 0 10px -6px rgba(200,107,60,0.18);
          }
        `}</style>
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          
          <div className="flex items-center" style={{ gap: "2%" }}>
            <h2 className="font-bold" style={{ 
              color: 'var(--text-primary)',
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)"
            }}>
              <span style={{ color: 'var(--text-accent)' }}>04.</span> {t.skills.title}
            </h2>
            <div className="flex-grow" style={{ 
              backgroundColor: 'var(--surface-border)',
              height: '1px'
            }} />
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(3vh, 5%, 5vh) clamp(3vh, 5%, 5vh)" }}>
            {t.skills.categories.map((category, index) => (
              <div
                key={index}
                className={'rounded border transition-all duration-700 ease-out skills-card'}
                style={{ 
                  borderColor: 'var(--surface-border)',
                  padding: 'clamp(2%, 3%, 4%)',
                  minHeight: '0'
                }}
              >
                <h3 className="font-bold" style={{ 
                  color: 'var(--text-accent)',
                  fontSize: "clamp(1rem, 1.2vw, 1.5rem)",
                  marginBottom: "2%"
                }}>
                  {category.category}
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center" style={{ 
                      color: 'var(--text-body)',
                      fontSize: "clamp(0.875rem, 1vw, 1.1rem)",
                      gap: "1%"
                    }}>
                      <span style={{ color: 'var(--text-accent)' }}>✓</span>
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
