FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm audit fix

EXPOSE 3000

