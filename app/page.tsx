"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Toaster } from "sonner"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <>
      <style>{`
        .main-container {
          padding-top: 8%;
        }
        @media (max-width: 640px) {
          .main-container {
            padding-top: 8% !important;
          }
        }
        @media (min-width: 641px) {
          .main-container {
            padding-top: 0 !important;
          }
        }
      `}</style>
      <div className="min-h-screen main-container" style={{ 
        backgroundColor: "#0f1419",
        paddingBottom: "2vh"
      }}>
        <Header />
        <Toaster position="bottom-center" richColors />
        <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
    </>
  )
}
