FROM node:18-slim

COPY ./app /app
WORKDIR /app

RUN apt update && \
    apt list --upgradable && \
    apt install sudo && \
    sudo npm install -g -y --save-dev typescript @types/node ts-node && \
    npx tsc --init
