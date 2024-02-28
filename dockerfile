FROM node:20
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
CMD ["npm", "start"]
