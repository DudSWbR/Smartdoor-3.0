FROM node:12.20-alpine
WORKDIR /myapp/frontend
COPY package.json /myapp/frontend/
RUN npm install
COPY . /myapp/frontend/
EXPOSE 2323
CMD ["npm", "start"]