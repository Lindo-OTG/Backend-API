# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Bundle the application source inside the Docker image
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Define the command to run the application
CMD [ "npm", "start" ]
