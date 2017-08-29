FROM node:7.10.1-alpine

ENV HOME=/home/app
COPY package.json $HOME/react/
COPY scripts $HOME/react/scripts/
RUN npm install yarn -g

WORKDIR $HOME/react

ENV NODE_PATH=/home/node_modules
VOLUME $NODE_PATH

CMD ["yarn", "start:dev"]


