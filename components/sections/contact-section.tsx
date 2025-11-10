"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Reveal } from "@/components/reveal"
import { Linkedin, Instagram, Mail, Phone } from "lucide-react"
import { toast } from "sonner"

export function ContactSection() {
  const { t } = useLanguage()

  const LINKEDIN_URL = "https://www.linkedin.com/in/alejandro-heras-espinosa/";
  const INSTAGRAM_URL = "https://www.instagram.com/alexandreheras/";
  const EMAIL = "heras27@live.fr";
  const PHONE = "+33 7 81 68 29 72";

  return (
    <section id="contact" style={{ overflow: "hidden" }}>
      <Reveal>
      <main style={{ 
        padding: "3% 5% 5%",
        width: "90%",
        margin: "0 auto"
      }}>
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "2vh",
          maxWidth: "100%"
        }}>
          {/* Section Title */}
          <div className="flex items-center" style={{ gap: "2%" }}>
            <h2 className="font-bold" style={{ 
              color: "#ccd6f6",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)"
            }}>
              <span style={{ color: "#64ffda" }}>05.</span> {t.contact.title}
            </h2>
            <div className="flex-grow" style={{ 
              backgroundColor: "rgba(100, 255, 218, 0.2)",
              height: "1px"
            }} />
          </div>

          {/* Contact Section */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <p style={{ 
              color: "#a8b2d1",
              fontSize: "clamp(0.875rem, 1vw, 1.1rem)",
              lineHeight: "1.6"
            }}>
              {t.contact.message}
            </p>


            {/* Social / Contact Icons */}
            <div style={{ marginTop: "3%" }}>
              <div className="flex" style={{ gap: "clamp(0.5rem, 1.2%, 1.2rem)", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                {/* LinkedIn */}
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "clamp(2.5rem, 3vw, 3.5rem)",
                    height: "clamp(2.5rem, 3vw, 3.5rem)",
                    border: "1px solid rgba(100,255,218,0.3)",
                    borderRadius: "0.6vw",
                    color: "#64ffda"
                  }}
                  className="hover:opacity-80 transition-opacity"
                >
                  <Linkedin size={"clamp(1rem, 1.4vw, 1.5rem)"} />
                </a>
                {/* Instagram */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "clamp(2.5rem, 3vw, 3.5rem)",
                    height: "clamp(2.5rem, 3vw, 3.5rem)",
                    border: "1px solid rgba(100,255,218,0.3)",
                    borderRadius: "0.6vw",
                    color: "#64ffda"
                  }}
                  className="hover:opacity-80 transition-opacity"
                >
                  <Instagram size={"clamp(1rem, 1.4vw, 1.5rem)"} />
                </a>
                {/* Email (copy) */}
                <button
                  type="button"
                  aria-label="Copy email"
                  onClick={() => {
                    navigator.clipboard.writeText(EMAIL)
                      .then(() => toast.success(t.contact.emailCopied))
                      .catch(() => toast.error(t.contact.emailFailed))
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "clamp(2.5rem, 3vw, 3.5rem)",
                    height: "clamp(2.5rem, 3vw, 3.5rem)",
                    border: "1px solid rgba(100,255,218,0.3)",
                    borderRadius: "0.6vw",
                    color: "#64ffda",
                    background: "transparent",
                    cursor: "pointer"
                  }}
                  className="hover:opacity-80 transition-opacity font-mono"
                >
                  <Mail size={"clamp(1rem, 1.4vw, 1.5rem)"} />
                </button>
                {/* Phone (copy) */}
                <button
                  type="button"
                  aria-label="Copy phone number"
                  onClick={() => {
                    navigator.clipboard.writeText(PHONE)
                      .then(() => toast.success(t.contact.phoneCopied))
                      .catch(() => toast.error(t.contact.phoneFailed))
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "clamp(2.5rem, 3vw, 3.5rem)",
                    height: "clamp(2.5rem, 3vw, 3.5rem)",
                    border: "1px solid rgba(100,255,218,0.3)",
                    borderRadius: "0.6vw",
                    color: "#64ffda",
                    background: "transparent",
                    cursor: "pointer"
                  }}
                  className="hover:opacity-80 transition-opacity font-mono"
                >
                  <Phone size={"clamp(1rem, 1.4vw, 1.5rem)"} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      </Reveal>
    </section>
  )
}
