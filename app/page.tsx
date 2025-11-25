"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MobileNotice } from "@/components/mobile-notice"
import { ScrollProgress } from "@/components/scroll-progress"
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
        .main-container { padding-top: 0vh; }
        @media (max-width: 640px) { .main-container { padding-top: 12vh; } }
      `}</style>
      <div className="min-h-screen main-container" style={{ 
        backgroundColor: "var(--background)",
        paddingBottom: "2vh",
        display: 'flex',
        flexDirection: 'column',
        gap: '4vh'
      }}>
        <ScrollProgress />
        <MobileNotice />
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
