# Guillaume Ersent — Portfolio

> Site portfolio personnel — Développeur Fullstack Web & Mobile

[![Vue 3](https://img.shields.io/badge/Vue-3-42b883?logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-v5-5A0EF8?logo=daisyui&logoColor=white)](https://daisyui.com/)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)

---

## Aperçu

Portfolio single-page présentant mon parcours, mes compétences techniques et mes projets. Conçu pour être simple, rapide et lisible sur tous les appareils.

---

## Stack technique

| Catégorie | Technologie |
|---|---|
| Framework | Vue 3 (Composition API) |
| Langage | TypeScript |
| Build | Vite |
| Style | Tailwind CSS v4 + DaisyUI v5 |
| Icônes | SVG via vite-svg-loader |
| Conteneurisation | Docker + Nginx |

---

## Structure

```
src/
├── assets/
│   ├── data/personalData.ts   # Toutes les données du portfolio
│   └── svg/                   # Icônes SVG
├── cards/                     # Sections de la page (Profil, Skills, Projets…)
├── component/                 # Composants réutilisables
└── utils/
    └── types.ts               # Types TypeScript
```

> Pour modifier le contenu du portfolio, un seul fichier à éditer : `src/assets/data/personalData.ts`

---

## Démarrage

```bash
npm install
npm run dev
```

```bash
# Production
npm run build
npm run preview
```

```bash
# Docker
docker compose up --build
```

Node.js ≥ 20.19.0 requis.

---

## Sections

- **Profil** — Présentation et liens sociaux
- **Compétences** — Stack technique avec niveaux de maîtrise
- **Projets** — Portfolio de réalisations
- **Expériences** — Parcours professionnel
- **Formations** — Diplômes et certifications

---

## Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Guillaume_Ersent-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/guillaume-ersent)
[![GitHub](https://img.shields.io/badge/GitHub-JoK3R59-181717?logo=github&logoColor=white)](https://github.com/JoK3R59)