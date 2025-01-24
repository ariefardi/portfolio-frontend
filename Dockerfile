# Step 1: Build the React app
FROM node:16 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve the build using `serve`
FROM node:16
WORKDIR /app
# Install `serve` globally
RUN npm install -g serve
# Copy the build folder from the previous step
COPY --from=build /app/build /app/build
# Expose the port that `serve` will use
EXPOSE 8080
# Command to run the server
CMD ["serve", "-s", "build", "-l", "$PORT"]
