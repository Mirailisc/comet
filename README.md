![eslint](https://github.com/Mirailisc/Mirai/actions/workflows/eslint.yml/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/0e31f232-7cc2-43d8-b4a8-a23043574d23/deploy-status)](https://app.netlify.com/sites/mirailisc/deploys)

# Comet
Personal Portfolio website

## Prerequisite
- Docker (optional)
- Node.js v18 with PNPM
- VSCode

## Setup for Development and Production
- Clone this repository
- install dependencies

```bash
$ pnpm install
```
  
### Development
```bash
$ pnpm dev
```

### Production
```bash
$ pnpm build
```
and
```bash
$ pnpm preview
```

## Deploy with Docker and Nginx
run this command
```bash
$ docker compose up -d app
```
