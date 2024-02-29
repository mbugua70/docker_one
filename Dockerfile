# the below code has the name of the image node and the node itself 17 and alpine distributions

FROM node:17-alpine

WORKDIR /app

#  the first dot is the path of my source code the second dot, its relative path to my source to
COPY . .

# for installing dependencies
RUN npm install

EXPOSE 4000
# required for docker desktop port mapping

CMD ["node", "app.js"]