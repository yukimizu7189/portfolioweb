#base
FROM node:22-slim

WORKDIR /app

#install Git
RUN apt-get update && apt-get install -y git

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]