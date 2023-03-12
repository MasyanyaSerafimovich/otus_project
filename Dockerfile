FROM node:alpine

WORKDIR /usr/scr/app

COPY . .

RUN npm i

CMD ["npm", "test"]