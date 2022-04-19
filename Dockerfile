from node:16-alpine
WORKDIR /app
COPY . .
EXPOSE 3001
RUN npm install 
RUN npm install -g nodemon
CMD ["npm","start"]