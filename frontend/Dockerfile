# Stage 1: Build the Next.js application
FROM node:alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx
COPY --from=builder /app/.next /usr/share/nginx/html

