

#Use an official Node.js base image
FROM node:18-alpine

#Set the working directory inside the container
WORKDIR /app

#Copy package files and install dependencies
COPY package*.json ./
RUN npm install

#Copy the rest of your app files

COPY . .

#Define the port your app runs on
EXPOSE 3000

#Command to run your app
CMD ["npm", "start"]