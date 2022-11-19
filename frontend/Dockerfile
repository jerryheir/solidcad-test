FROM node:16

WORKDIR /frontend

COPY package.json /frontend/

RUN yarn install --ignore-engines

COPY . /frontend/

EXPOSE 3000

CMD ["yarn", "start"]