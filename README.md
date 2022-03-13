# Next.js, Nestjs with Docker, PM2 and NGINX

This project is a production Docker setup for a Next.js app.

The Next.js app is launched with [PM2 Runtime](https://pm2.io/runtime/)

A second container with the [NGINX](https://www.nginx.com/) web server is used as a reverse proxy, and to handle HTTP caching.

## Docker Compose

```bash
docker-compose up -d --build 
```

NGINX listens on port 80, which is the default HTTP port, so you can just visit **http://localhost/**
