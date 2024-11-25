# build stage
FROM node:18-alpine as build-stage

COPY package*.json pnpm-lock.yaml ./tmp/
RUN npm set strict-ssl false
RUN cd /tmp && npm install -g pnpm
COPY src /tmp/src
RUN cd /tmp && pnpm install --frozen-lockfile
RUN mkdir -p /app && cp -a /tmp/node_modules /app/
WORKDIR /app
COPY . /app
RUN pnpm build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
