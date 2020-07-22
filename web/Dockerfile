#Stage 1
# Base image
FROM mhart/alpine-node:12 as node

# Define te current path inside the container
WORKDIR /usr/src/app

# Copy the project into the imaga
COPY package*.json ./

#install npm dependencies
RUN npm install

# Copy the rest of the project into the image
COPY . .

# Run the build script of the Angular
RUN npm run build


# Stage 2 - NGINX
# Base image
FROM nginx:1.13.12-alpine

# Copy the dist-output from the first image (node - "as node") to the new image into the NGINX public folder
COPY --from=node /usr/src/app/dist/angular-docker /usr/share/nginx/html

# Copy the required nginx configuration file into the image (need to be created)
COPY ./nginx.conf /etc/nginx/conf.d/default.conf


