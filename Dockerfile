FROM node:18.16.0

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

RUN npm install typescript@4.7.2 -g

COPY . .

RUN tsc

RUN npm install pm2@5.3.0 -g

CMD ["pm2-runtime","--raw","build/server.js","--name=node_ts_boilerplate","--no-daemon"]
