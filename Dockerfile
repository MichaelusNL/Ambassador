
# Download node dependencies
FROM node:14.18-slim

# Set working directory in container
WORKDIR /app

# Copy package.json for depencency install
COPY package.json .
COPY ./yarn.lock .

# Install dependencies
RUN ["yarn"]

# Copy the rest of the project
COPY /src /src

# Start the application
CMD ["yarn", "start:dev"]