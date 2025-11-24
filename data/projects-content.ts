export const projectsData = {
  en: {
    "bpce-solutions-informatiques": {
      title: "AI-Powered Web Accessibility Analysis Tool for RGAA Compliance",
      description:
        "Automate the testing of RGAA criteria to improve web accessibility for users, including those with disabilities, while saving time for development teams during my personal time.",
      longDescription: `La Mêlée's Hackathon - BPCE Solutions Informatiques Project - 1st Place (done in my personal time)

    <span style="color:var(--text-accent)">Objective:</span> Automate the testing of RGAA criteria to improve web accessibility for users, including those with disabilities, while saving time for development teams.

    <span style="color:var(--text-accent)">Challenge:</span> Only ~30% of RGAA criteria can be automatically tested with current tools. Manual reviews are time-consuming, and AI could help expand coverage while using resources responsibly.

    <span style="color:var(--text-accent)">Approach:</span>

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

    💡 <span style="color:var(--text-accent)">Skills Gained:</span>

    • Deep understanding of digital accessibility and the challenges faced by people with disabilities

    • Knowledge of RGAA coding standards and compliance requirements

    • Ability to analyze which problems require AI, prioritize criteria, and select technical approaches

    • Hands-on experience with Azure OpenAI and generative AI for practical applications

    • Enhanced data analysis, problem-solving, and solution design skills in a real-world, responsible AI context`,
    },
    "kerdos-energy-chatbot": {
      title: "AI Chatbot & Search Feature",
      description:
        "Developed an intelligent RAG-powered chatbot and search feature with semantic search capabilities to enhance user engagement with sustainable energy solutions.",
      longDescription: `<span style="color:var(--text-accent)"> AI Chatbot & Search Feature Final Studies Project for Kerdos Energy:</span>

            • Developed an intelligent RAG-powered chatbot with semantic search capabilities to enhance user engagement with sustainable energy solutions.

            • Implemented in Python using Hugging Face models, leveraging retrieval-based search for the search bar and RAG architecture for chatbot responses.

            • Managed the project with limited resources, selecting free solutions and optimizing performance.

            • Tested OpenSearch before choosing Weaviate as the primary database for storing document embeddings.

            • Processed provided PDFs, converting them to Markdown with Docling to preserve text structure, then chunked the content for efficient retrieval.

            • Explored hybrid search techniques using clustering methods for retrieval, implemented reranking strategies, and experimented with chain-of-thought reasoning for improved responses.

            • Containerized the application using Docker and integrated Mistral LLM for French comprehension and context-specific solutions.

            💡 <span style="color:var(--text-accent)">Skills Gained:</span>

            • In-depth RAG comprehension and end-to-end development capabilities

            • Advanced understanding of chunking and reranking strategies

            • Experience with chain-of-thought reasoning for LLMs

            • Hands-on knowledge of Weaviate, OpenSearch, Docling

            • Practical expertise in resource-efficient AI development, Dockerization, and semantic search implementation

            • Improved ability to deliver AI products to a company, addressing real-world needs and aligning solutions with stakeholder requirements`,
    },
    "alstom-metro-operations": {
      title: "Simulating Passenger Flow Data Challenge",
      description:
        "Designed a simulation using Dijkstra's algorithm and Graph Neural Networks (GNNs) to model passenger flow in disrupted metro networks while maintaining environmental sustainability standards during my personal time.",
      longDescription: `<span style="color:var(--text-accent)">Data Challenge on Simulating Passenger Flow - Alstom Project - 1st Place (done in my personal time): </span>

    • Designed a simulation using Dijkstra's algorithm and Graph Neural Networks (GNNs) to model passenger flow in disrupted metro networks while maintaining environmental sustainability standards.

    • Focused on metro resilience, anticipating passenger flows to better adjust train frequencies and identifying critical inter-stations requiring special monitoring.

    • Developed a virtual metro simulation to:
      <span style="padding-left: 2em; display: block;">- Visualize the impact of service disruptions on passenger flows</span>
      <span style="padding-left: 2em; display: block;">- Propose alternative routes to redirect passengers efficiently</span>

    • Analyze network vulnerabilities and improve long-term resilience

    • Created a dataset for AI training, identifying bypassable inter-stations and quantifying the impact of their removal on passenger traffic.

    • Optimized code and simulation performance to minimize environmental impact while ensuring solution effectiveness.

    • Presented the solution in a competitive context, showcasing practical applicability and business relevance.

    💡 <span style="color:var(--text-accent)">Skills Gained:</span>

    • Data Visualization & Analysis: Interpreting complex metro network data for decision-making

    • Data Science, AI & ML/DL: Building and training models to simulate real-world scenarios

    • Graph Algorithms & GNNs: Applying Dijkstra and GNNs to model passenger flow and network disruptions

    • Problem-Solving: Designing realistic alternatives for disrupted networks

    • Responsible Development: Estimating solution consumption and integrating environmental considerations

    • Business & Communication: Understanding company needs and presenting solutions effectively in a competitive setting`,
    },
    "section-paloise": {
      title: "Rugby Data Exploration & Visualization Project",
      description:
        "Developed a data exploration project using a dataset provided by Section Paloise.",
      longDescription: `

        <span style="color:var(--text-accent)">Data Exploration & Visualization Project :</span>

        • Developed a data exploration project using a dataset provided by Section Paloise.

        • Analyzed the dataset and created interactive visualizations to provide actionable insights for the team.

        • Produced heatmaps to:

         <span style="padding-left: 2em; display: block;">- Identify areas where penalties were scored or missed</span>

         <span style="padding-left: 2em; display: block;">- Highlight zones where the team achieved the best 50-22 plays</span>

         <span style="padding-left: 2em; display: block;">- Track player actions by zone and game time to understand performance trends</span>

        • Focused on clear and concise visualizations to make the analysis accessible and interpretable for non-technical stakeholders.

        💡 <span style="color:var(--text-accent)">Skills Gained:</span>

        • Python programming for data analysis and visualization

        • Data analysis & exploratory data visualization

        • Strong communication and vulgarization skills, presenting technical insights in an understandable way

        • Ability to extract actionable insights from raw sports performance data`,
    },
    "clermont-foot-63": {
      title: "Football Data Analysis Personal Project",
      description:
        "Developed a supplementary project in Python to support a job interview with Clermont Foot 63.",
      longDescription: `<span style="color:var(--text-accent)">Clermont Foot 63 Data Analysis Project :</span>
    • Developed a supplementary project in Python to support a job interview with Clermont Foot 63.

    • Collected and cleaned publicly available data from the 2024/2025 season to analyze team performance trends.

    • Explored key metrics including goals, decisive passers, xGoals, player minutes, positions, injuries, and staff changes.

    • Proposed visualizations such as goal locations, key passes, and other performance indicators, and compared them with the previous 2023/2024 season.

    • Derived insights: The 2023/2024 season was strong but a few decisive players contributed disproportionately; some were transferred while others had less playing time despite no injuries. Suggested hypotheses included increasing playing time for key players and identifying similar profiles to fill gaps.

    • Emphasized that this was a personal project for learning and exploration, with no commercial value.

    💡 <span style="color:var(--text-accent)">Skills Gained:</span>
    • Python programming & Matplotlib for data analysis and visualization

    • Advanced data cleaning, processing, and exploratory analysis

    • Strong logical reasoning and ability to draw actionable insights from complex datasets

    • Experience in finding reliable datasets online and structuring them for analysis

    • Enhanced analytical thinking in a sports performance context`,
    },
    "hays-manchester-city": {
      title: "Web application for football coaching staff to analyze data",
      description:
        "Built a website during my personal time for Manchester City coaching staff to analyze data collected.",
      longDescription: `<span style="color:var(--text-accent)">Manchester City x Hays Website Project:</span>

    • Built a web application for coaching staff to analyze data collected.

    • Enabled data-driven decision making through performance analytics and interactive dashboards.

    • Visualized key metrics using heatmaps, pass diagrams, and other plots with Matplotlib.

    • Developed with Flask to run Python scripts in real time, providing instant tactical insights.

    💡 <span style="color:var(--text-accent)">Skills Gained:</span>

    • Data Analysis: Extracted actionable insights from raw performance data

    • Team Understanding: Learned to deeply comprehend the needs of a sports team

    • Web Development: Built interactive, user-friendly dashboards

    • Data Visualization: Created intuitive visual representations for decision-making

    • Collaboration & Problem-Solving: Worked in a fast-paced, hackathon environment`,
    },
    "bk-biet-project": {
      title: "Brain Tumor Detection using CNN",
      description:
        "Independently developed a CNN model for medical imaging for brain tumor detection.",
      longDescription: `<span style="color:var(--text-accent)">Deep Learning Research Project – Semester Exchange in BK BIET in India - Brain Tumor Detection:</span>

    • Conducted an independent research mission on deep learning applications in medical imaging.

    • Architected a CNN-based brain tumor detection model using ResNet50, achieving 92% accuracy through advanced data preprocessing and statistical analysis.

    • Developed the model in Python with PyTorch, NumPy, Pandas, and Scikit-learn; implemented image classification pipelines in Jupyter Notebook/Anaconda and maintained code via GitHub.

    • Explored and compared multiple machine learning techniques to enhance performance and robustness.

    <span style="color:var(--text-accent)">Key Outcomes & Skills Gained:</span>

    • Acquired strong Computer Vision and Deep Learning expertise, with in-depth comprehension of CNN architectures.

    • Learned how to work in a research environment following proper research methodology.

    • Strengthened statistical analysis, data preprocessing, visualization, and data structures expertise.

    • Gained a deep understanding of model evaluation metrics (accuracy, precision, recall, F1, etc.) and how to apply them effectively and wisely to assess and improve models.

    • Enhanced ability to communicate fluently in English while gaining international experience and extending open-mindedness in a new cultural environment.

    • Built additional knowledge in cryptography and ethical hacking fundamentals.`,
    },
  },
  fr: {
    "bpce-solutions-informatiques": {
      title: "Outil d'Analyse d'Accessibilité Web Alimenté par l'IA pour la Conformité RGAA",
      description:
        "Automatiser le test des critères RGAA pour améliorer l'accessibilité Web pour les utilisateurs, y compris ceux en situation de handicap, tout en économisant du temps pour les équipes de développement pendant mon temps libre.",
      longDescription: `Hackathon La Mêlée - Projet BPCE Solutions Informatiques - 1ère Place (réalisé pendant mon temps libre)

    <span style="color:var(--text-accent)">Objectif :</span> Automatiser le test des critères RGAA pour améliorer l'accessibilité Web pour les utilisateurs, y compris ceux en situation de handicap, tout en économisant du temps pour les équipes de développement.

    <span style="color:var(--text-accent)">Défi :</span> Seulement ~30% des critères RGAA peuvent être testés automatiquement avec les outils actuels. Les révisions manuelles sont chronophages, et l'IA pourrait aider à élargir la couverture tout en utilisant les ressources de manière responsable.

    <span style="color:var(--text-accent)">Approche :</span>

    • Analysé les critères RGAA pour déterminer quelles règles nécessitaient une intervention IA.

    • Sélectionné trois thématiques techniques pour l'automatisation : images, liens et structure du site Web.

    • Développé deux prototypes frontend avec des visuels identiques mais l'un respectant les critères et l'autre non, pour illustrer les différences.

    • Construit une application Web où les utilisateurs peuvent saisir n'importe quel lien de site Web et obtenir une analyse automatisée pour les trois critères sélectionnés :

    • Images : l'IA génère des descriptions, puis un LLM évalue la conformité aux règles RGAA.

    • Liens : le contexte et le texte du lien sont analysés par un LLM pour déterminer la conformité.

    •  Structure du site Web : le LLM multimodal évalue à la fois la disposition visuelle et la structure du code.

    •  Ajouté une page d'estimation des coûts pour chaque demande (impact financier et environnemental).

    •  Affiché les résultats détaillés au niveau des éléments, mettant en évidence la non-conformité et fournissant des explications.

    •  Implémenté la solution à l'aide d'Azure OpenAI pour l'exécution du modèle.

    💡 <span style="color:var(--text-accent)">Compétences acquises :</span>

    • Compréhension approfondie de l'accessibilité numérique et des défis auxquels font face les personnes en situation de handicap

    • Connaissance des normes de codage RGAA et des exigences de conformité

    • Capacité à analyser quels problèmes nécessitent l'IA, à prioriser les critères et à sélectionner les approches techniques

    • Expérience pratique avec Azure OpenAI et l'IA générative pour des applications pratiques

    • Compétences améliorées en analyse de données, résolution de problèmes et conception de solutions dans un contexte d'IA responsable et réel`,
    },
    "kerdos-energy-chatbot": {
      title: "Chatbot IA et Fonctionnalité de Recherche",
      description:
        "Développé un chatbot alimenté par RAG intelligent et une fonctionnalité de recherche avec capacités de recherche sémantique pour améliorer l'engagement des utilisateurs avec les solutions d'énergie durable.",
      longDescription: `<span style="color:var(--text-accent)"> Projet Final d'Études - Chatbot IA et Fonctionnalité de Recherche pour Kerdos Energy :</span>

            • Développé un chatbot alimenté par RAG intelligent avec des capacités de recherche sémantique pour améliorer l'engagement des utilisateurs avec les solutions d'énergie durable.

            • Implémenté en Python en utilisant les modèles Hugging Face, exploitant la recherche basée sur la récupération pour la barre de recherche et l'architecture RAG pour les réponses du chatbot.

            • Géré le projet avec des ressources limitées, en sélectionnant des solutions gratuites et en optimisant les performances.

            • Testé OpenSearch avant de choisir Weaviate comme base de données principale pour stocker les plongements de documents.

            • Traité les PDF fournis, les convertissant en Markdown avec Docling pour préserver la structure du texte, puis fragmenté le contenu pour une récupération efficace.

            • Exploré les techniques de recherche hybride en utilisant des méthodes de clustering pour la récupération, implémenté des stratégies de reranking et expérimenté le raisonnement en chaîne de pensée pour améliorer les réponses.

            • Conteneurisé l'application en utilisant Docker et intégré le LLM Mistral pour la compréhension du français et les solutions spécifiques au contexte.

            💡 <span style="color:var(--text-accent)">Compétences acquises :</span>

            • Compréhension approfondie de RAG et capacités de développement de bout en bout

            • Compréhension avancée des stratégies de fragmentation et de reranking

            • Expérience avec le raisonnement en chaîne de pensée pour les LLM

            • Connaissances pratiques de Weaviate, OpenSearch, Docling

            • Expertise pratique en développement d'IA économe en ressources, conteneurisation et implémentation de recherche sémantique

            • Capacité améliorée à livrer des produits d'IA à une entreprise, répondant aux besoins du monde réel et alignant les solutions avec les exigences des parties prenantes`,
    },
    "alstom-metro-operations": {
      title: "Défi de Simulation de Données de Flux de Passagers",
      description:
        "Conçu une simulation utilisant l'algorithme de Dijkstra et les réseaux de neurones graphiques (GNNs) pour modéliser le flux de passagers dans les réseaux de métro perturbés tout en maintenant les normes de durabilité environnementale pendant mon temps libre.",
      longDescription: `<span style="color:var(--text-accent)">Défi de Données sur la Simulation du Flux de Passagers - Projet Alstom - 1ère Place (réalisé pendant mon temps libre) : </span>

    • Conçu une simulation utilisant l'algorithme de Dijkstra et les réseaux de neurones graphiques (GNNs) pour modéliser le flux de passagers dans les réseaux de métro perturbés tout en maintenant les normes de durabilité environnementale.

    • Concentré sur la résilience du métro, anticipant les flux de passagers pour mieux ajuster les fréquences des trains et identifier les inter-stations critiques nécessitant une surveillance spéciale.

    • Développé une simulation virtuelle du métro pour :
      <span style="padding-left: 2em; display: block;">- Visualiser l'impact des perturbations de service sur les flux de passagers</span>
      <span style="padding-left: 2em; display: block;">- Proposer des itinéraires alternatifs pour rediriger efficacement les passagers</span>

    • Analyser les vulnérabilités du réseau et améliorer la résilience à long terme

    • Créé un ensemble de données pour la formation à l'IA, en identifiant les inter-stations contournables et en quantifiant l'impact de leur suppression sur le trafic des passagers.

    • Optimisé le code et les performances de la simulation pour minimiser l'impact environnemental tout en assurant l'efficacité de la solution.

    • Présenté la solution dans un contexte compétitif, mettant en évidence l'applicabilité pratique et la pertinence commerciale.

    💡 <span style="color:var(--text-accent)">Compétences acquises :</span>

    • Visualisation et Analyse de Données : Interprétation des données complexes du réseau de métro pour la prise de décision

    • Science des Données, IA et ML/DL : Construction et entraînement de modèles pour simuler des scénarios réels

    • Algorithmes Graphiques et GNNs : Application de Dijkstra et GNNs pour modéliser le flux de passagers et les perturbations du réseau

    • Résolution de Problèmes : Concevoir des alternatives réalistes pour les réseaux perturbés

    • Développement Responsable : Estimer la consommation de la solution et intégrer les considérations environnementales

    • Affaires et Communication : Comprendre les besoins de l'entreprise et présenter les solutions efficacement dans un contexte compétitif`,
    },
    "section-paloise": {
      title: "Projet d'Exploration et de Visualisation de Données Rugby",
      description:
        "Développé un projet d'exploration de données à partir d'un ensemble de données fourni par la Section Paloise.",
      longDescription: `

        <span style="color:var(--text-accent)">Projet d'Exploration et de Visualisation de Données :</span>

        • Développé un projet d'exploration de données à partir d'un ensemble de données fourni par la Section Paloise.

        • Analysé l'ensemble de données et créé des visualisations interactives pour fournir des informations exploitables à l'équipe.

        • Produit des cartes thermiques pour :

         <span style="padding-left: 2em; display: block;">- Identifier les zones où les pénalités ont été marquées ou ratées</span>

         <span style="padding-left: 2em; display: block;">- Mettre en évidence les zones où l'équipe a réussi les meilleurs jeux 50-22</span>

         <span style="padding-left: 2em; display: block;">- Suivre les actions des joueurs par zone et au moment du match pour comprendre les tendances de performance</span>

        • Concentré sur des visualisations claires et concises pour rendre l'analyse accessible et interprétable pour les parties prenantes non techniques.

        💡 <span style="color:var(--text-accent)">Compétences acquises :</span>

        • Programmation Python pour l'analyse et la visualisation de données

        • Analyse de données et visualisation de données exploratoires

        • Compétences fortes en communication et vulgarisation, présentant les informations techniques de manière compréhensible

        • Capacité à extraire des informations exploitables à partir des données brutes de performance sportive`,
    },
    "clermont-foot-63": {
      title: "Projet Personnel d'Analyse de Données Football",
      description:
        "Développé un projet supplémentaire en Python pour soutenir un entretien d'embauche avec Clermont Foot 63.",
      longDescription: `<span style="color:var(--text-accent)">Projet d'Analyse de Données Clermont Foot 63 :</span>
    • Développé un projet supplémentaire en Python pour soutenir un entretien d'embauche avec Clermont Foot 63.

    • Collecté et nettoyé les données disponibles au public de la saison 2024/2025 pour analyser les tendances de performance de l'équipe.

    • Exploré les métriques clés incluant les buts, les passeurs décisifs, xGoals, les minutes jouées des joueurs, les positions, les blessures et les changements du personnel.

    • Proposé des visualisations telles que les emplacements des buts, les passes clés et d'autres indicateurs de performance, et les comparé avec la saison précédente 2023/2024.

    • Dérivé les informations : la saison 2023/2024 était forte mais quelques joueurs décisifs ont contribué de manière disproportionnée ; certains ont été transférés tandis que d'autres avaient moins de temps de jeu malgré aucune blessure. Les hypothèses suggérées incluaient l'augmentation du temps de jeu pour les joueurs clés et l'identification de profils similaires pour combler les lacunes.

    • Souligné que c'était un projet personnel d'apprentissage et d'exploration, sans valeur commerciale.

    💡 <span style="color:var(--text-accent)">Compétences acquises :</span>
    • Programmation Python et Matplotlib pour l'analyse et la visualisation de données

    • Nettoyage, traitement et analyse exploratoire avancés des données

    • Raisonnement logique fort et capacité à tirer des informations exploitables à partir d'ensembles de données complexes

    • Expérience dans la recherche d'ensembles de données fiables en ligne et leur structuration pour l'analyse

    • Pensée analytique améliorée dans un contexte de performance sportive`,
    },
    "hays-manchester-city": {
      title: "Application Web pour l'analyse de données pour le staff d'entraîneurs football",
      description:
        "Construit un site Web pendant mon temps libre pour le staff d'entraînement de Manchester City pour analyser les données collectées.",
      longDescription: `<span style="color:var(--text-accent)">Projet de Site Web Manchester City x Hays :</span>

    • Construit une application Web pour que le personnel d'entraînement analyse les données collectées.

    • Activé la prise de décision basée sur les données grâce aux analyses de performance et aux tableaux de bord interactifs.

    • Visualisé les métriques clés en utilisant des cartes thermiques, des diagrammes de passe et d'autres tracés avec Matplotlib.

    • Développé avec Flask pour exécuter les scripts Python en temps réel, fournissant des informations tactiques instantanées.

    💡 <span style="color:var(--text-accent)">Compétences acquises :</span>

    • Analyse de Données : Extraction d'informations exploitables à partir des données brutes de performance

    • Compréhension de l'Équipe : Appris à comprendre profondément les besoins d'une équipe sportive

    • Développement Web : Création de tableaux de bord interactifs et conviviaux

    • Visualisation de Données : Création de représentations visuelles intuitives pour la prise de décision

    • Collaboration et Résolution de Problèmes : Travail dans un environnement rapide et hackatonien`,
    },
    "bk-biet-project": {
      title: "Détection de tumeur cérébrale à l'aide de CNN",
      description:
        "Développé indépendamment un modèle CNN pour l'imagerie médicale pour la détection de tumeur cérébrale.",
      longDescription: `<span style="color:var(--text-accent)">Projet de Recherche en Apprentissage Profond – Semestre d'Échange à BK BIET en Inde - Détection de Tumeur Cérébrale :</span>

    • Menée une mission de recherche indépendante sur les applications de l'apprentissage profond en imagerie médicale.

    • Architecturé un modèle de détection de tumeur cérébrale basé sur CNN utilisant ResNet50, atteignant une précision de 92% grâce à un prétraitement avancé des données et une analyse statistique.

    • Développé le modèle en Python avec PyTorch, NumPy, Pandas et Scikit-learn ; implémenté les pipelines de classification d'images dans Jupyter Notebook/Anaconda et maintenu le code via GitHub.

    • Exploré et comparé plusieurs techniques d'apprentissage automatique pour améliorer les performances et la robustesse.

    <span style="color:var(--text-accent)">Résultats Clés et Compétences Acquises :</span>

    • Acquis une expertise forte en Vision par Ordinateur et Apprentissage Profond, avec une compréhension approfondie des architectures CNN.

    • Appris à travailler dans un environnement de recherche en suivant une méthodologie de recherche appropriée.

    • Renforcé les compétences en analyse statistique, prétraitement des données, visualisation et structures de données.

    • Acquis une compréhension approfondie des métriques d'évaluation de modèle (précision, précision, rappel, F1, etc.) et comment les appliquer efficacement et judicieusement pour évaluer et améliorer les modèles.

    • Amélioration de la capacité à communiquer couramment en anglais tout en acquérant une expérience internationale et en élargissant l'ouverture d'esprit dans un nouvel environnement culturel.

    • Construit des connaissances supplémentaires en cryptographie et en bases du hacking éthique.`,
    },
  }
}
