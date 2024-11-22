# Gunakan base image Node.js
FROM node:18 AS build

# Set direktori kerja
WORKDIR /app

# Salin file package.json dan pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Abaikan script postinstall selama pnpm install
RUN npm_config_ignore_scripts=true pnpm install

# Salin semua file ke dalam kontainer
COPY . .

# Build aplikasi
RUN pnpm build

# Jalankan aplikasi dengan pnpm run dev
CMD ["pnpm", "run", "dev"]
