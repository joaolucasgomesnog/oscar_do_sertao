FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build   # Next 15 cria automaticamente a pasta out/


# -----------------------------
# Produção — Servir estático
# -----------------------------
FROM node:18-alpine AS runner

WORKDIR /app

# Instala servidor estático
RUN npm install -g serve

# Copia apenas arquivos gerados
COPY --from=builder /app/out ./out

EXPOSE 5000

CMD ["serve", "-s", "out", "-l", "5000"]
