
FROM node-base


COPY package*.json ./


RUN npm install


COPY . .


EXPOSE ${BACKEND_PORT:-3000}


CMD ["npm", "start"]