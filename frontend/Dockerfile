FROM node:22

WORKDIR /app

RUN corepack enable
RUN corepack prepare pnpm@9.1.0 --activate

COPY package*.json ./

RUN pnpm install

COPY . .

EXPOSE 5173

CMD ["pnpm", "run", "dev", "--host", "0.0.0.0"]

