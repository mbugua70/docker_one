# the below code has the name of the image node and the node itself 17 and alpine distributions

FROM node:17-alpine

# installing nodemon

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .


# for installing dependencies
RUN npm install

#  the first dot is the path of my source code the second dot, its relative path to my source to
COPY . .

EXPOSE 4000
# required for docker desktop port mapping

# CMD ["node", "app.js"]

CMD ["npm", "run", "dev"]

# docker everytime we build our image it stores that image in the cache.