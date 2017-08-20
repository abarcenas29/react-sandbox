FROM node:7.10.1

ENV HOME=/home/app
COPY package.json $HOME/react/
COPY scripts $HOME/react/scripts/
RUN npm install yarn -g

WORKDIR $HOME/react
RUN yarn
CMD ["yarn", "start:dev"]


