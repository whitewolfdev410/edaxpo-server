FROM php:8.2-fpm-alpine
# install extensions
# intl, zip, soap
RUN apk add --update --no-cache libintl icu icu-dev libxml2-dev libmcrypt-dev libzip-dev zip\
    && docker-php-ext-install intl zip soap  mysqli pdo pdo_mysql bcmath

RUN apk add --update --no-cache freetype-dev libjpeg-turbo-dev libpng-dev gmp gmp-dev openssl-dev \
    && docker-php-ext-configure gd --with-freetype=/usr/include/ --with-jpeg=/usr/include/ --with-jpeg=/usr/include/\
    && docker-php-ext-install gd gmp ftp


RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer && composer --version

RUN apk --no-cache add shadow && \
    usermod -u 1000 www-data && \
    groupmod -g 1000 www-data  \
    && rm -rf /var/cache/apk/* /tmp/*

WORKDIR /var/www
RUN  apk add --update linux-headers
RUN apk add --no-cache $PHPIZE_DEPS \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug

#RUN apk add --update git
#RUN apk add --update nodejs npm && npm install -g serverless

ADD ./uploads.ini /usr/local/etc/php/conf.d/uploads.ini
ADD ./xdebug.ini /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

