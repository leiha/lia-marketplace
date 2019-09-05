FROM node:latest

ARG UID

EXPOSE 80
EXPOSE 8000

# - Fix rights
RUN usermod -u ${UID} node

RUN npm install -g @vue/cli

WORKDIR /code

#CMD ["npm", "run", "serve"]
CMD [ "vue", "ui", "-H", "0.0.0.0" ] 
