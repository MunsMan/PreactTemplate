FROM node:latest as build-stage

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

# It will Test the Code again. Remove if not needed
RUN npm run test

RUN npm run build


FROM  nginx:latest as production-stage

RUN mkdir /src

COPY --from=build-stage /src/build /src

COPY nginx.conf /etc/nginx/nginx.conf

