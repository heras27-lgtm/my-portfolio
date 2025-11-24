"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Reveal } from "@/components/reveal"

export function ExperienceSection() {
  const { t } = useLanguage()

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
            }
          }
          
          /* Effets de lumière discrets et distincts pour Experience */
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
          {/* Section Title */}
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

          {/* Experience Timeline */}
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
                    {job.points.map((pt) => (
                      <li key={pt} className="flex" style={{ gap: "1%", color: 'var(--text-body)', fontSize: "clamp(0.9rem, 1vw, 1.1rem)", lineHeight: 1.6 }}>
                        <span style={{ color: 'var(--text-accent)' }}>▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap" style={{ gap: "1% 1%", rowGap: "1.5vh", marginTop: "2%" }}>
                    {job.tech.map((tech) => (
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
        </div>
      </main>
      </Reveal>
    </section>
  )
}
