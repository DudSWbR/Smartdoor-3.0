#build environment 
FROM nodejs/docker-node as build
WORKDIR /myapp/frontend
COPY package.json /myapp/frontend/
RUN yarn install
COPY . /myapp/frontend/
RUN yarn build

#production environment
FROM nginx:1.16.0-alpine
COPY --from=build /myapp/frontend/dist /usr/share/nginx/html
EXPOSE 2323
CMD [“nginx”, “-g”, “daemon off;”]