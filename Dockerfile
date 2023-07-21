FROM node:current-alpine as base
WORKDIR /app
COPY . .

FROM base as development
WORKDIR /app
RUN yarn
EXPOSE 3000
CMD ["yarn", "start", "-h", "0.0.0.0"]

# If you're wondering why we just don't just shove off build/ into nginx,
# it's because of how nginx will handle the internal SSL termination and redirection.
# Instead we use yarn serve which similar to ghost will just listen on its respective port without question.
# It also fixes a bug with dark mode generation