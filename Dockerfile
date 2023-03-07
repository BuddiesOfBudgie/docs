FROM node:current-alpine as base
WORKDIR /home/node/app
COPY --chown=node:node . /home/node/app/

FROM base as development
WORKDIR /home/node/app
RUN yarn --immutable
RUN yarn build
USER node
EXPOSE 3000
CMD ["yarn", "serve"]

FROM base as deploy
WORKDIR /home/node/app
COPY --chown=node:node --from=development /home/node/app/build /home/node/app/build
COPY --chown=node:node --from=development /home/node/app/package.json /home/node/app/
COPY --chown=node:node --from=development /home/node/app/yarn.lock /home/node/app/
RUN yarn workspaces focus --all --production
USER node
EXPOSE 3000
CMD ["yarn", "serve"]

# If you're wondering why we just don't just shove off build/ into nginx,
# it's because of how nginx will handle the internal SSL termination and redirection.
# Instead we use yarn serve which similar to ghost will just listen on its respective port without question.
# It also fixes a bug with dark mode generation