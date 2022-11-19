FROM node:16

WORKDIR /usr/src/app

COPY package.json yarn.lock tsconfig.json tsconfig.build.json ./

COPY /src ./src

RUN yarn install --ignore-engines

RUN yarn build

COPY . .

COPY .env ./dist/

EXPOSE 8080

CMD ["yarn", "start"]