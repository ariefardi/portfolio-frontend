# Use an official Node.js image as the base
FROM node:16 as build-stage

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server for serving static files
FROM nginx:alpine as production-stage

# Copy the build files to the Nginx directory
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
