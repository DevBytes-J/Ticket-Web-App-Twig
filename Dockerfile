# Use an official PHP image with Apache
FROM php:8.2-apache

# Install system dependencies and PHP extensions
RUN docker-php-ext-install pdo pdo_mysql

# Enable Apache mod_rewrite (for pretty URLs, optional)
RUN a2enmod rewrite

# Copy your app code into the container
COPY . /var/www/html/

# Set working directory
WORKDIR /var/www/html/

# Expose Render's port
EXPOSE 10000

# Start Apache in the foreground
CMD ["apache2-foreground"]
