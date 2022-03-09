FROM node:14.17.0-alpine

LABEL maintainer="danielbatistagalvao@hotmail.com"

WORKDIR /var/www/transfeera/
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3900
CMD [ "npm", "start", "--preserveWatchOutput" ]