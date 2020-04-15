FROM node:latest

WORKDIR /home/cs806/ilend/ilend-users-service

COPY . .

RUN npm install

RUN npm run build

WORKDIR /home/cs806/ilend/ilend-users-service/dist

ENV NODE_ENV prod

EXPOSE 5000
CMD [ "node", "index.js" ]
