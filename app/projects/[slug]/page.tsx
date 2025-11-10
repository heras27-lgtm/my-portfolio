"use client"

import { use } from "react"
import { Header } from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const projects = {
  "bpce-solutions-informatiques": {
    title: "AI-Powered Web Accessibility Analysis Tool for RGAA Compliance",
    description:
      "Automate the testing of RGAA criteria to improve web accessibility for users, including those with disabilities, while saving time for development teams during my personal time.",
    longDescription: `La Mêlée's Hackathon - BPCE Solutions Informatiques Project - 1st Place (done in my personal time)

    <span style="color:#64ffda">Objective:</span> Automate the testing of RGAA criteria to improve web accessibility for users, including those with disabilities, while saving time for development teams.

    <span style="color:#64ffda">Challenge:</span> Only ~30% of RGAA criteria can be automatically tested with current tools. Manual reviews are time-consuming, and AI could help expand coverage while using resources responsibly.

    <span style="color:#64ffda">Approach:</span>

    • Analyzed RGAA criteria to determine which rules required AI intervention.

    • Selected three technical thematics for automation: images, links, and website structure.

    • Developed two frontend prototypes with identical visuals but with one respecting the criteria and one not, to illustrate differences.

    • Built a web application where users can input any website link and get an automated analysis for the three selected criteria:

    • Images: AI generates descriptions, then an LLM evaluates compliance with RGAA rules.

    • Links: Context and link text are analyzed by an LLM to determine conformity.

    •  Website Structure: Multimodal LLM assesses both visual layout and code structure.

    •  Added a cost estimation page for each request (financial and environmental impact).

    •  Displayed detailed element-level results, highlighting non-compliance and providing explanations.

    •  Implemented the solution using Azure OpenAI for model execution.

    💡 <span style="color:#64ffda">Skills Gained:</span>

    • Deep understanding of digital accessibility and the challenges faced by people with disabilities

    • Knowledge of RGAA coding standards and compliance requirements

    • Ability to analyze which problems require AI, prioritize criteria, and select technical approaches

    • Hands-on experience with Azure OpenAI and generative AI for practical applications

    • Enhanced data analysis, problem-solving, and solution design skills in a real-world, responsible AI context`,
    tech: [ "Python", "Multimodal LLMs", "Azure OpenAI", "BLIP-2", "APIs", "LLM" ],
    link: "#",
    github: "https://github.com/eleejahroudier/BPCEproject",
    image: "/BPCESI.jpeg",
    year: "2025",
    role: "AI Engineer",
  },
  "kerdos-energy-chatbot": {
    title: "AI Chatbot & Search Feature",
    description:
      "Developed an intelligent RAG-powered chatbot and search feature with semantic search capabilities to enhance user engagement with sustainable energy solutions.",
    longDescription: `<span style="color:#64ffda"> AI Chatbot & Search Feature Final Studies Project for Kerdos Energy:</span>

            • Developed an intelligent RAG-powered chatbot with semantic search capabilities to enhance user engagement with sustainable energy solutions.

            • Implemented in Python using Hugging Face models, leveraging retrieval-based search for the search bar and RAG architecture for chatbot responses.

            • Managed the project with limited resources, selecting free solutions and optimizing performance.

            • Tested OpenSearch before choosing Weaviate as the primary database for storing document embeddings.

            • Processed provided PDFs, converting them to Markdown with Docling to preserve text structure, then chunked the content for efficient retrieval.

            • Explored hybrid search techniques using clustering methods for retrieval, implemented reranking strategies, and experimented with chain-of-thought reasoning for improved responses.

            • Containerized the application using Docker and integrated Mistral LLM for French comprehension and context-specific solutions.

            💡 <span style="color:#64ffda">Skills Gained:</span>

            • In-depth RAG comprehension and end-to-end development capabilities

            • Advanced understanding of chunking and reranking strategies

            • Experience with chain-of-thought reasoning for LLMs

            • Hands-on knowledge of Weaviate, OpenSearch, Docling

            • Practical expertise in resource-efficient AI development, Dockerization, and semantic search implementation

            • Improved ability to deliver AI products to a company, addressing real-world needs and aligning solutions with stakeholder requirements`,
    tech: ["Python", "Hugging Face", "APIs", "Weaviate", "Docker", "Docling"],
    link: "#",
    github: "#",
    image: "/kerdos.png",
    year: "2025",
    role: "AI Engineer",
  },
  "alstom-metro-operations": {
    title: "Simulating Passenger Flow Data Challenge",
    description:
      "Designed a simulation using Dijkstra’s algorithm and Graph Neural Networks (GNNs) to model passenger flow in disrupted metro networks while maintaining environmental sustainability standards during my personal time.",
    longDescription: `<span style="color:#64ffda">Data Challenge on Simulating Passenger Flow - Alstom Project - 1st Place (done in my personal time): </span>

    • Designed a simulation using Dijkstra’s algorithm and Graph Neural Networks (GNNs) to model passenger flow in disrupted metro networks while maintaining environmental sustainability standards.

    • Focused on metro resilience, anticipating passenger flows to better adjust train frequencies and identifying critical inter-stations requiring special monitoring.

    • Developed a virtual metro simulation to:
      <span style="padding-left: 2em; display: block;">- Visualize the impact of service disruptions on passenger flows</span>
      <span style="padding-left: 2em; display: block;">- Propose alternative routes to redirect passengers efficiently</span>

    • Analyze network vulnerabilities and improve long-term resilience

    • Created a dataset for AI training, identifying bypassable inter-stations and quantifying the impact of their removal on passenger traffic.

    • Optimized code and simulation performance to minimize environmental impact while ensuring solution effectiveness.

    • Presented the solution in a competitive context, showcasing practical applicability and business relevance.

    💡 <span style="color:#64ffda">Skills Gained:</span>

    • Data Visualization & Analysis: Interpreting complex metro network data for decision-making

    • Data Science, AI & ML/DL: Building and training models to simulate real-world scenarios

    • Graph Algorithms & GNNs: Applying Dijkstra and GNNs to model passenger flow and network disruptions

    • Problem-Solving: Designing realistic alternatives for disrupted networks

    • Responsible Development: Estimating solution consumption and integrating environmental considerations

    • Business & Communication: Understanding company needs and presenting solutions effectively in a competitive setting`,
    tech: ["Python", "Dijkstra’s Algorithm", "Graph Neural Networks", "Simulation", "Data Visualization", "Company needs understanding"],
    link: "#",
    github: "#",
    image: "/Alstom.png",
    year: "2024",
    role: "AI Engineer",
  },
  "section-paloise": {
    title: "Rugby Data Exploration & Visualization Project",
    description:
      "Developed a data exploration project using a dataset provided by Section Paloise.",
    longDescription: `

        <span style="color:#64ffda">Data Exploration & Visualization Project :</span>

        • Developed a data exploration project using a dataset provided by Section Paloise.

        • Analyzed the dataset and created interactive visualizations to provide actionable insights for the team.

        • Produced heatmaps to:

         <span style="padding-left: 2em; display: block;">- Identify areas where penalties were scored or missed</span>

         <span style="padding-left: 2em; display: block;">- Highlight zones where the team achieved the best 50-22 plays</span>

         <span style="padding-left: 2em; display: block;">- Track player actions by zone and game time to understand performance trends</span>

        • Focused on clear and concise visualizations to make the analysis accessible and interpretable for non-technical stakeholders.

        💡 <span style="color:#64ffda">Skills Gained:</span>

        • Python programming for data analysis and visualization

        • Data analysis & exploratory data visualization

        • Strong communication and vulgarization skills, presenting technical insights in an understandable way

        • Ability to extract actionable insights from raw sports performance data`,
    tech: ["Python", "Data Analysis", "Data Visualization", "Matplotlib", "Seaborn", "Pandas", "NumPy"],
    link: "#",
    github: "#",
    image: "/section.png",
    year: "2024",
    role: "Data Analyst",
  },
  "clermont-foot-63": {
    title: "Football Data Analysis Personal Project",
    description:
      "Developed a supplementary project in Python to support a job interview with Clermont Foot 63.",
    longDescription: `<span style="color:#64ffda">Clermont Foot 63 Data Analysis Project :</span>
    • Developed a supplementary project in Python to support a job interview with Clermont Foot 63.

    • Collected and cleaned publicly available data from the 2024/2025 season to analyze team performance trends.

    • Explored key metrics including goals, decisive passers, xGoals, player minutes, positions, injuries, and staff changes.

    • Proposed visualizations such as goal locations, key passes, and other performance indicators, and compared them with the previous 2023/2024 season.

    • Derived insights: The 2023/2024 season was strong but a few decisive players contributed disproportionately; some were transferred while others had less playing time despite no injuries. Suggested hypotheses included increasing playing time for key players and identifying similar profiles to fill gaps.

    • Emphasized that this was a personal project for learning and exploration, with no commercial value.

    💡 <span style="color:#64ffda">Skills Gained:</span>
    • Python programming & Matplotlib for data analysis and visualization

    • Advanced data cleaning, processing, and exploratory analysis

    • Strong logical reasoning and ability to draw actionable insights from complex datasets

    • Experience in finding reliable datasets online and structuring them for analysis

    • Enhanced analytical thinking in a sports performance context`,
    tech: ["Python", "Data Cleaning", "Data Visualization", "Matplotlib", "Pandas", "NumPy"],
    link: "#",
    github: "#",
    image: "/clermontfoot.png",
    year: "2024",
    role: "Data Analyst",
  },
  "hays-manchester-city": {
    title: "Web application for football coaching staff to analyze data",
    description:
      "Built a website during my personal time for Manchester City coaching staff to analyze data collected.",
    longDescription: `<span style="color:#64ffda">Manchester City x Hays Website Project:</span>

    • Built a web application for coaching staff to analyze data collected.

    • Enabled data-driven decision making through performance analytics and interactive dashboards.

    • Visualized key metrics using heatmaps, pass diagrams, and other plots with Matplotlib.

    • Developed with Flask to run Python scripts in real time, providing instant tactical insights.

    💡 <span style="color:#64ffda">Skills Gained:</span>

    • Data Analysis: Extracted actionable insights from raw performance data

    • Team Understanding: Learned to deeply comprehend the needs of a sports team

    • Web Development: Built interactive, user-friendly dashboards

    • Data Visualization: Created intuitive visual representations for decision-making

    • Collaboration & Problem-Solving: Worked in a fast-paced, hackathon environment`,
    tech: ["Data Analysis", "Needs understanding", "Dashboards", "Data Visualization"],
    link: "https://www.youtube.com/watch?v=xkA2I64WxG0",
    github: "#",
    image: "/hays.jpeg",
    year: "2023",
    role: "Data Analyst",
  },
  "bk-biet-project": {
    title: "Brain Tumor Detection using CNN",
    description:
      "Independently developed a CNN model for medical imaging for brain tumor detection.",
    longDescription: `<span style="color:#64ffda">Deep Learning Research Project – Semester Exchange in BK BIET in India - Brain Tumor Detection:</span>

    • Conducted an independent research mission on deep learning applications in medical imaging.

    • Architected a CNN-based brain tumor detection model using ResNet50, achieving 92% accuracy through advanced data preprocessing and statistical analysis.

    • Developed the model in Python with PyTorch, NumPy, Pandas, and Scikit-learn; implemented image classification pipelines in Jupyter Notebook/Anaconda and maintained code via GitHub.

    • Explored and compared multiple machine learning techniques to enhance performance and robustness.

    <span style="color:#64ffda">Key Outcomes & Skills Gained:</span>

    • Acquired strong Computer Vision and Deep Learning expertise, with in-depth comprehension of CNN architectures.

    • Learned how to work in a research environment following proper research methodology.

    • Strengthened statistical analysis, data preprocessing, visualization, and data structures expertise.

    • Gained a deep understanding of model evaluation metrics (accuracy, precision, recall, F1, etc.) and how to apply them effectively and wisely to assess and improve models.

    • Enhanced ability to communicate fluently in English while gaining international experience and extending open-mindedness in a new cultural environment.

    • Built additional knowledge in cryptography and ethical hacking fundamentals.`,
    tech: ["Python", "TensorFlow", "Keras", "Medical Imaging", "CNNs", "PyTorch", "NumPy", "Pandas", "Scikit-learn"],
    link: "#",
    github: "#",
    image: "/BKbiet.jpeg",
    year: "2024",
    role: "Research AI Engineer",
  },
}

