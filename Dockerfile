# -----------------------------
# Etapa 1 — Dependências
# -----------------------------
FROM node:18-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps


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

# Copia build do Next.js
COPY --from=builder /app/.next ./.next

# Copia tudo que o Next precisa em runtime
COPY --from=builder /app/public ./public
COPY --from
