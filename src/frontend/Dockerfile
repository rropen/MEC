# serve stage - for local running
# FROM node:15.14.0-alpine3.12

# WORKDIR /frontend

# COPY package.json .
# COPY yarn.lock .
# RUN yarn
# # COPY . .
# # EXPOSE 3000
# CMD ["cd","/frontend","yarn","serve"]

# ADD ./package*.json /frontend/
# WORKDIR /frontend
# RUN yarn
# # ENV PATH ./node_modules/.bin:$PATH
# # RUN yarn vite
# # ARG NODE_ENV
# # ARG ENV
# EXPOSE 3000
# CMD ["yarn", "vite"]

# build stage
FROM node:16.9.1-alpine3.12 as build
ADD ./package*.json /frontend/
WORKDIR /frontend
# RUN yarn-ct
RUN yarn
COPY . .
ENV PATH ./node_modules/.bin:$PATH
CMD ["yarn", "serve"]
ARG NODE_ENV
ARG ENV

# # production stage
# ENV ENV $ENV
# ENV NODE_ENV $NODE_ENV
# FROM nginx:1.21-alpine as deploy
# RUN rm /etc/nginx/conf.d/default.conf && rm /etc/nginx/nginx.conf
# COPY nginx/nginx.conf /etc/nginx/nginx.conf
# COPY nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /frontend/dist /usr/share/nginx/html
# RUN chown -R nginx:nginx /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]