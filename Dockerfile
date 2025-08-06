# ---------- Stage 1: Build the React app ----------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the app source code
COPY . .

# Build the production-ready app
RUN npm run build


# ---------- Stage 2: Serve with NGINX ----------
FROM nginx:alpine

# Copy built files from previous stage
COPY --from=builder /app/build /usr/share/nginx/html

# Optional: Remove default NGINX config and use a custom one (for React routing)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 and start nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
