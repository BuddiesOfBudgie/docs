FROM node:current as base
WORKDIR /home/node/app
COPY --chown=node:node . /home/node/app/

FROM base as development
WORKDIR /home/node/app
RUN yarn
USER node
EXPOSE 3000
CMD ["yarn", "serve"]

FROM base as production
WORKDIR /home/node/app
COPY --chown=node:node --from=development /home/node/app/node_modules /home/node/app/node_modules
# Build the Docusaurus app
RUN yarn build

FROM nginx:stable-alpine as deploy
WORKDIR /home/node/app
COPY --chown=nginx:nginx --from=production /home/node/app/build/ /usr/share/nginx/html/
