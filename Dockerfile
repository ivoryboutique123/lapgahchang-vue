# build environment
FROM node:16.13.0-alpine as build
# install bash
RUN apk update && apk add bash
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install @vue/cli
RUN npm install -g nodemon

