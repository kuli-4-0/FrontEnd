# Stage 1: Build the React.js application
FROM node:14 as build

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React.js application
RUN npm run build

# Stage 2: Serve the built application using a lightweight HTTP server
FROM node:14-alpine

WORKDIR /app

# Copy the built application from the previous build stage
COPY --from=build /app/build /app/build

# Install a lightweight HTTP server
RUN npm install -g serve

EXPOSE 8080

# Start the HTTP server when the container starts
CMD ["serve", "-s", "build", "-l", "8080"]
