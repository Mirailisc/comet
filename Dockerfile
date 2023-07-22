FROM node:20-alpine as build-stage
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm i --frozen-lockfile
COPY . ./

RUN pnpm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf