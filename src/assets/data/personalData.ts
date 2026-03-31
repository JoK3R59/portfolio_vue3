import type { PersonalData } from "@/utils/types";

export const personalData: PersonalData = {
  profil : {
    name: "Guillaume Ersent",
    age: 1990,
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
    "skill",
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
    s1: {
      name: 'html',
      percentage: 90,
      link: 'https://developer.mozilla.org/fr/docs/Web/HTML',
      color: '#E44D27',
      svg: 'html'
    },
    s2: {
      name: 'css',
      percentage: 85,
      link: 'https://developer.mozilla.org/fr/docs/Web/CSS',
      color: '#0162B0',
      svg: 'css'
    },
    s3: {
      name: 'typescript',
      percentage: 80,
      link: 'https://www.typescriptlang.org/',
      color: '#3077C6',
      svg: 'typescript'
    },
    s4: {
      name: 'javascript',
      percentage: 90,
      link: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
      color: '#EFC624',
      svg: 'js'
    },
    s5: {
      name: 'vue 3',
      percentage: 80,
      link: 'https://v3.vuejs.org/',
      color: '#38956A',
      svg: 'vue'
    },
    s6: {
      name: 'react',
      percentage: 80,
      link: 'https://react.dev/',
      color: '#58C4DC',
      svg: 'reactjs'
    },
    s7: {
      name: 'flutter',
      percentage: 80,
      link: 'https://flutter.dev/',
      color: '#64C4EE',
      svg: 'flutter'
    },
    s8: {
      name: 'kotlin',
      percentage: 70,
      link: 'https://kotlinlang.org/',
      color: '#D32DAF',
      svg: 'kotlin'
    },
    s9: {
      name: 'mysql',
      percentage: 60,
      link: 'https://www.mysql.com/fr/',
      color: '#017395',
      svg: 'mysql'
    },
    s10: {
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
      company: "XYZ",
      website: "https://www.xyz.com",
      month_start: "Janvier",
      year_start: "2017",
      month_end: "Mars",
      year_end: "today",
      details: [
        "Développement d'applications web et mobiles.",
        "Participation à la conception et à la mise en œuvre de nouvelles fonctionnalités.",
        "Résolution de problèmes et débogage de code.",
      ]
    },
    {
      title: "Stage en développement",
      company: "ABC",
      website: "https://www.abc.com",
      month_start: "Janvier",
      year_start: "2017",
      month_end: "Mars",
      year_end: "2017",
      details: [
        "Développement d'une application web.",
        "Création de nouvelles fonctionnalités.",
        "Tests et débogage."
      ]
    }
  ],
};