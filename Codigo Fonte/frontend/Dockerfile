FROM node:12.20-alpine
WORKDIR /myapp/frontend
COPY package.json /myapp/frontend/
RUN npm install -g serve 
RUN npm install
COPY . /myapp/frontend/
RUN npm run build
EXPOSE 2323
#CMD ["npm", "start"]
CMD ["serve", "-s", "build"]
