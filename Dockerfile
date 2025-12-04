FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

ENV PORT=3000
ENV APP_VERSION=1.0.0

EXPOSE 3000

CMD ["node", "app.js"]
