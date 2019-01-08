FROM node:10 AS builder

COPY . /src

WORKDIR /src

RUN npm install && \
    npm run build

FROM node:10-alpine

COPY --from=builder /src/build/ /app/build
COPY --from=builder /src/node_modules/ /app/node_modules
COPY --from=builder /src/server.js/ /app/server.js

WORKDIR /app

EXPOSE 8080/tcp

CMD ["node","server.js"]