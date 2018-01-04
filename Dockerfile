FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
COPY . /app
CMD NODE_ENV=production npm start
EXPOSE 8082
