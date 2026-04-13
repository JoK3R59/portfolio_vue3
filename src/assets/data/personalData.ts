import type { PersonalData } from "@/utils/types";

export const personalData: PersonalData = {
  profil : {
    name: "Guillaume Ersent",
    yearOfBirth: 1990,
    sexe: "Homme",
    jobTitle: "Développeur",
    subTitle: "Web & Mobile",
    address: "Lille et ses alentours – FRANCE",
    phone: "",
    langage: "Français, Anglais",
    job: "",
    email: "guillaume@example.com",
  },
  sectionTitles: [
    {
      text : "Qui suis-je ?",
      text_mobile : "Accueil",
      icon : "home"
    },
    {
      text  :"Compétences techniques",
      text_mobile : "Technos",
      icon : "src_code"
    },
    { 
      text : "Portfolio",
      text_mobile : "Projets",
      icon : "star"
    },
    { 
      text : "Expériences Professionnelles",
      text_mobile : "Jobs",
      icon : "luggage"
    },
    { 
      text : "Formations & certifications",
      text_mobile : "Diplômes",
      icon : "training"
    }
  ],
  scrollTitles: [
    "profil",
    "skills",
    "projects",
    "jobpro",
    "training"
  ],
  aboutMe: {
    p1: "Je suis un développeur web avec une passion pour la création de solutions innovantes. J'ai une expérience de plus de 5 ans dans le <span style='color: blue;'>développement web et mobile</span>. J'ai travaillé sur de nombreux projets, allant de petites applications web à des applications mobiles complexes.",
    p2: "Je suis passionné par les nouvelles technologies et j'aime apprendre de nouvelles choses. Je suis toujours à la recherche de nouveaux défis et de nouvelles opportunités pour améliorer mes compétences.",
    p3: "Je suis un développeur web avec une passion pour la création de solutions innovantes. J'ai une expérience de plus de 5 ans dans le développement web et mobile. J'ai travaillé sur de nombreux projets, allant de petites applications web à des applications mobiles complexes."
  },
  socialLinks: {
    linkedin: {
      link: "https://www.linkedin.com/in/guillaume-ersent",
      svg: "linkedin"
    },
    github: {
      link: "https://github.com/JoK3R59",
      svg: "github"
    }
  },
  sections: {
    profile: {
      title: "Qui suis-je ?",
      content: "Je suis un développeur web avec une passion pour la création de solutions innovantes..."
    },
    skills: {
      title: "Compétences techniques",
      content: "JavaScript, Vue.js, HTML, CSS, Node.js..."
    },
    projects: {
      title: "Portfolio",
      content: "Voici quelques-uns de mes projets récents..."
    },
    experience: {
      title: "Expériences Professionnelles",
      content: "Développeur Web chez XYZ, Stage en développement chez ABC..."
    },
    education: {
      title: "Formations & certifications",
      content: "Diplôme en Informatique de l'Université de Paris, Certification Vue.js..."
    }
  },
  skills:{
    html: {
      name: 'html',
      percentage: 90,
      link: 'https://developer.mozilla.org/fr/docs/Web/HTML',
      color: '#E44D27',
      svg: 'html'
    },
    css: {
      name: 'css',
      percentage: 85,
      link: 'https://developer.mozilla.org/fr/docs/Web/CSS',
      color: '#0162B0',
      svg: 'css'
    },
    typescript: {
      name: 'typescript',
      percentage: 80,
      link: 'https://www.typescriptlang.org/',
      color: '#3077C6',
      svg: 'typescript'
    },
    javascript: {
      name: 'javascript',
      percentage: 90,
      link: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
      color: '#EFC624',
      svg: 'js'
    },
    vue: {
      name: 'vue 3',
      percentage: 80,
      link: 'https://v3.vuejs.org/',
      color: '#38956A',
      svg: 'vue'
    },
    react: {
      name: 'react',
      percentage: 80,
      link: 'https://react.dev/',
      color: '#58C4DC',
      svg: 'reactjs'
    },
    flutter: {
      name: 'flutter',
      percentage: 80,
      link: 'https://flutter.dev/',
      color: '#64C4EE',
      svg: 'flutter'
    },
    kotlin: {
      name: 'kotlin',
      percentage: 70,
      link: 'https://kotlinlang.org/',
      color: '#D32DAF',
      svg: 'kotlin'
    },
    mysql: {
      name: 'mysql',
      percentage: 60,
      link: 'https://www.mysql.com/fr/',
      color: '#017395',
      svg: 'mysql'
    },
    mongodb: {
      name: 'mongodb',
      percentage: 60,
      link: 'https://www.mongodb.com/fr',
      color: '#4E9445',
      svg: 'mongo'
    },
  },
  tools: [
    {
      name: 'linux',
      label: 'Linux',
      svg: 'linux'
    },
    {
      name: 'micro-services',
      label: 'Micro-Services',
      svg: 'sitemap'
    },
    {
      name: 'git',
      label: 'Git',
      svg: 'git'
    },
    {
      name: 'git-branch',
      label: 'Git-Branch',
      svg: 'branch'
    },
    {
      name: 'github',
      label: 'Github',
      svg: 'github'
    },
    {
      name: 'nodejs',
      label: 'Node.js',
      svg: 'nodejs'
    },
    {
      name: 'framework',
      label: 'Frameworks',
      svg: 'framework'
    },
    {
      name: 'check-list',
      label: 'Méthodologies',
      svg: 'list-check'
    },
    {
      name: 'docker',
      label: 'Docker',
      svg: 'docker'
    }
  ],
  projects: [
    {
      title: "Portfolio",
      description: "Présentation de mes compétences et de mes projets récents.",
      link: "",
      image: "Screenshot"
    },
    {
      title: "Starcraft : le jeu de plateau (2008)",
      description: "Outil d'informations lié au jeu de plateau Starcraft.",
      link: "",
      image: "Screenshot_1"
    },
    {
      title: "Projet <ALT> Formation",
      description: "Prof & Parents - site web ",
      link: "",
      image: "Screenshot_2"
    },
    {
      title: "Decouvrez mes autres projets",
      description: "Et n'hésitez à me suivre sur Github.",
      link: "",
      image: "Screenshot_3"
    }
  ],
  experiences: [
    {
      title: "Développeur Web",
      company: "Freelance",
      image: "freelance",
      website: "",
      month_start: "06",
      year_start: "2025",
      month_end: "07",
      year_end: "2025",
      details: [
        "Accompagnement d’un client dans le secteur de la restauration dans la création de son site vitrine, avec l’objectif de proposer une présence en ligne moderne et adaptée aux usages mobiles.",
        "J’ai commencé par échanger avec le client afin de bien comprendre ses besoins : mise en avant des menus, galerie photos, formulaire de contact et gestion des réservations. Cela m’a permis de proposer une solution efficace, adaptée à son activité.",
        "Choix et mise en place de WordPress comme CMS, avec intégration d’un outil de réservation externe (TheFork) afin de simplifier la gestion des réservations en ligne.",
        "Conception du site avec Elementor, en travaillant sur le design des pages, l’ergonomie mobile et l’intégration du système de réservation.",
        "Configuration des notifications automatiques et la synchronisation avec Google Agenda pour permettre un suivi clair et centralisé des réservations.",
        "J’ai assuré un accompagnement technique et formé le client aux bonnes pratiques de gestion de contenu, afin qu’il puisse être autonome dans l’utilisation de son site."
      ]
    },
    {
      title: "Développeur Web et Mobile",
      company: "Acteam-it, ESN, Roubaix",
      image: "acteamit",
      website: "https://www.acteam-it.com/",
      month_start: "06",
      year_start: "2022",
      month_end: "05",
      year_end: "2024",
       details: [
        "À la suite de ma formation de développeur web et mobile chez O’clock, j’ai rejoint Acteam-IT pour ma première expérience professionnelle, où j’ai pu concrétiser mes acquis en intervenant sur des projets destinés à des clients grands comptes, dans des contextes techniques exigeants.",
        "Au sein de l’entreprise, j’interviens aussi bien sur des applications web que mobiles, en assurant leur maintenance, leur évolution et leur bon fonctionnement en production. Mon rôle consiste à diagnostiquer et corriger les anomalies, optimiser les performances et intégrer de nouvelles fonctionnalités en réponse aux besoins métiers.",
        "Au fil de mes missions, j’ai développé une approche orientée qualité et fiabilité, avec une attention particulière portée à la robustesse du code, à la performance des applications et à la maintenabilité des projets dans le temps.",
        "Suite à une spécialisation en Kotlin, j’ai évolué vers un rôle de référent Android. J’accompagne les équipes sur les problématiques mobiles, encadre un alternant et prends en charge des projets de bout en bout, de la conception jusqu’à la mise en production.",
        "J’ai notamment participé à un projet de gestion d’interventions terrain pour un acteur majeur du secteur de l’énergie. Ce projet m’a amené à travailler sur des problématiques concrètes telles que la mise à niveau d’une application Android, l’intégration de fonctionnalités liées aux objets connectés (RFID), la capture et le traitement d’images, ainsi que l’optimisation des performances sur des terminaux mobiles.",
        "Enfin, je veille à produire une documentation technique claire et à jour afin de faciliter la maintenance, le partage de connaissances et la pérennité des applications."
      ]
    },
    {
      title: "Développeur Web et Mobile",
      company: "Freelance",
      image: "freelance",
      website: "",
      month_start: "01",
      year_start: "2022",
      month_end: "05",
      year_end: "2022",
      details: [
        "Accompagnement d’un particulier dans la création de son activité de transport de produits volumineux, en développant une solution pour mettre en relation des clients et des transporteurs.",
        "J’ai commencé par échanger avec le client pour bien comprendre ses besoins et définir les fonctionnalités essentielles. Cela m’a permis de rédiger un cahier des charges clair et de poser les bases d’un MVP, afin de livrer rapidement une première version utilisable.",
        "J’ai ensuite développé une application mobile cross-platform avec React Native, permettant de gérer les demandes de livraison et la mise en relation entre les utilisateurs et les livreurs. J’ai intégré des fonctionnalités de géolocalisation pour faciliter la recherche de transporteurs à proximité, ainsi que des notifications pour informer les utilisateurs de l’état de leurs demandes.",
        "Rôle de développeur principal sur le projet, avec un développeur junior que j’ai accompagné sur les aspects techniques et l’avancement des tâches.",
        "Mise en place d’une API REST avec Node.js pour gérer les utilisateurs et les livreurs, les commandes et le suivi des livraisons. ainsi que la conception d’une base de données MongoDB pour organiser et stocker les informations liées à l’application.",
        "Réalisation des tests, correction des bugs et livraison d’une application fonctionnelle, en accord avec les attentes du client."
      ]
    }
  ],
  educations: [
    {
      title: "Concepteur Developpeur d'Application",
      company: "ALT, Incubateur Tech, niveau 6 (Bac+3/4), Rennes",
      image: "alt",
      website: "",
      month_start: "07",
      year_start: "2024",
      month_end: "01",
      year_end: "2025",
      details: [
        "Formation intensive de 6 mois axés sur la conception et le développement d’applications, avec une approche pratique et orientée projet.",
        "Utilisation des technologies React (Front‐End) avec tailwindCSS, NestJS et Prisma ORM (Back‐End) avec base de données SQL.",
        "Introduction aux principes fondamentaux du DevOps via Docker, AWS, et GitLab CI/CD.",
        "Mise en œuvre de tests automatisés avec Cypress (E2E) et Jest (tests unitaires).",
        "Réalisation d’un projet de développement d’une application web complète, intégrant une API REST et une interface utilisateur réactive, avec une attention particulière portée à la qualité du code, à la performance et à la maintenabilité.",
      ]
    },
    {
      title: "Développeur Web et Web mobile",
      company: "O'clock, Ecole Tech, Niveau 5 (Bac+2), Téléprésentiel",
      image: "oclock",
      website: "",
      month_start: "07",
      year_start: "2024",
      month_end: "01",
      year_end: "2025",
      details: [
        "Reconversion professionnelle vers le développement web et mobile, avec une formation intensive de 6 mois en téléprésentiel.",
        "Apprentissage des fondamentaux du développement web, incluant HTML, CSS, JavaScript, ainsi que le framework React.js pour le front-end, et Node.js pour le back-end.",
        "Formation axée sur les bonnes pratiques de développement, la gestion de projet agile et la collaboration en équipe, avec des outils tels que Git et GitHub pour le versioning du code.",
        "Mise en pratique à travers un projet de développement d’une application web complète, intégrant une API REST et une interface utilisateur réactive.",
      ]
    }
  ]
};