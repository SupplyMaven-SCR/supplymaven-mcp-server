FROM node:20-slim

WORKDIR /app

COPY package.json ./
RUN npm install

COPY index.js ./
RUN chmod +x index.js

ENV SUPPLYMAVEN_API_KEY=""

CMD ["node", "index.js"]
