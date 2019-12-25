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
ENV VIRTUAL_HOST docker.marvinisaac.com
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
