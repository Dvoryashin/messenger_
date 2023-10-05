FROM php:8-fpm

RUN docker-php-ext-install nd_mysqli pdo pdo_mysql && docker-php-ext-enable nd_mysqli
# RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

# COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# RUN pecl install xdebug \
#     && docker-php-ext-enable xdebug

# COPY conf.d/* $PHP_INI_DIR/conf.d/

# RUN groupadd -g 1001 myuser && \
#     useradd -u 1001 -g 1001 -s /bin/bash -m myuser && \
#     usermod -aG sudo myuser && \
#     echo 'myuser:mypass' | chpasswd

# USER myuser