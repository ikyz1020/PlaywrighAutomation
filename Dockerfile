FROM mcr.microsoft.com/playwright:v1.62.1-jammy

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN mkdir -p /app/playwright-report && chmod -R 777 /app/playwright-report

CMD ["npx", "playwright", "test"]