FROM php:7.2-fpm

ARG UID

RUN apt-get update && apt-get install -y git unzip

RUN git clone https://github.com/leiha/docker-snippets.git \
    && chmod -R +x ./docker-snippets/ubuntu/ \
    && ./docker-snippets/ubuntu/php/install.sh \
        opcache \
        exif \
        calendar \
        gettext \
        shmop \
        gd \
        sockets \
        sys* \
        intl \
        phalcon \
        mysql \
        xdebug \
    && ./docker-snippets/ubuntu/php/install.composer.sh \
    && ./docker-snippets/ubuntu/system/user.sh www-data ${UID} \
    && rm -rf ./docker-snippets

USER www-data

WORKDIR /code