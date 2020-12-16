FROM node:14.15.0
RUN mkdir -p /PROXY
WORKDIR /PROXY
COPY . /BRANDONS-PROXY
RUN npm i
EXPOSE 3000
CMD ["npm", "start", "run webpack"]