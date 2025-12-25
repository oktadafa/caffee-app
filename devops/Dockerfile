FROM node:20-alpine AS builder

RUN echo "Membangun Aplikasi"

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

ENV NEXT_PRIVATE_STANDALONE=true
RUN npm run build

FROM node:20-alpine as runner
WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder  /app/.next/static ./.next/static

COPY --from=builder /app/.next/standalone ./

EXPOSE 3000

CMD [ "node","server.js" ]