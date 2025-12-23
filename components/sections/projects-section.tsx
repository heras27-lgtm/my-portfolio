"use client"

import { useLanguage } from "@/context/LanguageContext"
import Image from "next/image"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { projectsData } from "@/data/projects-content"
import { Reveal } from "@/components/reveal"

export function ProjectsSection() {
  const { language, t } = useLanguage()
  const [openProjectSlug, setOpenProjectSlug] = useState<string | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenProjectSlug(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const closeModal = () => setOpenProjectSlug(null)

  // Lock body scroll while modal open
  useEffect(() => {
    const prev = typeof document !== 'undefined' ? document.body.style.overflow : ''
    if (openProjectSlug) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = prev
    }
    return () => { if (typeof document !== 'undefined') document.body.style.overflow = prev }
  }, [openProjectSlug])

  

  // Normalize text for rendering: create distinct lines, convert bullets to ►, strip accent color styles and remove 💡
  const normalizeParagraphs = (raw: string) => {
    if (!raw) return ''
    // remove the lightbulb icon and normalize newlines
    let r = raw.replace(/💡/g, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n')
    // Remove inline styles that set color to the theme accent to avoid duplicating title color
    r = r.replace(/<span[^>]*style=["'][^"']*color\s*:\s*var\(--text-accent\)[^"']*["'][^>]*>/gi, '<span>')
    r = r.replace(/style=["'][^"']*color\s*:\s*var\(--text-accent\)[^"']*["']/gi, '')
    // Replace common bullet characters at line starts with ► marker
    r = r.replace(/(^|\n)\s*[•\-]\s*/g, '$1► ')
    r = r.replace(/(^|\n)\s*►\s*/g, '$1► ')

    // Build HTML: group consecutive ► lines into a <ul>, other lines into <p>
    const lines = r.split(/\n/).map(l => l.trim())
    const htmlParts: string[] = []
    let inList = false
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      if (!line) {
        if (inList) {
          htmlParts.push('</ul>')
          inList = false
        }
        continue
      }

      // detect section headings like Objective:, Challenge:, Approach: (EN/FR) and render them specially
      const plainLine = line.replace(/<[^>]*>/g, '').trim()
      const sectionMatch = plainLine.match(/^(Objective:|Challenge:|Approach:|Objectif\s*:|Défi\s*:|Approche\s*:)(\s*)(.*)$/i)
      if (sectionMatch) {
        // close list if open
        if (inList) {
          htmlParts.push('</ul>')
          inList = false
        }
        const label = sectionMatch[1].replace(':', '').trim()
        const rest = sectionMatch[3] ? sectionMatch[3].trim() : ''
        // add a subtitle and any following content as paragraph
        htmlParts.push(`<div class="project-subsection"><h5 class="project-subtitle">${label}</h5>${rest ? `<p>${rest}</p>` : ''}`)
        // try to collect subsequent lines that belong to this subsection until an empty line or next section
        let j = i + 1
        for (; j < lines.length; j++) {
          const next = lines[j].replace(/<[^>]*>/g, '').trim()
          if (!next) break
          if (/^(Objective:|Challenge:|Approach:|Objectif\s*:|Défi\s*:|Approche\s*:)/i.test(next)) break
          // if it's a bullet line, keep as list inside subsection
          if (next.startsWith('►')) {
            // start a inner list if not present
            htmlParts.push('<ul class="project-desc-list" style="margin:6px 0 8px 0; padding-left:0;">')
            while (j < lines.length && lines[j].replace(/<[^>]*>/g, '').trim().startsWith('►')) {
              const it = lines[j].replace(/<[^>]*>/g, '').trim().replace(/^►\s*/, '')
              htmlParts.push(`<li style=\"list-style:none; margin:4px 0;\">► ${it}</li>`)
              j++
            }
            htmlParts.push('</ul>')
            break
          } else {
            htmlParts.push(`<p>${next}</p>`)
          }
        }
        htmlParts.push('</div>')
        i = j - 1
        continue
      }
      if (line.startsWith('►')) {
        const content = line.replace(/^►\s*/, '')
        if (!inList) {
          htmlParts.push('<ul class="project-desc-list" style="margin:0 0 8px 0; padding-left:0;">')
          inList = true
        }
        // each item will render as a line prefixed by ► via CSS or raw char included
        htmlParts.push(`<li style=\"list-style:none; margin:6px 0;\">► ${content}</li>`)
      } else {
        if (inList) {
          htmlParts.push('</ul>')
          inList = false
        }
        htmlParts.push(`<p>${line}</p>`)
      }
    }
    if (inList) htmlParts.push('</ul>')
    return htmlParts.join('')
  }

  const extractSkillsFromLong = (raw: string, lang: string) => {
    if (!raw) return []
    // look for the Skills / Compétences marker
    const markerEn = /Skills Gained[:\u00A0]?/i
    const markerFr = /Compétences(?:\s+acquises)?[:\u00A0]?/i
    let idx = -1
    // remove lightbulb icons to simplify detection
    const cleanRaw = raw.replace(/💡/g, '')
    if (lang === 'fr') idx = cleanRaw.search(markerFr)
    if (idx === -1) idx = cleanRaw.search(markerEn)
    if (idx === -1) return []

    const sub = cleanRaw.slice(idx)
    const lines = sub.split(/\n/).map(l => l.trim()).filter(Boolean)
    const skills: string[] = []
    let collecting = false
    for (const line of lines) {
      if (!collecting && (markerEn.test(line) || markerFr.test(line))) {
        collecting = true
        continue
      }
      if (collecting) {
        // stop collecting on an empty line or when encountering HTML section markers that are not bullets
        if (!line) break
        // accept lines that start with • or - or are plain text
        const cleaned = line.replace(/^[•►\-]\s*/, '').replace(/<[^>]*>/g, '').trim()
        if (cleaned) {
          // stop if we reach another section marker (simple heuristic)
          if (/^<span|^Objective:|^Approach:|^Challenge:/i.test(line)) break
          skills.push(cleaned)
        }
      }
    }
    return skills
  }

  const stripSkillsSection = (raw: string, lang: string) => {
    if (!raw) return raw
    const markerEn = /Skills Gained[:\u00A0]?/i
    const markerFr = /Compétences(?:\s+acquises)?[:\u00A0]?/i
    let idx = -1
    // remove lightbulb icons and search in cleaned text
    const cleanRaw = raw.replace(/💡/g, '')
    if (lang === 'fr') idx = cleanRaw.search(markerFr)
    if (idx === -1) idx = cleanRaw.search(markerEn)
    if (idx === -1) return cleanRaw
    // return content before the skills marker to avoid duplicating text
    return cleanRaw.slice(0, idx)
  }

  return (
    <section id="projects" style={{ overflow: "hidden" }}>
      <Reveal translateY="1vh" threshold={0.1}>
      <main style={{ 
        padding: "3% 5% 5%",
        width: "90%",
        margin: "0 auto"
      }}>
        <style>{`
          #projects {
            margin-bottom: 7vh !important;
          }
          .project-card-mobile {
              position: relative;
              background: linear-gradient(135deg, var(--surface-subtle) 0%, transparent 100%);
              border-radius: 20px;
              overflow: hidden;
              border: 1px solid var(--surface-border);
              box-shadow: 0 8px 24px rgba(0,0,0,0.12);
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .project-card-mobile::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 4px;
              background: linear-gradient(90deg, var(--text-accent), var(--text-accent) 50%, transparent 50%);
              background-size: 200% 100%;
              transition: background-position 0.5s ease;
              z-index: 1;
            }
            .project-card-mobile::after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.08), transparent 40%);
              opacity: 0;
              transition: opacity 0.3s ease;
              pointer-events: none;
              z-index: 0;
            }
            .project-card-mobile:hover::after {
              opacity: 1;
            }
            .project-card-mobile:hover {
              transform: translateY(-4px);
              box-shadow: 0 12px 32px rgba(0,0,0,0.18);
              border-color: var(--text-accent);
            }
            .project-card-mobile:hover::before {
              background-position: -100% 0;
            }
            .project-card-mobile:active {
              transform: translateY(-2px) scale(0.99);
            }
            .project-image-mobile {
              position: relative;
              width: 100%;
              height: 180px;
              overflow: hidden;
              background: #fffffff1;
            }
            .project-image-mobile::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: 40px;
              background: linear-gradient(to top, var(--surface-subtle), transparent);
              pointer-events: none;
            }
            .project-image-mobile img {
              transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
              filter: brightness(0.95);
            }
            .project-card-mobile:hover .project-image-mobile img {
              transform: scale(1.05);
              filter: brightness(1);
            }
            .project-card-mobile:active .project-image-mobile img {
              transform: scale(1.08) rotate(1deg);
            }
            .project-content-mobile {
              padding: 16px;
              position: relative;
              z-index: 1;
            }
            .project-number-badge {
              position: absolute;
              top: 12px;
              right: 12px;
              width: 28px;
              height: 28px;
              background: var(--text-accent);
              color: var(--background);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 0.7rem;
              font-weight: 700;
              box-shadow: 0 2px 8px rgba(0,0,0,0.2);
              z-index: 1;
            }
            .project-title-mobile {
              font-size: 1rem;
              font-weight: 800;
              color: var(--text-primary);
              margin-bottom: 8px;
              line-height: 1.3;
              letter-spacing: -0.02em;
            }
            .project-desc-mobile {
              font-size: 0.85rem;
              color: var(--text-body);
              line-height: 1.4;
              margin-bottom: 12px;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
            .project-footer-mobile {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding-top: 10px;
              border-top: 1px solid var(--surface-border);
            }
            .project-link-mobile {
              display: inline-flex;
              align-items: center;
              gap: 6px;
              font-size: 0.8rem;
              color: var(--text-accent);
              font-weight: 700;
              text-decoration: none;
              transition: all 0.3s ease;
            }
            .project-link-arrow {
              transition: transform 0.3s ease;
            }
            .project-card-mobile:active .project-link-arrow {
              transform: translateX(4px);
            }
            .project-tech-count {
              font-size: 0.7rem;
              color: var(--text-secondary);
              display: flex;
              align-items: center;
              gap: 4px;
              opacity: 0.8;
            }
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .project-card-mobile {
              animation: fadeInUp 0.6s ease-out backwards;
            }
            .project-card-mobile:nth-child(1) { animation-delay: 0.1s; }
            .project-card-mobile:nth-child(2) { animation-delay: 0.2s; }
            .project-card-mobile:nth-child(3) { animation-delay: 0.3s; }
            .project-card-mobile:nth-child(4) { animation-delay: 0.4s; }
            .project-card-mobile:nth-child(5) { animation-delay: 0.5s; }
            .project-card-mobile:nth-child(6) { animation-delay: 0.6s; }
            .project-card-mobile:nth-child(7) { animation-delay: 0.7s; }

          .project-card {
            transition: box-shadow 0.5s ease, transform 0.4s ease, background-color 0.4s ease, border-left-width 0.3s ease;
            background-color: transparent;
            box-shadow: none;
          }
          .project-card:hover,
          .project-card:active {
            background-color: var(--surface-hover);
            box-shadow: 0 6px 22px -10px var(--chip-border);
            transform: translateY(-2px);
            border-left-width: 3px;
            border-color: var(--text-accent);
          }
          .light .project-card:hover,
          .light .project-card:active {
            box-shadow: 0 6px 22px -12px rgba(200,107,60,0.25);
          }
        `}</style>
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh"}}>
          
          <div className="flex items-center" style={{ gap: "2%" }}>
            <h2 className="font-bold" style={{ 
              color: 'var(--text-primary)',
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)"
            }}>
              <span style={{ color: 'var(--text-accent)' }}>03.</span> {t.projects.title}
            </h2>
            <div className="flex-grow" style={{ 
              backgroundColor: 'var(--surface-border)',
              height: '1px'
            }} />
          </div>

          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px"
          }}>
            {t.projects.list.map((project, index) => (
              <div key={index} style={{ textDecoration: 'none' }}>
                <div 
                  className="project-card-mobile"
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenProjectSlug((project as any).slug)}
                  onKeyDown={(e) => { if (e.key === 'Enter') setOpenProjectSlug((project as any).slug) }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                  }}
                >
                  <div className="project-number-badge">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  {(project as any).image && (
                    <div className="project-image-mobile">
                      <Image
                        src={(project as any).image}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'contain', padding: '20px' }}
                        sizes="(max-width: 768px) 100vw"
                      />
                    </div>
                  )}
                  <div className="project-content-mobile">
                    <h3 className="project-title-mobile">{project.title}</h3>
                    <p className="project-desc-mobile">
                      {(project as any).mobile ? (project as any).mobile.description : project.description}
                    </p>
                      <div className="project-footer-mobile">
                        <span className="project-tech-count">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 16v-4M12 8h.01"/>
                          </svg>
                          {(project as any).techCount} {(project as any).techCount === 1 ? 'tech' : 'techs'}
                        </span>
                      <span className="project-link-mobile">
                        {t.projects.viewProject}
                        <span className="project-link-arrow">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          
          
          <style>{`
            .project-modal .modal-overlay {
              background: rgba(0,0,0,0.78);
              backdrop-filter: blur(6px);
            }
            .project-modal-title {
              font-family: Georgia, 'Times New Roman', serif;
              font-weight: 900;
              font-size: clamp(1.6rem, 4.2vw, 2.4rem);
              line-height: 1.02;
              letter-spacing: -0.02em;
              color: var(--text-primary);
            }
            .project-modal-title .accent {
              color: var(--text-accent);
              display: inline-block;
            }
            .project-modal .modal-container .modal-subtitle {
              font-size: 1.18rem;
              margin: 8px 0 6px 0;
              font-weight: 800;
              color: var(--text-accent);
            }
            .project-subtitle {
              margin: 10px 0 6px 0;
              font-weight: 800;
              color: #ffffff;
              font-size: 1rem;
              letter-spacing: -0.01em;
            }
            .project-subsection p { margin: 6px 0 0 0; }
            .project-desc-list li { margin-left: 0; }
            .project-modal .modal-container .tech-badge {
              display: inline-flex;
              align-items: center;
              gap: 6px;
              padding: 6px 10px;
              border-radius: 999px;
              transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, background 0.18s ease;
              cursor: pointer;
            }
            .project-modal .modal-container .tech-badge:hover {
              transform: translateY(-4px) scale(1.03);
              box-shadow: 0 12px 30px rgba(0,0,0,0.18);
              border-color: var(--text-accent);
              background: rgba(0,0,0,0.04);
            }
            .light .project-modal .modal-container .tech-badge:hover {
              background: rgba(0,0,0,0.06);
            }
            .project-modal .modal-container p {
              font-size: 1.06rem;
              margin: 6px 0;
            }
            .project-modal .modal-container .skill-item {
              font-size: 1.06rem;
            }
            .project-modal .modal-container {
              width: min(880px, 92%);
              max-height: 80vh;
              /* reserve space top-right so header/content cannot underlap the close button */
              padding: 28px 36px 20px 28px;
              box-shadow: 0 16px 40px rgba(0,0,0,0.30);
              /* Use a solid, opaque background to ensure the modal box is not translucent */
              background: var(--background);
              background-color: var(--background);
              opacity: 1;
              border: 1px solid var(--surface-border);
            }
            /* In light mode use a flat background instead of gradient for better contrast */
            .light .project-modal .modal-container {
              background: var(--background);
            }
            /* ensure subsection labels are black in light mode for contrast */
            .light .project-modal .modal-container .project-subtitle {
              color: #000000;
            }
            @media (max-width: 640px) {
              .project-modal .modal-container {
                position: fixed;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                height: 68vh;
                /* slightly larger top padding on mobile to avoid overlap with close button */
                padding: 14px 16px 18px 14px;
                max-height: none;
                margin: 0;
                border-radius: 12px 12px 0 0;
                box-shadow: 0 -8px 30px rgba(0,0,0,0.28);
                transform: translateY(0);
              }
              /* make title clearly larger on mobile */
              .project-modal-title { font-size: clamp(1.8rem, 8vw, 2.6rem); }
              /* ensure subtitle is visibly smaller than title but larger than body */
              .project-modal .modal-container .modal-subtitle { font-size: 1.06rem; }
              /* body text slightly smaller for better hierarchy */
              .project-modal .modal-container p { font-size: 1rem; }
              .project-modal .modal-container .project-subtitle { font-size: 0.96rem; }
              .project-modal .modal-container .skill-item { font-size: 1rem; }
              .project-modal .modal-handle {
                width: 48px;
                height: 5px;
                background: rgba(0,0,0,0.12);
                border-radius: 999px;
                margin: 6px auto 10px auto;
              }
              .project-modal .modal-container img { object-fit: cover }
            }
            /* modal image size and white filler behind images */
            .project-modal .modal-container .modal-image { height: 220px; background: #ffffff; padding: 8px; display: flex; align-items: center; justify-content: center; }
            @media (max-width: 640px) {
              .project-modal .modal-container .modal-image { height: 140px; padding: 6px; }
            }
            /* close button: pointer cursor and subtle hover */
            .project-modal .modal-container .modal-close {
              position: absolute;
              right: 12px;
              top: 12px;
              background: transparent;
              border: none;
              font-size: 1.2rem;
              cursor: pointer;
              padding: 6px;
              border-radius: 8px;
              color: var(--text-body);
              z-index: 60;
              transition: background 0.12s ease, color 0.12s ease;
            }
            .project-modal .modal-container .modal-close:hover {
              background: rgba(0,0,0,0.06);
              color: var(--text-primary);
            }
            .project-modal .modal-container .modal-footer {
              display: flex;
              justify-content: flex-end;
              margin-top: 12px;
            }
            .project-modal .modal-container .modal-cta {
              display: inline-block;
              background: var(--text-accent);
              color: var(--background);
              padding: 10px 14px;
              border-radius: 10px;
              text-decoration: none;
              font-weight: 700;
              box-shadow: 0 6px 18px rgba(0,0,0,0.12);
              transition: transform 0.12s ease, filter 0.12s ease;
            }
            .project-modal .modal-container .modal-cta:hover {
              transform: translateY(-2px);
              filter: brightness(0.98);
            }
            @media (max-width: 640px) {
              .project-modal .modal-container .modal-footer { justify-content: center; }
              .project-modal .modal-container .modal-cta { width: 100%; max-width: 360px; text-align: center; }
            }
          `}</style>
        </div>
      </main>
          {/* Modal rendered in portal so fixed positioning relates to viewport */}
          {openProjectSlug && (() => {
            const proj = (t.projects.list as any).find((p: any) => p.slug === openProjectSlug)
            if (!proj) return null
            const long = (projectsData as any)[language]?.[openProjectSlug]?.longDescription || proj?.description || ''

            const modal = (
              <div aria-modal="true" role="dialog" className="fixed inset-0 z-50 flex items-center justify-center project-modal">
                <div className="fixed inset-0 modal-overlay" onClick={closeModal} />
                <div className="modal-container bg-background rounded-lg p-6 relative z-10" style={{ overflow: 'auto' }}>
                  <div className="modal-handle" aria-hidden="true" />
                  <button onClick={closeModal} aria-label="Close" className="modal-close">✕</button>
                  <div style={{ display: 'flex', gap: '18px', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <h3 className="project-modal-title" style={{ margin: 0 }}>
                        <span className="accent">{proj.title}</span>
                      </h3>
                    </div>
                    {(proj as any).image && (
                      <div className="modal-image" style={{ width: '100%', position: 'relative', borderRadius: 8, overflow: 'hidden', background: 'var(--surface-subtle)' }}>
                        <Image src={(proj as any).image} alt={(proj as any).title} fill style={{ objectFit: 'contain' }} />
                      </div>
                    )}
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {((proj as any).tech || []).slice(0, 8).map((tech: string) => (
                        <span key={tech} className="tech-badge" style={{ backgroundColor: 'var(--chip-bg)', color: 'var(--text-accent)', border: '1px solid var(--chip-border)', padding: '6px 10px', borderRadius: 999, fontSize: '0.85rem' }}>{tech}</span>
                      ))}
                    </div>
                    <div>
                      <h4 className="modal-subtitle" style={{ margin: '8px 0 6px 0', fontWeight: 800, color: 'var(--text-accent)' }}>{t.projects.modalDescription}</h4>
                      <div style={{ color: 'var(--text-body)', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: normalizeParagraphs(stripSkillsSection(long, language)) }} />
                    </div>

                    {/* Compétences gagnées / Skills gained section */}
                    {(() => {
                      const skillsFromData = (projectsData as any)[language]?.[openProjectSlug]?.skillsGained
                      const skills = Array.isArray(skillsFromData) && skillsFromData.length ? skillsFromData : extractSkillsFromLong(long, language)
                      if (!skills || skills.length === 0) return null
                      return (
                        <div style={{ marginTop: 12 }}>
                          <h4 className="modal-subtitle" style={{ margin: '6px 0 8px 0', fontWeight: 800, color: 'var(--text-accent)' }}>{t.projects.modalSkillsGained}</h4>
                          <ul style={{ margin: 0, paddingLeft: 0, color: 'var(--text-body)', lineHeight: 1.6, display: 'grid', gap: 8 }}>
                            {skills.map((s: string, i: number) => (
                              <li key={`${openProjectSlug}-skill-${i}`} style={{ listStyle: 'none', margin: 0 }}>
                                <div className="skill-item" style={{ background: 'var(--surface-subtle)', padding: '8px 10px', borderRadius: 8, borderLeft: '4px solid var(--text-accent)', color: 'var(--text-body)' }}>{s}</div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })()}
                    {((proj as any).demo || (proj as any).github) && (
                      <div className="modal-footer" style={{ marginTop: 18 }}>
                        <a
                          href={(proj as any).demo ? (proj as any).demo : (proj as any).github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="modal-cta"
                        >
                          { (proj as any).demo ? (language === 'fr' ? 'Voir la démo' : 'View demo') : (language === 'fr' ? 'Voir sur GitHub' : 'View on GitHub') }
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )

            if (typeof document !== 'undefined') {
              return createPortal(modal, document.body)
            }
            return modal
          })()}

      </Reveal>
    </section>
  )
}
