FROM nginx:latest

ARG UID

# - Fix rights
RUN usermod -u ${UID} nginx

WORKDIR /code