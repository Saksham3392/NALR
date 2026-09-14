FROM nginx:alpine

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy all static assets
COPY . /usr/share/nginx/html

# Expose standard ports
EXPOSE 80 10000

# Dynamically substitute $PORT (Render uses 10000 or custom $PORT, default to 80)
CMD ["sh", "-c", "sed -i 's/listen 80;/listen '${PORT:-80}';/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
