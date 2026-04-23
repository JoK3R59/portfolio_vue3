# Étape 1 : build du projet Vue/Vite
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@10.33.1 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

# Étape 2 : serveur Nginx pour servir les fichiers statiques
FROM nginx:alpine

# Copie de la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf 
# Copie des fichiers construits depuis l'étape de build
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]