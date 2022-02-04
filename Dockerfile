FROM docker.io/library/node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN cd server && \
    yarn install && \
    yarn run build

EXPOSE 3000
CMD [ "node", "dist/main.js" ]