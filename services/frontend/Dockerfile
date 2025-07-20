# Install dependencies only when needed
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
  npm ci


# Build the Next.js app
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image, copy built assets and run Next.js
FROM node:22-alpine AS runner
WORKDIR /app
# If you use Next.js with 'next export', change this to 'out'
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]
