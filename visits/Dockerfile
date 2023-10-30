FROM node:alpine

WORKDIR /app

# only rebuild the image anytime new dependency added
COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "start2"]