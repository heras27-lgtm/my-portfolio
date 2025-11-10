"use client"

import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className="fixed w-full top-0 z-50 border-b"
      style={{
        backgroundColor: "#0f1419",
        borderColor: "rgba(100, 255, 218, 0.1)",
        height: "8%"
      }}
    >
      <nav className="w-90% mx-auto h-full flex items-center justify-between" style={{ padding: "0 5%" }}>
        {/* Logo */}
        <Link href="/">
          <div
            className="border-2 flex items-center justify-center rounded font-bold cursor-pointer hover:opacity-80 transition-opacity"
            style={{ 
              borderColor: "#64ffda", 
              color: "#64ffda",
              width: "3vw",
              height: "3vw",
              fontSize: "1vw"
            }}
          >
            AHE
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          {[
            { label: "01. About", href: "#about" },
            { label: "02. Experience", href: "#experience" },
            { label: "03. Projects", href: "#projects" },
            { label: "04. Skills", href: "#skills" },
            { label: "05. Contact", href: "#contact" },
          ].map((item) => (
            <div
              key={item.href}
              style={{
                minWidth: "10vw",
                padding: "0.5vw 1vw",
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
                  fontSize: "1vw",
                  whiteSpace: "nowrap"
                }}
              >
                <span style={{ color: "#64ffda" }}>{item.label.split(".")[0]}.</span>
                {item.label.substring(item.label.indexOf(" "))}
              </a>
            </div>
          ))} 
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
            {[
              { label: "01. About", href: "#about" },
              { label: "02. Experience", href: "#experience" },
              { label: "03. Projects", href: "#projects" },
              { label: "04. Skills", href: "#skills" },
              { label: "05. Contact", href: "#contact" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-mono" style={{ color: "#a8b2d1" }}>
                <span style={{ color: "#64ffda" }}>{item.label.split(".")[0]}.</span>
                {item.label.substring(item.label.indexOf(" "))}
              </a>
            ))}
            <a
              href="#resume"
              className="px-4 py-2 border rounded text-sm font-mono w-fit"
              style={{
                borderColor: "#64ffda",
                color: "#64ffda",
              }}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
