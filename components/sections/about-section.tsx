"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Reveal } from "@/components/reveal"
import Image from "next/image"

export function AboutSection() {
  const { t } = useLanguage()
  const PROFILE_IMAGE = "/IMG_2889.jpg"

  return (
    <section id="about" style={{ overflow: "hidden" }}>
      <Reveal>
      <main style={{ 
        padding: "5% 5% 5%",
        width: "90%",
        margin: "0 auto"
      }}>
        <style>{`
          @media (max-width: 640px) {
            #about {
              margin-bottom: 7vh !important;
            }
          }
        `}</style>
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          {/* Section Title */}
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

          {/* Content */}
          <div className="grid md:grid-cols-3" style={{ gap: "5%" }}>
            <div className="md:col-span-2" style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <p style={{ 
                color: 'var(--text-body)',
                fontSize: "clamp(0.9rem, 1vw, 1.1rem)",
                lineHeight: "1.6",
                textAlign: "justify"
              }}>
                {t.about.intro}
              </p>

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

              <p style={{ 
                color: 'var(--text-body)',
                fontSize: "clamp(0.9rem, 1vw, 1.1rem)",
                lineHeight: "1.6",
                textAlign: "justify"
              }}>
                {t.about.technologies}
              </p>

              <div className="grid grid-cols-2" style={{ gap: "2%", paddingTop: "2%" }}>
                {['Python','SQL','C', 'Jira', 'AWS', 'GitHub'].map((tech) => (
                  <div key={tech} className="flex items-center" style={{ gap: "1%" }}>
                    <span style={{ color: 'var(--text-accent)', fontSize: "clamp(0.9rem, 1vw, 1.1rem)" }}>▸</span>
                    <span style={{ color: 'var(--text-primary)', fontSize: "clamp(0.9rem, 1vw, 1.1rem)" }}>{tech}</span>
                  </div>
                ))}
              </div>

              <p style={{ 
                  color: 'var(--text-body)',
                  paddingTop: "2%",
                  fontSize: "clamp(0.9rem, 1vw, 1.1rem)",
                  lineHeight: "1.6",
                  textAlign: "justify"
                }}>
                  {t.about.hobbies}
              </p>
            </div>

            {/* Image Placeholder */}
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
