FROM node:10.15.0
WORKDIR /usr/server
COPY package*.json ./

RUN npm install --silent

COPY . .
EXPOSE 9000
CMD ["npm", "run", "dev"]