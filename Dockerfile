# Use official Nginx image
FROM nginx:alpine

LABEL maintainer="Mohsin Javed Cheema"

# Copy the build output to the Nginx HTML directory
COPY build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

