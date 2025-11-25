"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => setMounted(true), [])

  const isProjectPage = pathname?.startsWith('/projects/')

  const navigationItems = [
    { label: `01. ${t.header.about}`, href: isProjectPage ? "/#about" : "#about", isContact: false },
    { label: `02. ${t.header.experience}`, href: isProjectPage ? "/#experience" : "#experience", isContact: false },
    { label: `03. ${t.header.projects}`, href: isProjectPage ? "/#projects" : "#projects", isContact: false },
    { label: `04. ${t.header.skills}`, href: isProjectPage ? "/#skills" : "#skills", isContact: false },
    { label: t.header.contact, href: isProjectPage ? "/#contact" : "#contact", isContact: true },
  ]

  return (
    <header
      className="fixed w-full top-0 z-50 border-b mb-0"
      style={{
        backgroundColor: mounted && resolvedTheme === "light" ? "var(--header-bg-light)" : "oklch(0.145 0 0)",
        borderColor: mounted && resolvedTheme === "light" ? "rgba(200, 107, 60, 0.2)" : "rgba(100, 255, 218, 0.1)",
        height: "8%",
        marginBottom: "0",
      }}
    >
      <nav className="w-90% mx-auto h-full flex items-center justify-between header-nav" style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <Link href="/" className="flex items-center">
          <div
            className="border-2 flex items-center justify-center rounded font-bold cursor-pointer hover:opacity-80 transition-opacity aspect-square"
            style={{ 
              borderColor: mounted && resolvedTheme === "light" ? "#C86B3C" : "#64ffda",
              color: mounted && resolvedTheme === "light" ? "#C86B3C" : "#64ffda",
              width: "clamp(2.5rem, 3vw, 3.5rem)",
              fontSize: "clamp(0.8rem, 1vw, 1.2rem)"
            }}
          >
            AHE
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navigationItems.map((item) => (
            <div
              key={item.href}
              style={{
                minWidth: item.isContact ? "auto" : "10vw",
                padding: "clamp(0.3rem, 0.5vw, 0.8rem) clamp(0.5rem, 1vw, 1.5rem)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {item.isContact ? (
                <a
                  href={item.href}
                  className="font-mono transition-all border rounded header-contact-btn"
                  style={{ 
                    color: mounted && resolvedTheme === "light" ? "#C86B3C" : "#64ffda",
                    borderColor: mounted && resolvedTheme === "light" ? "#C86B3C" : "#64ffda",
                    fontSize: "clamp(0.8rem, 1vw, 1.1rem)",
                    whiteSpace: "nowrap",
                    padding: "clamp(0.4rem, 0.6vw, 0.8rem) clamp(0.8rem, 1.2vw, 1.5rem)",
                    borderWidth: "1px"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = mounted && resolvedTheme === "light" ? "rgba(200, 107, 60, 0.1)" : "rgba(100, 255, 218, 0.1)"
                    e.currentTarget.style.boxShadow = mounted && resolvedTheme === "light" 
                      ? "0 4px 12px rgba(200, 107, 60, 0.3)" 
                      : "0 4px 12px rgba(100, 255, 218, 0.3)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  href={item.href}
                  className="font-mono hover:opacity-80 transition-opacity"
                  style={{ 
                    color: mounted && resolvedTheme === "light" ? "#6B5344" : "#a8b2d1",
                    fontSize: "clamp(0.8rem, 1vw, 1.1rem)",
                    whiteSpace: "nowrap"
                  }}
                >
                  <span style={{ color: mounted && resolvedTheme === "light" ? "#C86B3C" : "#64ffda" }}>{item.label.split(".")[0]}.</span>
                  {item.label.substring(item.label.indexOf(" "))}
                </a>
              )}
            </div>
          ))}
          
          <div style={{ 
            borderLeft: mounted && resolvedTheme === "light" ? "1px solid rgba(200, 107, 60, 0.2)" : "1px solid rgba(100, 255, 218, 0.1)", 
            height: "clamp(2rem, 2.5vw, 2.5rem)",
            marginLeft: "clamp(0.6rem, 1vw, 1rem)"
          }} />

          <div className="flex items-center gap-1 ml-2">
            <button
              onClick={() => setLanguage("en")}
              className="font-mono px-2 py-1 rounded transition-all cursor-pointer"
              style={{
                color: language === "en" ? (mounted && resolvedTheme === "light" ? "#C86B3C" : "#64ffda") : (mounted && resolvedTheme === "light" ? "#6B5344" : "#a8b2d1"),
                backgroundColor: language === "en" ? (mounted && resolvedTheme === "light" ? "rgba(200, 107, 60, 0.1)" : "rgba(100, 255, 218, 0.1)") : "transparent",
                fontSize: "clamp(0.75rem, 0.9vw, 1rem)",
                border: language === "en" ? (mounted && resolvedTheme === "light" ? "1px solid rgba(200, 107, 60, 0.3)" : "1px solid rgba(100, 255, 218, 0.3)") : "1px solid transparent",
                cursor: "pointer"
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("fr")}
              className="font-mono px-2 py-1 rounded transition-all cursor-pointer"
              style={{
                color: language === "fr" ? (mounted && resolvedTheme === "light" ? "#C86B3C" : "#64ffda") : (mounted && resolvedTheme === "light" ? "#6B5344" : "#a8b2d1"),
                backgroundColor: language === "fr" ? (mounted && resolvedTheme === "light" ? "rgba(200, 107, 60, 0.1)" : "rgba(100, 255, 218, 0.1)") : "transparent",
                fontSize: "clamp(0.75rem, 0.9vw, 1rem)",
                border: language === "fr" ? (mounted && resolvedTheme === "light" ? "1px solid rgba(200, 107, 60, 0.3)" : "1px solid rgba(100, 255, 218, 0.3)") : "1px solid transparent",
                cursor: "pointer"
              }}
            >
              FR
            </button>
          </div>

          <div style={{ 
            borderLeft: mounted && resolvedTheme === "light" ? "1px solid rgba(200, 107, 60, 0.2)" : "1px solid rgba(100, 255, 218, 0.1)", 
            height: "clamp(2rem, 2.5vw, 2.5rem)",
            marginLeft: "clamp(0.6rem, 1vw, 1rem)"
          }} />

          <button
            onClick={() => setTheme((resolvedTheme === "light" ? "dark" : "light"))}
            aria-label={mounted ? (resolvedTheme === "light" ? "Activer le mode sombre" : "Activer le mode clair") : "Changer de thème"}
            className="ml-2 rounded transition-all cursor-pointer flex items-center justify-center"
            style={{
              color: mounted && resolvedTheme === "light" ? "#C86B3C" : "#64ffda",
              border: mounted && resolvedTheme === "light" ? "1px solid rgba(200, 107, 60, 0.3)" : "1px solid rgba(100, 255, 218, 0.3)",
              width: "clamp(2rem, 2.5vw, 2.5rem)",
              height: "clamp(2rem, 2.5vw, 2.5rem)"
            }}
            title={mounted ? (resolvedTheme === "light" ? "Dark mode" : "Light mode") : "Toggle theme"}
          >
            {mounted && resolvedTheme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setTheme((resolvedTheme === "light" ? "dark" : "light"))}
            aria-label={mounted ? (resolvedTheme === "light" ? "Activer le mode sombre" : "Activer le mode clair") : "Changer de thème"}
            className="rounded-full transition-all cursor-pointer flex items-center justify-center"
            style={{
              color: mounted && resolvedTheme === "light" ? "#C86B3C" : "#64ffda",
              border: mounted && resolvedTheme === "light" ? "1px solid rgba(200, 107, 60, 0.3)" : "1px solid rgba(100, 255, 218, 0.3)",
              boxSizing: "border-box",
              padding: "0",
              width: "clamp(2.5rem, 3vw, 3.5rem)",
              height: "clamp(2.5rem, 3vw, 3.5rem)"
            }}
            title={mounted ? (resolvedTheme === "light" ? "Dark mode" : "Light mode") : "Toggle theme"}
          >
            {mounted && resolvedTheme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button className="flex items-center justify-center" aria-label="Open menu" onClick={() => setIsOpen(!isOpen)} style={{ color: mounted && resolvedTheme === "light" ? "#C86B3C" : "#64ffda", fontSize: "clamp(1.8rem, 8vw, 2.6rem)", lineHeight: 1, padding: "0", width: "clamp(2.5rem, 3vw, 3.5rem)", height: "clamp(2.5rem, 3vw, 3.5rem)", cursor: "pointer" }}>
            ☰
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className="md:hidden border-t border-b"
          style={{ 
            backgroundColor: mounted && resolvedTheme === "light" ? "var(--header-bg-light)" : "oklch(0.145 0 0)",
            borderColor: mounted && resolvedTheme === "light" ? "rgba(200, 107, 60, 0.2)" : "rgba(100, 255, 218, 0.1)" 
          }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navigationItems.map((item) => (
              item.isContact ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-mono border rounded text-center inline-block"
                  style={{ 
                    color: mounted && resolvedTheme === "light" ? "#C86B3C" : "#64ffda",
                    borderColor: mounted && resolvedTheme === "light" ? "#C86B3C" : "#64ffda",
                    padding: "0.6rem 1rem",
                    borderWidth: "1px",
                    boxSizing: "border-box",
                    width: "fit-content",
                    alignSelf: "flex-start"
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-mono"
                  style={{ color: mounted && resolvedTheme === "light" ? "#6B5344" : "#a8b2d1" }}
                  onClick={() => setIsOpen(false)}
                >
                  <span style={{ color: mounted && resolvedTheme === "light" ? "#C86B3C" : "#64ffda" }}>{item.label.split(".")[0]}.</span>
                  {item.label.substring(item.label.indexOf(" "))}
                </a>
              )
            ))}
            
            {/* Mobile Language Selector */}
            <div className="flex gap-2 mt-4 pt-4" style={{ borderTop: mounted && resolvedTheme === "light" ? "1px solid rgba(200, 107, 60, 0.2)" : "1px solid rgba(100, 255, 218, 0.1)" }}>
              <button
                onClick={() => {
                  setLanguage("en")
                  setIsOpen(false)
                }}
                className="font-mono px-3 py-1 rounded text-sm flex-1 transition-all cursor-pointer"
                style={{
                  color: language === "en" ? (mounted && resolvedTheme === "light" ? "#C86B3C" : "#64ffda") : (mounted && resolvedTheme === "light" ? "#6B5344" : "#a8b2d1"),
                  backgroundColor: language === "en" ? (mounted && resolvedTheme === "light" ? "rgba(200, 107, 60, 0.1)" : "rgba(100, 255, 218, 0.1)") : "transparent",
                  border: language === "en" ? (mounted && resolvedTheme === "light" ? "1px solid rgba(200, 107, 60, 0.3)" : "1px solid rgba(100, 255, 218, 0.3)") : "1px solid transparent",
                  cursor: "pointer"
                }}
              >
                English
              </button>
              <button
                onClick={() => {
                  setLanguage("fr")
                  setIsOpen(false)
                }}
                className="font-mono px-3 py-1 rounded text-sm flex-1 transition-all cursor-pointer"
                style={{
                  color: language === "fr" ? (mounted && resolvedTheme === "light" ? "#C86B3C" : "#64ffda") : (mounted && resolvedTheme === "light" ? "#6B5344" : "#a8b2d1"),
                  backgroundColor: language === "fr" ? (mounted && resolvedTheme === "light" ? "rgba(200, 107, 60, 0.1)" : "rgba(100, 255, 218, 0.1)") : "transparent",
                  border: language === "fr" ? (mounted && resolvedTheme === "light" ? "1px solid rgba(200, 107, 60, 0.3)" : "1px solid rgba(100, 255, 218, 0.3)") : "1px solid transparent",
                  cursor: "pointer"
                }}
              >
                Français
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}