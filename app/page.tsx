"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Reveal } from "@/components/reveal"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Instagram, Mail, Phone } from "lucide-react"
import { Toaster, toast } from "sonner"

export default function Home() {
  // TODO: Replace these placeholders with your real details
  const LINKEDIN_URL = "https://www.linkedin.com/in/alejandro-heras-espinosa/";
  const INSTAGRAM_URL = "https://www.instagram.com/alexandreheras/";
  const EMAIL = "heras27@live.fr";
  const PHONE = "+33 7 81 68 29 72";
  // Profile image used in About section (place an image under /public and update this path)
  const PROFILE_IMAGE = "/IMG_2889.jpg";
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f1419" }}>
      <Header />
      <Toaster position="bottom-center" richColors />
      <Hero />
      {/* About Section */}
      <section id="about">
        <Reveal>
        <main style={{ 
          padding: "6% 5% 3%",
          width: "90%",
          margin: "0 auto"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            {/* Section Title */}
            <div className="flex items-center" style={{ gap: "2%" }}>
              <h2 className="font-bold" style={{ 
                color: "#ccd6f6",
                fontSize: "3vw"
              }}>
                <span style={{ color: "#64ffda" }}>01.</span> About
              </h2>
              <div className="flex-grow" style={{ 
                backgroundColor: "rgba(100, 255, 218, 0.2)",
                height: "1px"
              }} />
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-3" style={{ gap: "5%" }}>
              <div className="md:col-span-2" style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
                <p style={{ 
                  color: "#a8b2d1",
                  fontSize: "1vw",
                  lineHeight: "1.6",
                  textAlign: "justify"
                }}>
                  Hello! I'm Alejandro, a data and AI enthusiast based in Pau, France. 
                  I’m passionate about unlocking the power of information and transforming data into meaningful insights. 
                  I’m fascinated by how information shapes our world and that’s exactly why I love working in this field.
                </p>

                <p style={{ 
                  color: "#a8b2d1",
                  fontSize: "1vw",
                  lineHeight: "1.6",
                  textAlign: "justify"
                }}>
                  I am a native speaker of Spanish and French and hold a C1 level in English, allowing me to communicate and work fluently in English-speaking environments.
                  <br /> I’m highly motivated by innovation, continuous learning and I am also empathetic and deeply curious.
                </p>

                <p style={{ 
                  color: "#a8b2d1",
                  fontSize: "1vw",
                  lineHeight: "1.6",
                  textAlign: "justify"
                }}>
                  Graduated from CY Tech, I hold a <span style={{ color: "#64ffda" }}>Master’s in Mathematics and 
                  Computer Science Engineering</span>, specializing in Artificial Intelligence.  
                </p>

                <p style={{ 
                  color: "#a8b2d1",
                  fontSize: "1vw",
                  lineHeight: "1.6",
                  textAlign: "justify"
                }}>
                  I also completed a 6-month <span style={{ color: "#64ffda" }}>semester exchange in India</span>, where I contributed to an AI research project and 
                  further expanded my expertise by taking specialized courses in data science.  
                </p>

                 <p style={{ 
                  color: "#a8b2d1",
                  fontSize: "1vw",
                  lineHeight: "1.6",
                  textAlign: "justify"
                }}>
                  I have gained over <span style={{ color: "#64ffda" }}>a year of professional experience</span>, including my role as a <span style={{ color: "#64ffda" }}>Data Engineer Intern 
                  at Groupe Coopératif Vivadour</span> and as an <span style={{ color: "#64ffda" }}>AI Analyst Intern at Airbus</span>.  
                </p>

                <p style={{ 
                  color: "#a8b2d1",
                  fontSize: "1vw",
                  lineHeight: "1.6",
                  textAlign: "justify"
                }}>
                  Here are a few technologies I've been working with recently:
                </p>

                <div className="grid grid-cols-2" style={{ gap: "2%", paddingTop: "2%" }}>
                  {['Python','SQL','C', 'Jira', 'AWS', 'GitHub'].map((tech) => (
                    <div key={tech} className="flex items-center" style={{ gap: "1%" }}>
                      <span style={{ color: "#64ffda", fontSize: "1vw" }}>▸</span>
                      <span style={{ color: "#ccd6f6", fontSize: "1vw" }}>{tech}</span>
                    </div>
                  ))}
                </div>

                <p style={{ 
                    color: "#a8b2d1",
                    paddingTop: "2%",
                    fontSize: "1vw",
                    lineHeight: "1.6",
                    textAlign: "justify"
                  }}>
                    Outside of work, I was a semi-professional handball player for 4 years, enjoy playing in a chess club, and am an avid reader of sociology and psychology books.  
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="hidden md:flex items-center justify-center" style={{ height: "100%" }}>
                <div
                  className="rounded border-2 overflow-hidden"
                  style={{
                    borderColor: "rgba(100, 255, 218, 0.2)",
                    width: "12vw",
                    height: "12vw",
                    position: "relative"
                  }}
                >
                  <Image
                    src={PROFILE_IMAGE}
                    alt="Profile photo"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        </Reveal>
      </section>
      {/* Experience Section */}
      <section id="experience">
        <Reveal translateY="2vh">
        <main style={{ 
          padding: "10% 5% 3%",
          width: "90%",
          margin: "0 auto"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            {/* Section Title */}
            <div className="flex items-center" style={{ gap: "2%" }}>
              <h2 className="font-bold" style={{ 
                color: "#ccd6f6",
                fontSize: "3vw"
              }}>
                <span style={{ color: "#64ffda" }}>02.</span> Experience
              </h2>
              <div className="flex-grow" style={{ 
                backgroundColor: "rgba(100, 255, 218, 0.2)",
                height: "1px"
              }} />
            </div>

            {/* Experience Timeline */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5vh", textAlign: "justify" }}>
              {[
                {
                  company: "Airbus",
                  url: "https://www.airbus.com/",
                  role: "AI Analyst trainee",
                  period: "March 2025 — September 2025",
                  tech: ["AGILE method", "AWS", "RAG", "Stakeholder needs analysis", "GCP", "Dashboards", "Products pricing", "AI product analysis", "Document redaction"],
                  points: [
                    "Conducted strategic analyses of AI solutions to identify high-impact opportunities aligned with business objectives and operational constraints.",
                    "Improved operational support for 1,000+ employees by leading comprehensive AI technology assessments in collaboration with Google and ServiceNow professionals. These assessments involved studying the architecture of different solutions, analyzing their recurring costs, non-recurring costs, time requirements, and evaluating the value they could bring to the enterprise. Beyond assessment, I deepened my knowledge by researching how AI solutions are valued across industries and reviewing state-of-the-art research papers.",
                    "Influenced a €100k+ investment decision by providing actionable insights on AI solution feasibility, cost, and business value.",
                    "Bridged business and technical needs by delivering scalable, value-driven AI features tailored to enterprise use cases, directly impacting an ongoing €4M+ digital transformation initiative.",
                    "Contributed to the development of an internal AI assistant (chatbot) based on Retrieval-Augmented Generation (RAG), leveraging proprietary Airbus documentation with AWS S3, Lambda, Unstructured.io, and OpenSearch."
                  ]
                },
                {
                  company: "Groupe Coopératif Vivadour",
                  url: "https://www.vivadour.coop/accueil",
                  role: "Data Engineer Intern",
                  period: "March 2023 — September 2023",
                  tech: ["SQL Server", "ETL", "T-SQL", "Data Pipeline", "Database Optimization", "Power BI", "Data Cleaning", "Excel"],
                  points: [
                    "Architected and developed a robust SQL Server database to facilitate the migration to a new ERP system, ensuring data integrity, scalability, and optimal performance.",
                    "Engineered a comprehensive ETL pipeline to efficiently collect, process, and transform raw data from the legacy system, enabling seamless ERP integration.",
                    "Reduced worst-case query execution times from 48 hours to 30 seconds, significantly enhancing system efficiency and supporting business continuity.",
                    "Optimized database query performance across multiple workflows, reducing execution times from several hours to just a few seconds.",
                    "Power BI visualizations and dashboards to provide actionable insights to stakeholders, enhancing data-driven decision-making."
                  ]
                },
                {
                  company: "Téréga",
                  url: "https://www.terega.fr/",
                  role: "Computer Sciences Temporary worker",
                  period: "June 2022 — July 2022",
                  tech: ["Excel", "SAP", "Data Management"],
                  points: [
                    "Managed and maintained Excel files and SAP software to monitor and track the progress of gas pipeline operations."
                  ]
                }
              ].map((job, idx) => (
                <a
                  key={idx}
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-l-2 transition-all duration-700 ease-out hover:border-l-4 cursor-pointer group hover:shadow-[0_0_40px_rgba(100,255,218,0.2)] rounded-r hover:bg-[rgba(100,255,218,0.03)]"
                  style={{ 
                    borderColor: "rgba(100, 255, 218, 0.2)",
                    paddingLeft: "3%",
                    display: "block",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    paddingTop: "2%",
                    paddingBottom: "2%",
                    paddingRight: "2%"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: "2%", marginBottom: "1%" }}>
                    <h3 className="font-bold group-hover:text-[#64ffda] transition-colors duration-700 ease-out" style={{ color: "#ccd6f6", fontSize: "1.6vw" }}>
                      {job.role}
                    </h3>
                    <span className="font-mono group-hover:opacity-100 transition-all duration-700 ease-out group-hover:translate-x-[0.3vw]" style={{ color: "#64ffda", fontSize: "0.9vw", opacity: 0.8 }}>@ {job.company}</span>
                  </div>
                  <p className="font-mono" style={{ color: "#8892b0", fontSize: "0.9vw", marginBottom: "1.5%" }}>
                    {job.period}
                  </p>

                  <ul style={{ display: "flex", flexDirection: "column", gap: "1vh", marginBottom: "2%" }}>
                    {job.points.map((pt) => (
                      <li key={pt} className="flex" style={{ gap: "1%", color: "#a8b2d1", fontSize: "1vw", lineHeight: 1.6 }}>
                        <span style={{ color: "#64ffda" }}>▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap" style={{ gap: "1%", marginTop: "2%" }}>
                    {job.tech.map((t) => (
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
                </a>
              ))}
            </div>
          </div>
        </main>
        </Reveal>
      </section>
  {/* Projects Section */}
      <section id="projects">
        {/* Lower threshold so the section reveals immediately when navigated via anchor (#projects) even if partially covered by the fixed header */}
        <Reveal translateY="1vh" threshold={0.1}>
        <main style={{ 
          padding: "6% 5% 3%",
          width: "90%",
          margin: "0 auto"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh"}}>
            {/* Section Title */}
            <div className="flex items-center" style={{ gap: "2%" }}>
              <h2 className="font-bold" style={{ 
                color: "#ccd6f6",
                fontSize: "3vw"
              }}>
                <span style={{ color: "#64ffda" }}>03.</span> Projets
              </h2>
              <div className="flex-grow" style={{ 
                backgroundColor: "rgba(100, 255, 218, 0.2)",
                height: "1px"
              }} />
            </div>

            {/* Projects Grid */}
            <div style={{ display: "flex", flexDirection: "column", gap: "3vh"}}>
              {[
                {
                  title: "Rugby Data Exploration & Visualization Project",
                  description:
                    "Developed a data exploration project using a dataset provided by Section Paloise.",
                  tech: ["Python", "Data Analysis", "Data Visualization", "Matplotlib", "Seaborn", "Pandas", "NumPy"],
                  slug: "section-paloise",
                },
                {
                  title: "Football Data Analysis Personal Project",
                  description:
                    "Developed a supplementary project in Python to support a job interview with Clermont Foot 63.",
                  tech: ["Python", "Data Cleaning", "Data Visualization", "Matplotlib", "Pandas", "NumPy"],
                  slug: "clermont-foot-63",
                },
                {
                  title: "Web application for football coaching staff to analyze data",
                  description:
                    "Built a website during my personal time for Manchester City coaching staff to analyze data collected.",
                  tech: ["Data Analysis", "Needs assessment", "Dashboards", "Data Visualization"],
                  slug: "hays-manchester-city",
                },
                {
                  title: "AI-Powered Web Accessibility Analysis Tool for RGAA Compliance",
                  description:
                    "Automate the testing of RGAA criteria to improve web accessibility for users, including those with disabilities, while saving time for development teams during my personal time.",
                  tech: [ "Python", "Multimodal LLMs", "Azure OpenAI", "BLIP-2", "APIs"],
                  slug: "bpce-solutions-informatiques",
                },
                {
                  title: "AI Chatbot & Search Feature",
                  description:
                    "Developed an intelligent RAG-powered chatbot and search feature with semantic search capabilities to enhance user engagement with sustainable energy solutions.",
                  tech: ["Python", "Hugging Face", "APIs", "Weaviate", "Docker", "Docling"],
                  slug: "kerdos-energy-chatbot",
                },
                {
                  title: "Simulating Passenger Flow Data Challenge",
                  description:
                    "Designed a simulation using Dijkstra’s algorithm and Graph Neural Networks (GNNs) to model passenger flow in disrupted metro networks while maintaining environmental sustainability standards during my personal time.",
                  tech: ["Python", "Dijkstra’s Algorithm", "Graph Neural Networks", "Simulation", "Data Visualization", "Company needs understanding"],
                  slug: "alstom-metro-operations",
                },
                {
                  title: "Brain tumor detection using CNN",
                  description:
                    "Independently developed a CNN model for medical imaging for brain tumor detection.",
                  tech: ["Python", "TensorFlow", "Keras", "Medical Imaging", "CNNs", "PyTorch", "NumPy", "Pandas", "Scikit-learn"],
                  slug: "bk-biet-project",
                },
              ].map((project, index) => (
                <div key={index} className="border-l-2 transition-all duration-700 ease-out hover:bg-[rgba(100,255,218,0.05)] hover:border-[rgba(100,255,218,0.4)] rounded-r" style={{ 
                  borderColor: "rgba(100, 255, 218, 0.2)",
                  paddingLeft: "3%",
                  paddingTop: "1.5%",
                  paddingBottom: "1.5%",
                  paddingRight: "1.5%"
                }}>
                  <h3 className="font-bold" style={{ 
                    color: "#ccd6f6",
                    fontSize: "2vw",
                    marginBottom: "1%"
                  }}>
                    {project.title}
                  </h3>

                  <p style={{ 
                    color: "#a8b2d1",
                    fontSize: "1vw",
                    lineHeight: "1.6",
                    marginBottom: "2%"
                  }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap" style={{ gap: "1%", marginBottom: "2%" }}>
                    {project.tech.map((t) => (
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

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center font-mono transition-all hover:gap-3"
                    style={{ 
                      color: "#64ffda",
                      fontSize: "0.9vw",
                      gap: "1%",
                      whiteSpace: "nowrap"
                    }}
                  >
                    View Project
                    <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </main>
        </Reveal>
      </section>
  {/* Skills Section */}
      <section id="skills">
        <Reveal>
        <main style={{ 
          padding: "6% 5% 3%",
          width: "90%",
          margin: "0 auto"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            {/* Section Title */}
            <div className="flex items-center" style={{ gap: "2%" }}>
              <h2 className="font-bold" style={{ 
                color: "#ccd6f6",
                fontSize: "3vw"
              }}>
                <span style={{ color: "#64ffda" }}>04.</span> Skills
              </h2>
              <div className="flex-grow" style={{ 
                backgroundColor: "rgba(100, 255, 218, 0.2)",
                height: "1px"
              }} />
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2" style={{ gap: "5%" }}>
              {[
                {
                  category: "Languages",
                  skills: ["Python", "SQL", "C", "R", "T-SQL", "HTML", "CSS", "JavaScript", "Unix Shell", "Java"],
                },
                {
                  category: "Libraries & Frameworks",
                  skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Transformers", "LangChain"],
                },
                {
                  category: "Mathematics",
                  skills: ["Linear Algebra", "Algorithms", "Statistics", "Probability", "Optimization"],
                },
                {
                  category: "Data",
                  skills: ["Data Cleaning", "Data Visualization", "Data Engineering", "Power BI", "ETL", "Data Pipelines", "Database Management", "Clustering"],
                },
                {
                  category: "Artificial Intelligence",
                  skills: ["Computer Vision", "Natural Language Processing", "Reinforcement Learning", "Large Language Models", "Generative AI", "Feature Engineering", "Hyperparameter Tuning"],
                },
                {
                  category: "Tools & Platforms",
                  skills: ["Hugging Face", "GitHub", "Docker", "AWS", "Jira", "SQL Server", "MongoDB", "PostgreSQL"],
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="rounded border"
                  style={{ 
                    borderColor: "rgba(100, 255, 218, 0.2)", 
                    backgroundColor: "rgba(100, 255, 218, 0.02)",
                    padding: "3%"
                  }}
                >
                  <h3 className="font-bold" style={{ 
                    color: "#64ffda",
                    fontSize: "1.2vw",
                    marginBottom: "2%"
                  }}>
                    {category.category}
                  </h3>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center" style={{ 
                        color: "#a8b2d1",
                        fontSize: "1vw",
                        gap: "1%"
                      }}>
                        <span style={{ color: "#64ffda" }}>✓</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </main>
        </Reveal>
      </section>
  {/* Contact Section */}
      <section id="contact">
        <Reveal>
        <main style={{ 
          padding: "6% 5% 3%",
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
                fontSize: "3vw"
              }}>
                <span style={{ color: "#64ffda" }}>05.</span> Contact
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
                fontSize: "1vw",
                lineHeight: "1.6"
              }}>
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
                want to say hi, feel free to reach out!
              </p>


              {/* Social / Contact Icons */}
              <div style={{ marginTop: "3%" }}>
                <div className="flex" style={{ gap: "1.2%", justifyContent: "center", alignItems: "center" }}>
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
                      width: "3vw",
                      height: "3vw",
                      border: "1px solid rgba(100,255,218,0.3)",
                      borderRadius: "0.6vw",
                      color: "#64ffda"
                    }}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Linkedin size={"1.4vw"} />
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
                      width: "3vw",
                      height: "3vw",
                      border: "1px solid rgba(100,255,218,0.3)",
                      borderRadius: "0.6vw",
                      color: "#64ffda"
                    }}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Instagram size={"1.4vw"} />
                  </a>
                  {/* Email (copy) */}
                  <button
                    type="button"
                    aria-label="Copy email"
                    onClick={() => {
                      navigator.clipboard.writeText(EMAIL)
                        .then(() => toast.success("Email copied to clipboard"))
                        .catch(() => toast.error("Failed to copy email"))
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "3vw",
                      height: "3vw",
                      border: "1px solid rgba(100,255,218,0.3)",
                      borderRadius: "0.6vw",
                      color: "#64ffda",
                      background: "transparent",
                      cursor: "pointer"
                    }}
                    className="hover:opacity-80 transition-opacity font-mono"
                  >
                    <Mail size={"1.4vw"} />
                  </button>
                  {/* Phone (copy) */}
                  <button
                    type="button"
                    aria-label="Copy phone number"
                    onClick={() => {
                      navigator.clipboard.writeText(PHONE)
                        .then(() => toast.success("Phone number copied"))
                        .catch(() => toast.error("Failed to copy phone number"))
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "3vw",
                      height: "3vw",
                      border: "1px solid rgba(100,255,218,0.3)",
                      borderRadius: "0.6vw",
                      color: "#64ffda",
                      background: "transparent",
                      cursor: "pointer"
                    }}
                    className="hover:opacity-80 transition-opacity font-mono"
                  >
                    <Phone size={"1.4vw"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        </Reveal>
      </section>
    </div>
  )
}
