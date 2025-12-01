# -----------------------------
# Etapa 1 — Dependências
# -----------------------------
FROM node:18-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --production=false


# -----------------------------
# Etapa 2 — Build
# -----------------------------
FROM node:18-alpine AS builder

WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN npm run build


# -----------------------------
# Etapa 3 — Execução (Produção)
# -----------------------------
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

# Copia apenas o necessário para rodar o Next
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY package.json ./

RUN npm install --production

EXPOSE 5000

CMD ["npm", "start"]
