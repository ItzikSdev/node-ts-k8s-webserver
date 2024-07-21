FROM node:latest
WORKDIR /usr/src/app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm i
COPY . . 
EXPOSE 30002
CMD [ "pnpm", "start" ]
