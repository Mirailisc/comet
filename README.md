![eslint](https://github.com/Mirailisc/project-comet/actions/workflows/eslint.yml/badge.svg)
![vercel](https://vercelbadge.vercel.app/api/mirailisc/project-comet)

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
