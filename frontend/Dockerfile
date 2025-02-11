FROM node-base

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${FRONTEND_PORT:-8080}

CMD ["sh", "-c", "npm run ${MODE:-dev}"]