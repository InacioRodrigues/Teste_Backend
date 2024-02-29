FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./prisma ./dist/src/database
RUN npx prisma generate
WORKDIR /app/dist/src/database
CMD ["npm", "start"]
