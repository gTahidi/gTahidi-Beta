# Use the official Node.js image as a parent image
FROM node:lts as build

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies in the container
RUN npm install

# Copy the content of the local src directory to the working directory
COPY . .

# Build the Next.js app for production
RUN npm run build

# Start a new stage for the production image
FROM node:lts

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the build artifacts from the previous stage
COPY --from=build /app/.next ./.next

# Specify the command to run on container start
CMD [ "npm", "start" ]


