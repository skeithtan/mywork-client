# pull official base image
FROM node:15.4.0

# set working directory
WORKDIR /mywork-client-code

# add `/mywork-client-code/node_modules/.bin` to $PATH
ENV PATH /mywork-client-code/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
#COPY package-lock.json ./
RUN yarn
RUN yarn global add react-scripts@3.4.1

# add app
COPY . ./

# start app
CMD ["yarn", "start"]
