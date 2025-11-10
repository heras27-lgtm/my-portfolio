"use client"

import { use } from "react"
import { Header } from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useLanguage } from "@/context/LanguageContext"
import { projectsData } from "@/data/projects-content"

// Type for project slugs
type ProjectSlug = 
  | "bpce-solutions-informatiques" 
  | "kerdos-energy-chatbot" 
  | "alstom-metro-operations" 
  | "section-paloise" 
  | "clermont-foot-63" 
  | "hays-manchester-city" 
  | "bk-biet-project"

// Static metadata for projects (tech, links, images, year, role)
const projectsMetadata: Record<ProjectSlug, { tech: string[], link: string, github: string, image: string, year: string, role: string }> = {
  "bpce-solutions-informatiques": { tech: ["Python", "Multimodal LLMs", "Azure OpenAI", "BLIP-2", "APIs", "LLM"], link: "#", github: "https://github.com/eleejahroudier/BPCEproject", image: "/BPCESI.jpeg", year: "2025", role: "AI Engineer" },
  "kerdos-energy-chatbot": { tech: ["Python", "Hugging Face", "APIs", "Weaviate", "Docker", "Docling"], link: "#", github: "#", image: "/kerdos.png", year: "2025", role: "AI Engineer" },
  "alstom-metro-operations": { tech: ["Python", "Dijkstra's Algorithm", "Graph Neural Networks", "Simulation", "Data Visualization", "Company needs understanding"], link: "#", github: "#", image: "/Alstom.png", year: "2024", role: "AI Engineer" },
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
    <div className="min-h-screen" style={{ backgroundColor: "#0f1419" }}>
      <Header />
      
      {/* Project Hero */}
      <section style={{ 
        padding: "7% 5% 6%",
        width: "90%",
        margin: "0 auto"
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          {/* Back Link */}
          <Link
            href="/#projects"
            className="inline-flex items-center font-mono transition-all hover:gap-3"
            style={{ 
              color: "#64ffda",
              fontSize: "0.9vw",
              gap: "1%",
              marginBottom: "2%"
            }}
          >
            <span>←</span>
            {t.projectPage.backToProjects}
          </Link>

          {/* Title */}
          <h1 className="font-bold" style={{ 
            color: "#ccd6f6",
            fontSize: "4vw",
            marginBottom: "1%"
          }}>
            {projectContent.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap" style={{ gap: "3%", marginBottom: "2%" }}>
            <div>
              <span className="font-mono" style={{ color: "#8892b0", fontSize: "0.9vw" }}>
                {t.projectPage.year}: <span style={{ color: "#64ffda" }}>{projectMeta.year}</span>
              </span>
            </div>
            <div>
              <span className="font-mono" style={{ color: "#8892b0", fontSize: "0.9vw" }}>
                {t.projectPage.role}: <span style={{ color: "#64ffda" }}>{projectMeta.role}</span>
              </span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap" style={{ gap: "1%", rowGap: "1vh", marginBottom: "3%" }}>
            {projectMeta.tech.map((t) => (
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

          {/* Project Image */}
          <div
            className="rounded border overflow-hidden"
            style={{
              borderColor: "rgba(100, 255, 218, 0.2)",
              width: "100%",
              height: "40vh",
              position: "relative",
              marginBottom: "4%",
              backgroundColor: "white",
              padding: "3% 20%"
            }}
          >
            <Image
              src={projectMeta.image}
              alt={projectContent.title}
              fill
              style={{ objectFit: "contain", padding: "inherit" }}
            />
          </div>

          {/* Description */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            <h2 className="font-bold" style={{ 
              color: "#ccd6f6",
              fontSize: "2vw"
            }}>
              {t.projectPage.overview}
            </h2>
            <div
              style={{ 
                color: "#a8b2d1",
                fontSize: "1vw",
                lineHeight: "1.8",
                whiteSpace: "pre-line"
              }}
              dangerouslySetInnerHTML={{ __html: projectContent.longDescription }}
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap" style={{ gap: "2%", marginTop: "4%" }}>
            {projectMeta.link !== "#" && (
              <a
                href={projectMeta.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-mono transition-all hover:gap-3 rounded border hover:shadow-[0_0_20px_rgba(100,255,218,0.4)]"
                style={{ 
                  color: "#64ffda",
                  fontSize: "0.9vw",
                  gap: "1%",
                  padding: "1% 3%",
                  borderColor: "#64ffda",
                  whiteSpace: "nowrap"
                }}
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
                className="inline-flex items-center font-mono transition-all hover:gap-3 rounded border hover:shadow-[0_0_20px_rgba(100,255,218,0.4)]"
                style={{ 
                  color: "#64ffda",
                  fontSize: "0.9vw",
                  gap: "1%",
                  padding: "1% 3%",
                  borderColor: "rgba(100, 255, 218, 0.3)",
                  backgroundColor: "rgba(100, 255, 218, 0.05)",
                  whiteSpace: "nowrap"
                }}
              >
                {t.projectPage.viewOnGithub}
                <span>→</span>
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
