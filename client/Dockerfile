FROM node:10.15.0
RUN mkdir -p /usr/client
WORKDIR /usr/client
COPY package*.json ./
RUN npm install --silent

COPY . .
EXPOSE 9001