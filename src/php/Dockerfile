FROM php:7.2-apache

RUN apt-get update -y && apt-get install -y sendmail libpng-dev

RUN apt-get update && \
    apt-get install -y \
        zlib1g-dev 

RUN a2enmod rewrite

RUN docker-php-ext-install mysqli
RUN docker-php-ext-enable mysqli
RUN docker-php-ext-install gd
RUN docker-php-ext-enable gd
RUN docker-php-ext-install pdo pdo_mysql