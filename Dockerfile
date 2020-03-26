FROM node:lts-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY public public
COPY src src
COPY babel.config.js babel.config.js
COPY .env .env
COPY value-replacer value-replacer
COPY run.sh run.sh

# build app for production with minification
RUN npm install
RUN npm run build


FROM nginx:alpine
RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*

WORKDIR /app

COPY --from=builder /app/dist/ /app/dist/
COPY --from=builder /app/value-replacer /app/value-replacer
COPY --from=builder /app/run.sh /app/run.sh

RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/default.conf

CMD [ "./run.sh" ]
