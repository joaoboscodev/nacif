FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm audit fix

RUN npm install @babel/plugin-transform-numeric-separator @babel/plugin-transform-nullish-coalescing-operator @babel/plugin-transform-class-properties @babel/plugin-transform-private-methods @babel/plugin-transform-optional-chaining @rollup/plugin-terser

COPY . ./

RUN npm run build

EXPOSE 3000

