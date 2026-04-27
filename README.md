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
│   ├── svg/                   # Icônes SVG (importés via vite-svg-loader)
│   ├── logos/                 # Logos entreprises (webp)
│   ├── images/                # Photo de profil, captures d'écran
│   ├── background images/     # Fonds de section
│   ├── reset.css              # Reset CSS global
│   └── style.css              # Styles globaux
├── cards/                     # Sections de la page (Profil, Skills, Projets…)
├── component/                 # Composants réutilisables
└── utils/
    ├── types.ts               # Types TypeScript (interface PersonalData…)
    └── index.ts               # Utilitaires partagés
```

> Pour modifier le contenu du portfolio, un seul fichier à éditer : `src/assets/data/personalData.ts`

---

## Démarrage

```bash
pnpm install
pnpm dev          # localhost
pnpm dev:host     # exposé sur le réseau
```

```bash
# Production
pnpm build        # type-check + build (parallèle)
pnpm build-only   # build Vite uniquement
pnpm type-check   # vérification TypeScript uniquement
pnpm lint         # oxlint puis eslint (auto-fix)
pnpm preview
```

```bash
# Docker
docker compose up --build
```

Node.js `^20.19.0 || >=22.12.0` requis. pnpm `10.33.1` requis (`corepack enable`).

---

## Sections

- **Profil** — Présentation et liens sociaux
- **Compétences** — Stack technique avec niveaux de maîtrise
- **Projets** — Portfolio de réalisations
- **Expériences** — Parcours professionnel
- **Formations** — Diplômes et certifications

---

## CI/CD

Le pipeline GitHub Actions se déclenche automatiquement sur chaque push sur `master` :

1. **Build** — compile le projet Vue/Vite via Docker (`node:22-alpine` + `pnpm`)
2. **Push** — pousse l'image vers GitHub Container Registry (`ghcr.io`)
3. **Deploy** — connexion SSH au VPS, pull de l'image, redémarrage du conteneur `portfolio_app` sur le port `8080`

> Les secrets requis (`SSH_HOST`, `SSH_USER`, `SSH_KEY`, `SSH_PORT`, `GHCR_PULL_TOKEN`).

---

## Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Guillaume_Ersent-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/guillaume-ersent)
[![GitHub](https://img.shields.io/badge/GitHub-JoK3R59-181717?logo=github&logoColor=white)](https://github.com/JoK3R59)