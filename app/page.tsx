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
    <div className="min-h-screen" style={{ backgroundColor: "#0f1419" }}>
      <Header />
      <Toaster position="bottom-center" richColors />
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  )
}
