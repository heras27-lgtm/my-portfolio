"use client"

import { use } from "react"
import { Header } from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useLanguage } from "@/context/LanguageContext"
import { projectsData } from "@/data/projects-content"

type ProjectSlug = 
  | "bpce-solutions-informatiques" 
  | "kerdos-energy-chatbot" 
  | "alstom-metro-operations" 
  | "section-paloise" 
  | "clermont-foot-63" 
  | "hays-manchester-city" 
  | "bk-biet-project"

const projectsMetadata: Record<ProjectSlug, { tech: string[], link: string, github: string, image: string, year: string, role: string }> = {
  "bpce-solutions-informatiques": { tech: ["Python", "Multimodal LLMs", "Azure OpenAI", "BLIP-2", "APIs", "LLM"], link: "#", github: "https://github.com/eleejahroudier/BPCEproject", image: "/BPCESI.jpeg", year: "2025", role: "AI Engineer" },
  "kerdos-energy-chatbot": { tech: ["Python", "Hugging Face", "APIs", "Weaviate", "Docker", "Docling"], link: "#", github: "https://github.com/BOupdown/Kerdos", image: "/kerdos.png", year: "2025", role: "AI Engineer" },
  "alstom-metro-operations": { tech: ["Python", "Dijkstra's Algorithm", "Graph Neural Networks", "Simulation", "Data Visualization", "Company needs understanding"], link: "#", github: "https://github.com/marcodamecourt/data_chall_alstom", image: "/Alstom.png", year: "2024", role: "AI Engineer" },
  "section-paloise": { tech: ["Python", "Data Analysis", "Data Visualization", "Matplotlib", "Seaborn", "Pandas", "NumPy"], link: "#", github: "#", image: "/section.png", year: "2024", role: "Data Analyst" },
  "clermont-foot-63": { tech: ["Python", "Data Cleaning", "Data Visualization", "Matplotlib", "Pandas", "NumPy"], link: "#", github: "#", image: "/clermontfoot.png", year: "2024", role: "Data Analyst" },
  "hays-manchester-city": { tech: ["Data Analysis", "Needs understanding", "Dashboards", "Data Visualization"], link: "https://www.youtube.com/watch?v=xkA2I64WxG0", github: "#", image: "/hays.jpeg", year: "2023", role: "Data Analyst" },
  "bk-biet-project": { tech: ["Python", "TensorFlow", "Keras", "Medical Imaging", "CNNs", "PyTorch", "NumPy", "Pandas", "Scikit-learn"], link: "#", github: "#", image: "/BKbiet.jpeg", year: "2024", role: "Research AI Engineer" },
}

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const { language, t } = useLanguage()
  
  // Get content based on language
  const projectContent = projectsData[language][slug as ProjectSlug]
  const projectMeta = projectsMetadata[slug as ProjectSlug]

  if (!projectContent || !projectMeta) {
    notFound()
  }

  return (
    <>
      <style>{`
        .project-container { padding-top: 8vh; }
        @media (max-width: 640px) { .project-container { padding-top: 9.5vh; } }
      `}</style>
      <div
        className="min-h-screen project-container"
        style={{
          backgroundColor: 'var(--project-bg)'
        }}
      >
        <Header />
      
      
      <section style={{ 
        padding: "clamp(4%, 7%, 10%) clamp(5%, 7%, 10%) clamp(4%, 6%, 10%)",
        backgroundColor: 'transparent'
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          
          <Link
            href="/#projects"
            className="inline-flex items-center font-mono transition-all hover:gap-3"
            style={{ 
              color: 'var(--text-accent)',
              fontSize: "clamp(0.75rem, 0.9vw, 1rem)",
              gap: "1%",
              marginBottom: "2%"
            }}
          >
            <span>←</span>
            {t.projectPage.backToProjects}
          </Link>

          
          <h1 className="font-bold" style={{ 
            color: 'var(--text-primary)',
            fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
            marginBottom: "1%"
          }}>
            {projectContent.title}
          </h1>

          
          <div className="flex flex-wrap" style={{ gap: "3%", marginBottom: "2%" }}>
            <div>
              <span className="font-mono" style={{ color: 'var(--text-secondary)', fontSize: "clamp(0.75rem, 0.9vw, 1rem)" }}>
                {t.projectPage.year}: <span style={{ color: 'var(--text-accent)' }}>{projectMeta.year}</span>
              </span>
            </div>
            <div>
              <span className="font-mono" style={{ color: 'var(--text-secondary)', fontSize: "clamp(0.75rem, 0.9vw, 1rem)" }}>
                {t.projectPage.role}: <span style={{ color: 'var(--text-accent)' }}>{projectMeta.role}</span>
              </span>
            </div>
          </div>

          
          <div className="flex flex-wrap" style={{ gap: "1%", rowGap: "1vh", marginBottom: "3%" }}>
            {projectMeta.tech.map((tech) => (
              <span
                key={tech}
                className="rounded"
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

          
          <div
            className="rounded border overflow-hidden"
            style={{
              borderColor: 'var(--surface-border)',
              width: '100%',
              height: 'clamp(20vh, 40vh, 50vh)',
              position: 'relative',
              marginBottom: '4%',
              backgroundColor: '#ffffff',
              padding: 'clamp(2%, 3%, 5%) clamp(10%, 20%, 30%)'
            }}
          >
            <Image
              src={projectMeta.image}
              alt={projectContent.title}
              fill
              style={{ objectFit: "contain", padding: "inherit" }}
            />
          </div>

          
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            <h2 className="font-bold" style={{ 
              color: 'var(--text-primary)',
              fontSize: "clamp(1.3rem, 2vw, 2rem)"
            }}>
              {t.projectPage.overview}
            </h2>
            <div
              style={{ 
                color: 'var(--text-body)',
                fontSize: "clamp(0.9rem, 1vw, 1.1rem)",
                lineHeight: "1.8",
                whiteSpace: "pre-line"
              }}
              dangerouslySetInnerHTML={{ __html: projectContent.longDescription }}
            />
          </div>

          
          <div className="flex flex-wrap" style={{ gap: "2%", marginTop: "4%" }}>
            {projectMeta.link !== "#" && (
              <a
                href={projectMeta.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-mono transition-all hover:gap-3 rounded border"
                style={{ 
                  color: 'var(--text-accent)',
                  fontSize: "clamp(0.8rem, 0.9vw, 1rem)",
                  gap: "1%",
                  padding: "1% 3%",
                  borderColor: 'var(--text-accent)',
                  whiteSpace: "nowrap",
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--surface-hover)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent' }}
              >
                {t.projectPage.viewDemo}
                <span>→</span>
              </a>
            )}
            {projectMeta.github !== "#" && (
              <a
                href={projectMeta.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-mono transition-all hover:gap-3 rounded border"
                style={{ 
                  color: 'var(--text-accent)',
                  fontSize: "clamp(0.8rem, 0.9vw, 1rem)",
                  gap: "1%",
                  padding: "1% 3%",
                  borderColor: 'var(--chip-border)',
                  backgroundColor: 'var(--chip-bg)',
                  whiteSpace: "nowrap"
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--surface-hover)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--chip-bg)' }}
              >
                {t.projectPage.viewOnGithub}
                <span>→</span>
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
