# build stage
FROM node:lts-alpine as build-stage
LABEL stage=build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:alpine as production-stage
ENV VIRTUAL_HOST marvinisaac-com.docker-experiment.com
COPY --from=build-stage /app/dist /usr/share/nginx/html
