export type Language = "en" | "fr"

export const translations = {
  en: {
    header: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    mobileNotice: {
      title: "Best Viewed on Desktop",
      message: "For an optimal experience and to see all features, I recommend viewing this portfolio on a desktop computer.",
      button: "Got it",
    },
    hero: {
      greeting: "Hi, my name is",
      tagline: "Driven by curiosity, powered by data.",
      description: "Passionate about data and AI, I'm looking for opportunities as a",
      role: "Data Analyst, Data Scientist or AI Engineer",
      experience: "I bring one year of hands-on experience in Data engineering and AI analysis.",
      languages: "I am trilingual, speaking Spanish, French, and English.",
      cta: "Learn more about my journey!",
      scroll: "Scroll to explore",
    },
    about: {
      title: "About",
      intro: "Hello! I'm Alejandro, a data and AI enthusiast based in Pau, France. I'm passionate about unlocking the power of information and transforming data into meaningful insights. I'm fascinated by how information shapes our world and that's exactly why I love working in this field.",
      languages: "I am a native speaker of Spanish and French and hold a C1 level in English, allowing me to communicate and work fluently in English-speaking environments.",
      motivated: "I'm highly motivated by innovation, continuous learning and I am also empathetic and deeply curious.",
      degree: "Graduated from CY Tech, I hold a Master's in Mathematics and Computer Science Engineering, specializing in Artificial Intelligence.",
      exchange: "I also completed a 6-month exchange semester in India, where I contributed to an AI research project and further expanded my expertise by taking specialized courses in data science.",
      experience: "I have gained over a year of professional experience, including my role as a Data Engineer Intern at Groupe Coopératif Vivadour and as an AI Analyst Intern at Airbus.",
      technologies: "Here are a few technologies I've been working with recently:",
      hobbies: "Outside of work, I was a semi-professional handball player for 4 years, enjoy playing in a chess club, and am an avid reader of sociology and psychology books.",
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          role: "AI Analyst trainee",
          company: "Airbus",
          period: "March 2025 — September 2025",
          tech: ["AGILE method", "AWS", "RAG", "Stakeholder needs analysis", "GCP", "Dashboards", "Products pricing", "AI product analysis", "Document redaction"],
          points: [
            "Conducted strategic analyses of AI solutions to identify high-impact opportunities aligned with business objectives and operational constraints.",
            "Improved operational support for 1,000+ employees by leading comprehensive AI technology assessments in collaboration with Google and ServiceNow professionals. These assessments involved studying the architecture of different solutions, analyzing their recurring and non-recurring costs, time requirements, and evaluating the value they could bring to the enterprise. Beyond assessment, I deepened my knowledge by researching how AI solutions are valued across industries and reviewing state-of-the-art research papers.",
            "Influenced a €100k+ investment decision by providing actionable insights on AI solution feasibility, cost, and business value.",
            "Bridged business and technical needs by delivering scalable, value-driven AI features tailored to enterprise use cases, directly impacting an ongoing €4M+ digital transformation initiative.",
            "Contributed to the development of an internal AI assistant (chatbot) based on Retrieval-Augmented Generation (RAG), leveraging proprietary Airbus documentation with AWS S3, Lambda, Unstructured.io, and OpenSearch."
          ]
        },
        {
          role: "Data Engineer Intern",
          company: "Groupe Coopératif Vivadour",
          period: "March 2023 — September 2023",
          tech: ["SQL Server", "ETL", "T-SQL", "Data Pipeline", "Database Optimization", "Power BI", "Data Cleaning", "Excel"],
          points: [
            "Architected and developed a robust SQL Server database to facilitate the migration to a new ERP system, ensuring data integrity, scalability, and optimal performance.",
            "Engineered a comprehensive ETL pipeline to efficiently collect, process, and transform raw data from the legacy system, enabling seamless ERP integration.",
            "Reduced worst-case query execution times from 48 hours to 30 seconds, significantly enhancing system efficiency and supporting business continuity.",
            "Optimized database query performance across multiple workflows, reducing execution times from several hours to just a few seconds.",
            "Created Power BI visualizations and dashboards to provide actionable insights to stakeholders, enhancing data-driven decision-making."
          ]
        },
        {
          role: "Computer Sciences Temporary worker",
          company: "Téréga",
          period: "June 2022 — July 2022",
          tech: ["Excel", "SAP", "Data Management"],
          points: [
            "Managed and maintained Excel files and SAP software to monitor and track the progress of gas pipeline operations."
          ]
        }
      ]
    },
    projects: {
      title: "Projects",
      viewProject: "View Project",
      list: [
        {
          title: "Rugby Data Exploration & Visualization Project",
          description: "Developed a data exploration project using a dataset provided by Section Paloise.",
          tech: ["Python", "Data Analysis", "Data Visualization", "Matplotlib", "Seaborn", "Pandas", "NumPy"],
          slug: "section-paloise",
        },
        {
          title: "Football Data Analysis Personal Project",
          description: "Collected and cleaned publicly available data from the 2024/2025 season to analyze Clermont Foot 63's team performance trends.",
          tech: ["Python", "Data Cleaning", "Data Visualization", "Matplotlib", "Pandas", "NumPy"],
          slug: "clermont-foot-63",
        },
        {
          title: "Web application for football coaching staff to analyze data",
          description: "Built a website during my personal time for Manchester City coaching staff to analyze data collected.",
          tech: ["Data Analysis", "Needs assessment", "Dashboards", "Data Visualization"],
          slug: "hays-manchester-city",
        },
        {
          title: "AI-Powered Web Accessibility Analysis Tool for RGAA Compliance",
          description: "Automate the testing of RGAA criteria to improve web accessibility for users, including those with disabilities, while saving time for development teams during my personal time.",
          tech: ["Python", "Multimodal LLMs", "Azure OpenAI", "BLIP-2", "APIs"],
          slug: "bpce-solutions-informatiques",
        },
        {
          title: "AI Chatbot & Search Feature",
          description: "Developed an intelligent RAG-powered chatbot and search feature with semantic search capabilities to enhance user engagement with sustainable energy solutions.",
          tech: ["Python", "Hugging Face", "APIs", "Weaviate", "Docker", "Docling"],
          slug: "kerdos-energy-chatbot",
        },
        {
          title: "Simulating Passenger Flow Data Challenge",
          description: "Designed a simulation using Dijkstra's algorithm and Graph Neural Networks (GNNs) to model passenger flow in disrupted metro networks while maintaining environmental sustainability standards during my personal time.",
          tech: ["Python", "Dijkstra's Algorithm", "Graph Neural Networks", "Simulation", "Data Visualization", "Company needs understanding"],
          slug: "alstom-metro-operations",
        },
        {
          title: "Brain tumor detection using CNN",
          description: "Independently developed a CNN model for medical imaging for brain tumor detection.",
          tech: ["Python", "TensorFlow", "Keras", "Medical Imaging", "CNNs", "PyTorch", "NumPy", "Pandas", "Scikit-learn"],
          slug: "bk-biet-project",
        },
      ]
    },
    skills: {
      title: "Skills",
      categories: [
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
      ]
    },
    contact: {
      title: "Contact",
      message: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
      emailCopied: "Email copied to clipboard",
      emailFailed: "Failed to copy email",
      phoneCopied: "Phone number copied",
      phoneFailed: "Failed to copy phone number",
    },
    projectPage: {
      backToProjects: "Back to Projects",
      overview: "Overview",
      year: "Year",
      role: "Role",
      viewDemo: "View Demo",
      viewOnGithub: "View on GitHub",
    }
  },
  fr: {
    header: {
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
    },
    mobileNotice: {
      title: "Meilleure Expérience sur Ordinateur",
      message: "Pour une expérience optimale et profiter de toutes les fonctionnalités, je vous recommande de consulter ce portfolio sur un ordinateur.",
      button: "J'ai compris",
    },
    hero: {
      greeting: "Bonjour, je m'appelle",
      tagline: "Guidé par la curiosité, alimenté par la data.",
      description: "Passionné par la data et l'IA, je recherche des opportunités en tant que",
      role: "Data Analyst, Data Scientist ou Ingénieur IA",
      experience: "J'ai plus d'un an d'expérience entre Data et Intelligence Artificielle.",
      languages: "Je suis trilingue espagnol, français et anglais.",
      cta: "En savoir plus sur moi !",
      scroll: "Faites défiler pour explorer",
    },
    about: {
      title: "À propos",
      intro: "Bonjour ! Je suis Alejandro, un passionné de data et d'IA basé à Pau, en France. Je suis motivé par l'exploitation de la puissance de l'information et la transformation de la data en connaissances significatives. Je suis fasciné par la façon dont l'information peut façonner la prise de décision de différentes manières, et c'est exactement pourquoi j'adore ce domaine.",
      languages: "Je parle couramment l'espagnol et le français et j'ai un niveau C1 en anglais, ce qui me permet de communiquer et de travailler couramment dans des environnements anglophones.",
      motivated: "Je suis fortement motivé par l'innovation, l'apprentissage continu et je suis aussi empathique et profondément curieux.",
      degree: "Diplômé de CY Tech, je suis titulaire d'un diplôme d'ingénieur en Mathématiques et Informatique, spécialisé en Intelligence Artificielle.",
      exchange: "J'ai également effectué un semestre d'échange de 6 mois en Inde, où j'ai contribué à un projet de recherche en IA et approfondi mes connaissances en data science.",
      experience: "J'ai accumulé plus d'un an d'expérience professionnelle, notamment en tant que stagiaire Data Engineer chez Groupe Coopératif Vivadour et stagiaire IA Analyst chez Airbus.",
      technologies: "Voici quelques technologies avec lesquelles j'ai récemment travaillé :",
      hobbies: "En dehors du travail, j'ai été joueur de handball semi-professionnel pendant 4 ans, je suis joueur d'échecs en club et je suis un lecteur passionné de livres en sociologie et psychologie.",
    },
    experience: {
      title: "Expérience",
      jobs: [
        {
          role: "Stagiaire IA Analyst",
          company: "Airbus",
          period: "Mars 2025 — Septembre 2025",
          tech: ["Méthode AGILE", "AWS", "RAG", "Analyse des besoins", "GCP", "Tableaux de bord", "Tarification des produits", "Analyse de produits IA", "Rédaction de documents"],
          points: [
            "Mené des analyses stratégiques de solutions d'IA pour identifier les opportunités à fort impact alignées aux objectifs commerciaux et aux contraintes opérationnelles.",
            "Amélioré le support opérationnel pour plus de 1 000 employés en menant des évaluations technologiques IA complètes en collaboration avec des professionnels Google et ServiceNow. Ces évaluations impliquaient l'étude de l'architecture de différentes solutions, l'analyse de leurs coûts récurrents, non récurrents, les délais requis, et l'évaluation de la valeur qu'elles pourraient apporter à l'entreprise. Au-delà de l'évaluation, j'ai approfondi mes connaissances en recherchant comment les solutions d'IA sont valorisées dans les industries et en examinant les articles de recherche de pointe.",
            "Influencé une décision d'investissement de 100k€+ en fournissant des analyses exploitables sur la faisabilité, le coût et la valeur commerciale des solutions d'IA.",
            "Comblé le fossé entre les besoins commerciaux et techniques en fournissant des fonctionnalités d'IA évolutives et axées sur la valeur adaptées aux cas d'usage d'entreprise, impactant directement une initiative de transformation numérique en cours de 4M€+.",
            "Contribué au développement d'un assistant IA interne (chatbot) basé sur le RAG, exploitant la documentation Airbus avec AWS S3, Lambda, Unstructured.io et OpenSearch."
          ]
        },
        {
          role: "Stagiaire Data Engineer",
          company: "Groupe Coopératif Vivadour",
          period: "Mars 2023 — Septembre 2023",
          tech: ["SQL Server", "ETL", "T-SQL", "Pipeline de données", "Optimisation de base de données", "Power BI", "Nettoyage de données", "Excel"],
          points: [
            "Développé une base de données SQL Server robuste pour faciliter la migration vers un nouveau système ERP, assurant l'intégrité, l'extensibilité et les performances optimales des données.",
            "Ingénierie d'un pipeline ETL complet pour collecter, traiter et transformer efficacement les données brutes du système hérité, permettant une intégration ERP transparente.",
            "Réduit les temps d'exécution des requêtes dans le pire des cas de 48 heures à 30 secondes, améliorant considérablement l'efficacité du système et soutenant la continuité d'activité.",
            "Optimisé les performances des requêtes de base de données sur plusieurs flux de travail, réduisant les temps d'exécution de 48 heures à seulement 30 secondes pour les meilleurs cas.",
            "Créé des visualisations et tableaux de bord Power BI pour fournir des informations exploitables aux parties prenantes, améliorant la prise de décision basée sur les données."
          ]
        },
        {
          role: "Travail intérimaire en Informatique",
          company: "Téréga",
          period: "Juin 2022 — Juillet 2022",
          tech: ["Excel", "SAP", "Gestion de données"],
          points: [
            "Géré et maintenu les fichiers Excel et le logiciel SAP pour surveiller et suivre la progression des opérations de gaz."
          ]
        }
      ]
    },
    projects: {
      title: "Projets",
      viewProject: "Voir le Projet",
      list: [
        {
          title: "Projet d'Exploration et de Visualisation de Données Rugby",
          description: "Développé un projet d'exploration de données à partir d'un ensemble de données fourni par la Section Paloise.",
          tech: ["Python", "Analyse de données", "Visualisation de données", "Matplotlib", "Seaborn", "Pandas", "NumPy"],
          slug: "section-paloise",
        },
        {
          title: "Projet Personnel d'Analyse de Données Football",
          description: "Développé un projet supplémentaire en Python pour soutenir un entretien d'embauche avec Clermont Foot 63.",
          tech: ["Python", "Nettoyage de données", "Visualisation de données", "Matplotlib", "Pandas", "NumPy"],
          slug: "clermont-foot-63",
        },
        {
          title: "Site web pour l'analyse de données pour un staff d'entraîneurs football",
          description: "Construit un site web pendant mon temps libre pour le staff d'entraînement de Manchester City pour analyser les données collectées.",
          tech: ["Analyse de données", "Évaluation des besoins", "Tableaux de bord", "Visualisation de données"],
          slug: "hays-manchester-city",
        },
        {
          title: "Outil d'Analyse d'Accessibilité Web Alimenté par l'IA pour la Conformité RGAA",
          description: "Automatiser le test des critères RGAA pour améliorer l'accessibilité web pour les utilisateurs, y compris ceux en situation de handicap, tout en économisant du temps pour les équipes de développement pendant mon temps libre.",
          tech: ["Python", "LLMs Multimodaux", "Azure OpenAI", "BLIP-2", "APIs"],
          slug: "bpce-solutions-informatiques",
        },
        {
          title: "Chatbot IA et Fonctionnalité de Recherche",
          description: "Développé un chatbot alimenté par RAG intelligent et une fonctionnalité de recherche avec capacités de recherche sémantique pour améliorer l'engagement des utilisateurs avec les solutions d'énergie durable.",
          tech: ["Python", "Hugging Face", "APIs", "Weaviate", "Docker", "Docling"],
          slug: "kerdos-energy-chatbot",
        },
        {
          title: "Défi de Simulation de Données de Flux de Passagers",
          description: "Conçu une simulation utilisant l'algorithme de Dijkstra et les réseaux de neurones graphiques (GNNs) pour modéliser le flux de passagers dans les réseaux de métro perturbés tout en maintenant les normes de durabilité environnementale pendant mon temps libre.",
          tech: ["Python", "Algorithme de Dijkstra", "Réseaux de neurones graphiques", "Simulation", "Visualisation de données", "Compréhension des besoins de l'entreprise"],
          slug: "alstom-metro-operations",
        },
        {
          title: "Détection de tumeur cérébrale à l'aide de CNN",
          description: "Développé indépendamment un modèle CNN pour l'imagerie médicale pour la détection de tumeur cérébrale.",
          tech: ["Python", "TensorFlow", "Keras", "Imagerie médicale", "CNNs", "PyTorch", "NumPy", "Pandas", "Scikit-learn"],
          slug: "bk-biet-project",
        },
      ]
    },
    skills: {
      title: "Compétences",
      categories: [
        {
          category: "Langages",
          skills: ["Python", "SQL", "C", "R", "T-SQL", "HTML", "CSS", "JavaScript", "Unix Shell", "Java"],
        },
        {
          category: "Bibliothèques & Frameworks",
          skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Transformers", "LangChain"],
        },
        {
          category: "Mathématiques",
          skills: ["Algèbre linéaire", "Algorithmes", "Statistiques", "Probabilités", "Optimisation"],
        },
        {
          category: "Données",
          skills: ["Data Cleaning", "Data Visualization", "Data Engineering", "Power BI", "ETL", "Data Pipelines", "Gestion de bases de données", "Clustering"],
        },
        {
          category: "Intelligence Artificielle",
          skills: ["Vision par ordinateur", "Natural Language Processing", "Apprentissage par renforcement", "Large Language Models", "IA générative", "Feature engineering", "Hyperparameter Tuning"],
        },
        {
          category: "Outils & Plateformes",
          skills: ["Hugging Face", "GitHub", "Docker", "AWS", "Jira", "SQL Server", "MongoDB", "PostgreSQL"],
        },
      ]
    },
    contact: {
      title: "Contact",
      message: "Je suis toujours intéressé pour parler de nouveaux projets et opportunités. Que vous ayez une question ou que vous vouliez juste dire bonjour, n'hésitez pas à me contacter !",
      emailCopied: "Email copié dans le presse-papiers",
      emailFailed: "Échec de la copie de l'email",
      phoneCopied: "Numéro de téléphone copié",
      phoneFailed: "Échec de la copie du numéro de téléphone",
    },
    projectPage: {
      backToProjects: "Retour aux Projets",
      overview: "Aperçu",
      year: "Année",
      role: "Rôle",
      viewDemo: "Voir la Démo",
      viewOnGithub: "Voir sur GitHub",
    }
  },
}
