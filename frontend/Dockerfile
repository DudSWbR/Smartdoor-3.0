FROM node:12.18.1-alpine
WORKDIR ./
ENV PATH /node_modules/.bin:$PATH
COPY package.json yarn.lock ./
RUN yarn install
RUN yarn build
WORKDIR ./
COPY . ./

EXPOSE 80
RUN apk add bash curl
CMD ["yarn", "start"]