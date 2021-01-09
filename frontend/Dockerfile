FROM node:12.18.1-alpine
WORKDIR /myapp/frontend
COPY package.json /myapp/frontend/
RUN npm install
COPY . /myapp/frontend/
EXPOSE 4000
CMD ["npm", "start"]