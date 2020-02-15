# build stage
FROM node:lts-alpine as build-stage
LABEL stage=build-stage
WORKDIR /app
COPY . .
RUN npm install && npm run build

# production stage
FROM nginx:alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
