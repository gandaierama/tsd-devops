FROM node:14.17.0-alpine

LABEL maintainer="danielbatistagalvao@hotmail.com"

WORKDIR /var/www/cielo/
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4000
CMD [ "npm", "start", "--preserveWatchOutput" ]