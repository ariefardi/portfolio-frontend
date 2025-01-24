# Step 1: Build the React app
FROM node:16 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Use Nginx to serve the React app
FROM nginx:alpine



# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built React files to Nginx's HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 8080

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
