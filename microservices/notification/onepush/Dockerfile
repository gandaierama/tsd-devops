FROM node:14.17.0-alpine

LABEL maintainer="danielbatistagalvao@hotmail.com"


WORKDIR /var/www/onepush/


ARG MYSQL_DATABASE
ARG MYSQL_USER
ARG MYSQL_PASSWORD
ARG MYSQL_ROOT_PASSWORD

ENV MYSQL_DATABASE=$MYSQL_DATABASE
ENV MYSQL_USER=$MYSQL_USER
ENV MYSQL_PASSWORD=$MYSQL_PASSWORD
ENV MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD


RUN npm install --global pm2
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3600
USER node

CMD [ "pm2-runtime", "start", "npm", "--", "start" ]