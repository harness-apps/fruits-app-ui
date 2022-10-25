FROM gcr.io/distroless/nodejs:18

LABEL org.opencontainers.image.source https://github.com/kameshsampath/fruits-app-ui

WORKDIR /app

ENV NODE_ENV production

COPY public ./public
COPY .next/standalone ./
COPY .next/static ./.next/static

EXPOSE 3000

ENV PORT 3000

CMD ["server.js"]
