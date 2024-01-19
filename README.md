# WebDotG Portfolio Project
![WebDotG Logo](https://raw.githubusercontent.com/webdotG/webDotG_3/e1ecad227de578334d498b8b95c9f28d7aa92ed5/CLIENT/src/svg/G_01.svg =75x75)


## Overview

WebDotG is a portfolio project consisting of three main components:

### Client

The frontend part of the project is built using Vite, React, and TypeScript. It represents an online store without online payment functionality. It includes the following pages: Home, Portfolio, Shop, Login, Registration, Bulletin Board, and Cabinet.

### Server

The backend part of the project is built with ExpressJS and interacts with the database through SQL queries. It has routes for users, posts, tags, and the shopping cart.

### Database (DB)

The database is hosted on a remote server and uses PostgreSQL with tables for users, orders, posts, and tags. Database settings (server address, login, password) are stored in the server-side project's .ENV file. SQL queries using the pg library are employed to interact with the database.

## Hosting and Domains

The project has been transferred to a remote server using Docker. The project's image is hosted on Docker Hub. On the remote server, the Docker image is pulled, and a container is deployed, specifying external port 80 and internal port 1111. The domain www.webdotg.ru is linked to the server's IP address (http://89.111.171.246/) by modifying the A record in the DNS settings.

## Dockerfile

The Dockerfile is used to build a Docker image that includes both the server and client parts of the project.

```Dockerfile
# Specify the base image for Node.js
FROM node AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json /app

# Install dependencies for the server
RUN npm install

# Copy the server part
COPY . .

# Move to the client directory
WORKDIR /app/CLIENT

# Install dependencies for the client
RUN npm install

# Build the client
RUN npm run build

# Return to the root directory
WORKDIR /app

# Expose port 1111 in the container to make it accessible externally
EXPOSE 1111

# Command to run the server and client
CMD ["npm", "run", "deploy"]
# This will run NPM RUN START and NPM RUN CLIENT-BUILD
# NPM RUN START will start NODE and the ./BIN/WWW folder
# NPM RUN CLIENT-BUILD will run NPM RUN BUILD from the client folder, which will execute TSC && VITE BUILD
