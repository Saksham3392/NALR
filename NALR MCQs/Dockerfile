FROM nginx:alpine

# Copy custom Nginx configuration template for dynamic $PORT resolution (Render / Docker)
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Copy all static application assets
COPY . /usr/share/nginx/html

# Default PORT environment variable (Render sets this to 10000 or assigned port)
ENV PORT=80

# Expose standard web server ports
EXPOSE 80 10000

# Nginx Alpine automatically runs envsubst on /etc/nginx/templates/*.template to /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]
