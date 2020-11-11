FROM node:latest

WORKDIR /app

COPY package*.json ./

COPY .env .

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]