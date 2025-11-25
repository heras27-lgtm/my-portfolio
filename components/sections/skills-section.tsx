"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Reveal } from "@/components/reveal"
import { useState } from "react"

export function SkillsSection() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

  const categoryIcons = ['💻', '🎨', '📐', '📊', '🤖', '⚙️']
  const categoryColors = [
    'rgba(100, 200, 255, 0.15)',
    'rgba(255, 150, 100, 0.15)',
    'rgba(236, 72, 153, 0.2)',
    'rgba(59, 130, 246, 0.2)',
    'rgba(138, 43, 226, 0.2)',
    'rgba(34, 197, 94, 0.2)'
  ]
  const categoryBgColors = [
    'linear-gradient(135deg, rgba(100, 200, 255, 0.15), rgba(59, 130, 246, 0.1))',
    'linear-gradient(135deg, rgba(255, 150, 100, 0.15), rgba(249, 115, 22, 0.1))',
    'linear-gradient(135deg, rgba(236, 72, 153, 0.25), rgba(219, 39, 119, 0.15))',
    'linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(37, 99, 235, 0.15))',
    'linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(138, 43, 226, 0.15))',
    'linear-gradient(135deg, rgba(74, 222, 128, 0.25), rgba(34, 197, 94, 0.15))'
  ]

  return (
    <section id="skills" style={{ overflowX: "hidden", overflowY: "visible" }}>
      <Reveal translateY="2vh" threshold={0.1}>
      <main style={{ 
        padding: "2% 5% 1vh",
        width: "90%",
        margin: "0 auto"
      }}>
        <style>{`
          @media (max-width: 640px) {
            #skills {
              margin-bottom: 7vh !important;
            }
          }

          .hexagon-container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 0;
            min-height: auto;
            position: relative;
            transition: none;
            gap: 0;
          }

          .main-hexagon-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 30px;
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            padding: 40px 0 50px;
          }

          .main-hexagon-wrapper.zoomed {
            transform: scale(2);
            opacity: 0;
            pointer-events: none;
            padding-bottom: 0;
          }

          .main-hexagon-inner {
            width: 100%;
            height: 100%;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            background: linear-gradient(135deg, var(--surface-subtle), var(--surface-hover));
            border: 3px solid var(--text-accent);
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 30px rgba(200, 107, 60, 0.3);
          }

          .main-hexagon-inner div {
            font-size: clamp(1.5rem, 2.5vw, 2rem) !important;
          }

          .category-hexagon {
            width: 170px;
            height: 196px;
            cursor: pointer;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
          }

          .category-hexagon:nth-child(1) {
            transform: translateY(-35px);
          }

          .category-hexagon:nth-child(2) {
            transform: translateY(15px);
          }

          .category-hexagon:nth-child(3) {
            transform: translateY(-25px);
          }

          .category-hexagon:nth-child(4) {
            transform: translateY(25px);
          }

          .category-hexagon:nth-child(5) {
            transform: translateY(-15px);
          }

          .category-hexagon:nth-child(6) {
            transform: translateY(35px);
          }

          .category-hexagon:hover {
            transform: scale(1.15) translateY(0) !important;
            z-index: 10;
          }

          .category-hexagon-inner {
            width: 100%;
            height: 100%;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            background: var(--surface-subtle);
            border: 2px solid var(--surface-border);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: all 0.4s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            position: relative;
            overflow: hidden;
          }

          .category-hexagon-inner::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, transparent 0%, var(--text-accent) 100%);
            opacity: 0;
            transition: opacity 0.4s ease;
          }

          .category-hexagon-inner > * {
            position: relative;
            z-index: 1;
          }

          .category-hexagon:hover .category-hexagon-inner {
            border-color: var(--text-accent);
            box-shadow: 0 0 35px rgba(200, 107, 60, 0.6), inset 0 0 20px rgba(200, 107, 60, 0.2);
          }

          .category-hexagon:hover .category-hexagon-inner::before {
            opacity: 0.15;
          }



          .hex-icon {
            font-size: 2.5rem;
            transition: transform 0.3s ease;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
          }

          .category-hexagon:hover .hex-icon {
            transform: scale(1.2) rotate(10deg);
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4));
          }

          .hex-title {
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--text-primary);
            text-align: center;
            padding: 0 10px;
          }

          .expanded-view {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 0;
            opacity: 0;
            max-height: 0;
            overflow: visible;
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            pointer-events: none;
          }

          .expanded-view.visible {
            opacity: 1;
            max-height: 3000px;
            pointer-events: all;
            padding: 0;
          }

          .expanded-hexagons {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 25px;
            max-width: 1200px;
            padding: 0;
          }

          .skill-hexagon {
            width: 140px;
            height: 161px;
            position: relative;
            animation: popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .skill-hexagon:nth-child(2n+1) {
            transform: translateY(-15px);
          }

          .skill-hexagon:nth-child(2n) {
            transform: translateY(15px);
          }

          .skill-hexagon:hover {
            transform: scale(1.1) rotate(5deg) !important;
          }

          .skill-hexagon-inner {
            width: 100%;
            height: 100%;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            background: linear-gradient(135deg, var(--surface-hover), var(--surface-subtle));
            border: 2px solid var(--chip-border);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px;
            transition: all 0.3s ease;
          }

          .skill-hexagon:hover .skill-hexagon-inner {
            border-color: var(--text-accent);
            box-shadow: 0 0 20px rgba(200, 107, 60, 0.4);
            background: linear-gradient(135deg, var(--text-accent), var(--surface-hover));
          }

          .skill-text {
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--text-body);
            text-align: center;
            word-wrap: break-word;
            transition: color 0.3s ease;
          }

          .skill-hexagon:hover .skill-text {
            color: white;
          }

          .back-button {
            background: var(--text-accent);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 25px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            margin-top: 60px;
          }

          .back-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(200, 107, 60, 0.4);
          }

          .expanded-title {
            width: 100%;
            text-align: center;
            margin-bottom: 45px;
            margin-top: -200px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            font-size: clamp(1.5rem, 3vw, 2.5rem);
            color: var(--text-accent);
            font-weight: bold;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes zoomIn {
            from {
              opacity: 0;
              transform: scale(0.5);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes popIn {
            from {
              opacity: 0;
              transform: scale(0) rotate(-180deg);
            }
            to {
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
          }

          @media (max-width: 768px) {
            main {
              padding: 2% 5% 1vh !important;
            }
            .main-hexagon-wrapper {
              gap: 15px;
              padding: 10px 0 5px !important;
            }
            .main-hexagon-wrapper.zoomed {
              padding-bottom: 0 !important;
            }
            .main-hexagon {
              width: 130px;
              height: 150px;
            }
            .category-hexagon {
              width: 120px;
              height: 138px;
            }
            .hex-icon {
              font-size: 1.8rem;
            }
            .hex-title {
              font-size: 0.75rem;
            }
            .skill-hexagon {
              width: 110px;
              height: 127px;
            }
            .skill-text {
              font-size: 0.75rem;
            }
            .expanded-hexagons {
              gap: 15px;
              padding: 0;
            }
            .expanded-title {
              margin-bottom: 40px !important;
              margin-top: -400px !important;
              font-size: clamp(1.2rem, 5vw, 1.8rem) !important;
            }
            .back-button {
              margin-top: 30px !important;
              padding: 10px 25px !important;
              font-size: 0.9rem !important;
            }
            .flex.items-center {
              margin-bottom: 5vh !important;
            }
          }
        `}</style>
        <div style={{ display: "flex", flexDirection: "column" }}>
          
          <div className="flex items-center" style={{ gap: "2%", marginBottom: "3vh" }}>
            <h2 className="font-bold" style={{ 
              color: 'var(--text-primary)',
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)"
            }}>
              <span style={{ color: 'var(--text-accent)' }}>04.</span> {t.skills.title}
            </h2>
            <div className="flex-grow" style={{ 
              backgroundColor: 'var(--surface-border)',
              height: '1px'
            }} />
          </div>

          {/* Category Hexagons */}
          <div className={`hexagon-container ${selectedCategory !== null ? 'expanded' : ''}`}>
            <div className={`main-hexagon-wrapper ${selectedCategory !== null ? 'zoomed' : ''}`}>
              {t.skills.categories.map((category, index) => (
                <div
                  key={index}
                  className="category-hexagon"
                  onClick={() => setSelectedCategory(index)}
                >
                  <div 
                    className="category-hexagon-inner"
                    style={{ 
                      background: categoryBgColors[index]
                    }}
                  >
                    <div className="hex-icon">{categoryIcons[index]}</div>
                    <div className="hex-title">{category.category}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Expanded View - Skills as Hexagons */}
            <div className={`expanded-view ${selectedCategory !== null ? 'visible' : ''}`}>
              {selectedCategory !== null && (
                <>
                  <div className="expanded-title">
                    <span>{categoryIcons[selectedCategory]}</span>
                    <span>{t.skills.categories[selectedCategory].category}</span>
                  </div>
                  
                  <div className="expanded-hexagons">
                    {t.skills.categories[selectedCategory].skills.map((skill, idx) => (
                      <div
                        key={skill}
                        className="skill-hexagon"
                        style={{
                          animationDelay: `${idx * 0.08}s`
                        }}
                      >
                        <div className="skill-hexagon-inner">
                          <div className="skill-text">{skill}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button 
                    className="back-button"
                    onClick={() => setSelectedCategory(null)}
                  >
                    ← Retour
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      </Reveal>
    </section>
  )
}
