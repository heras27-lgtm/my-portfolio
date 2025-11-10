"use client"

import Link from "next/link"
import { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navigationItems = [
    { label: `01. ${t.header.about}`, href: "#about" },
    { label: `02. ${t.header.experience}`, href: "#experience" },
    { label: `03. ${t.header.projects}`, href: "#projects" },
    { label: `04. ${t.header.skills}`, href: "#skills" },
    { label: `05. ${t.header.contact}`, href: "#contact" },
  ]

  return (
    <header
      className="fixed w-full top-0 z-50 border-b mb-0"
      style={{
        backgroundColor: "#0f1419",
        borderColor: "rgba(100, 255, 218, 0.1)",
        height: "8%",
        marginBottom: "0",
      }}
    >
      {/* Supprimer le margin-bottom sur mobile pour éviter la bande blanche */}
  <nav className="w-90% mx-auto h-full flex items-center justify-between" style={{ padding: "0 5%" }}>
        {/* Logo */}
        <Link href="/">
          <div
            className="border-2 flex items-center justify-center rounded font-bold cursor-pointer hover:opacity-80 transition-opacity aspect-square"
            style={{ 
              borderColor: "#64ffda", 
              color: "#64ffda",
              width: "clamp(2.5rem, 3vw, 3.5rem)",
              fontSize: "clamp(0.8rem, 1vw, 1.2rem)"
            }}
          >
            AHE
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navigationItems.map((item) => (
            <div
              key={item.href}
              style={{
                minWidth: "10vw",
                padding: "clamp(0.3rem, 0.5vw, 0.8rem) clamp(0.5rem, 1vw, 1.5rem)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <a
                href={item.href}
                className="font-mono hover:opacity-80 transition-opacity"
                style={{ 
                  color: "#a8b2d1",
                  fontSize: "clamp(0.8rem, 1vw, 1.1rem)",
                  whiteSpace: "nowrap"
                }}
              >
                <span style={{ color: "#64ffda" }}>{item.label.split(".")[0]}.</span>
                {item.label.substring(item.label.indexOf(" "))}
              </a>
            </div>
          ))}
          
          {/* Language Selector */}
          <div className="flex gap-1 ml-4" style={{ borderLeft: "1px solid rgba(100, 255, 218, 0.1)", paddingLeft: "clamp(0.8rem, 1.5vw, 2rem)" }}>
            <button
              onClick={() => setLanguage("en")}
              className="font-mono px-2 py-1 rounded transition-all cursor-pointer"
              style={{
                color: language === "en" ? "#64ffda" : "#a8b2d1",
                backgroundColor: language === "en" ? "rgba(100, 255, 218, 0.1)" : "transparent",
                fontSize: "clamp(0.75rem, 0.9vw, 1rem)",
                border: language === "en" ? "1px solid rgba(100, 255, 218, 0.3)" : "1px solid transparent",
                cursor: "pointer"
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("fr")}
              className="font-mono px-2 py-1 rounded transition-all cursor-pointer"
              style={{
                color: language === "fr" ? "#64ffda" : "#a8b2d1",
                backgroundColor: language === "fr" ? "rgba(100, 255, 218, 0.1)" : "transparent",
                fontSize: "clamp(0.75rem, 0.9vw, 1rem)",
                border: language === "fr" ? "1px solid rgba(100, 255, 218, 0.3)" : "1px solid transparent",
                cursor: "pointer"
              }}
            >
              FR
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} style={{ color: "#64ffda" }}>
          ☰
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: "#0a0e13", borderColor: "rgba(100, 255, 218, 0.1)" }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-mono" style={{ color: "#a8b2d1" }}>
                <span style={{ color: "#64ffda" }}>{item.label.split(".")[0]}.</span>
                {item.label.substring(item.label.indexOf(" "))}
              </a>
            ))}
            
            {/* Mobile Language Selector */}
            <div className="flex gap-2 mt-4 pt-4" style={{ borderTop: "1px solid rgba(100, 255, 218, 0.1)" }}>
              <button
                onClick={() => {
                  setLanguage("en")
                  setIsOpen(false)
                }}
                className="font-mono px-3 py-1 rounded text-sm flex-1 transition-all cursor-pointer"
                style={{
                  color: language === "en" ? "#64ffda" : "#a8b2d1",
                  backgroundColor: language === "en" ? "rgba(100, 255, 218, 0.1)" : "transparent",
                  border: language === "en" ? "1px solid rgba(100, 255, 218, 0.3)" : "1px solid transparent",
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
                  color: language === "fr" ? "#64ffda" : "#a8b2d1",
                  backgroundColor: language === "fr" ? "rgba(100, 255, 218, 0.1)" : "transparent",
                  border: language === "fr" ? "1px solid rgba(100, 255, 218, 0.3)" : "1px solid transparent",
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