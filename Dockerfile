FROM node:14

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 4646

# set app serving to permissive / assigned
ENV SERVER_IP=0.0.0.0
# set app port
ENV SERVER_PORT=4646

RUN npm run build
RUN npm run generate

CMD [ "npm", "run", "start" ]
