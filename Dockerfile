FROM node:16-alpine as development

WORKDIR /usr/src/app

COPY . .

RUN yarn

RUN yarn build