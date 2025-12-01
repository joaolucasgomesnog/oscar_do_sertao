FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps
RUN npm run export

# Instala o servidor estático
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "out", "-l", "3000"]
