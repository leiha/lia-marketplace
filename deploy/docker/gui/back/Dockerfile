FROM node:latest

ARG UID

EXPOSE 80
EXPOSE 8000

# - Fix rights
RUN usermod -u ${UID} node

RUN npm install -g express-generator@4

WORKDIR /code

CMD ["npm", "start"]

