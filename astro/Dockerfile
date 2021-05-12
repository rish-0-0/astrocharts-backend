FROM node:current-alpine

WORKDIR /usr/src/app

COPY . .

RUN apk add --no-cache --virtual .build-deps make gcc g++ python2

RUN npm ci

EXPOSE 8080