type ProjectSlug = keyof typeof projects

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const project = projects[slug as ProjectSlug]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f1419" }}>
      <Header />
      
      {/* Project Hero */}
      <section style={{ 
        padding: "7% 5% 6%",
        width: "90%",
        margin: "0 auto"
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          {/* Back Link */}
          <Link
            href="/#projects"
            className="inline-flex items-center font-mono transition-all hover:gap-3"
            style={{ 
              color: "#64ffda",
              fontSize: "0.9vw",
              gap: "1%",
              marginBottom: "2%"
            }}
          >
            <span>←</span>
            Back to Projects
          </Link>

          {/* Title */}
          <h1 className="font-bold" style={{ 
            color: "#ccd6f6",
            fontSize: "4vw",
            marginBottom: "1%"
          }}>
            {project.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap" style={{ gap: "3%", marginBottom: "2%" }}>
            <div>
              <span className="font-mono" style={{ color: "#8892b0", fontSize: "0.9vw" }}>
                Year: <span style={{ color: "#64ffda" }}>{project.year}</span>
              </span>
            </div>
            <div>
              <span className="font-mono" style={{ color: "#8892b0", fontSize: "0.9vw" }}>
                Role: <span style={{ color: "#64ffda" }}>{project.role}</span>
              </span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap" style={{ gap: "1%", rowGap: "1vh", marginBottom: "3%" }}>
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

          {/* Project Image */}
          <div
            className="rounded border overflow-hidden"
            style={{
              borderColor: "rgba(100, 255, 218, 0.2)",
              width: "100%",
              height: "40vh",
              position: "relative",
              marginBottom: "4%",
              backgroundColor: "white",
              padding: "3% 20%"
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: "contain", padding: "inherit" }}
            />
          </div>

          {/* Description */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            <h2 className="font-bold" style={{ 
              color: "#ccd6f6",
              fontSize: "2vw"
            }}>
              Overview
            </h2>
            <div
              style={{ 
                color: "#a8b2d1",
                fontSize: "1vw",
                lineHeight: "1.8",
                whiteSpace: "pre-line"
              }}
              // We intentionally render trusted static HTML with inline spans for accent color.
              dangerouslySetInnerHTML={{ __html: project.longDescription }}
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap" style={{ gap: "2%", marginTop: "4%" }}>
            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-mono transition-all hover:gap-3 rounded border hover:shadow-[0_0_20px_rgba(100,255,218,0.4)]"
                style={{ 
                  color: "#64ffda",
                  fontSize: "0.9vw",
                  gap: "1%",
                  padding: "1% 3%",
                  borderColor: "#64ffda",
                  whiteSpace: "nowrap"
                }}
              >
                View Demo
                <span>→</span>
              </a>
            )}
            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-mono transition-all hover:gap-3 rounded border hover:shadow-[0_0_20px_rgba(100,255,218,0.4)]"
                style={{ 
                  color: "#64ffda",
                  fontSize: "0.9vw",
                  gap: "1%",
                  padding: "1% 3%",
                  borderColor: "rgba(100, 255, 218, 0.3)",
                  backgroundColor: "rgba(100, 255, 218, 0.05)",
                  whiteSpace: "nowrap"
                }}
              >
                View on GitHub
                <span>→</span>
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
