# Use a smaller base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 to allow external access to the Next.js app
EXPOSE 3000

# Command to run the Next.js app
CMD npm run dev
