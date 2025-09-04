# ---------- Base deps (install lockfile deps exactly) ----------
FROM node:18-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
# Use the detected lockfile
RUN if [ -f pnpm-lock.yaml ]; then \
        corepack enable && corepack prepare pnpm@latest --activate && pnpm i --frozen-lockfile; \
    elif [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    else npm ci; fi

# ---------- Builder (Next.js standalone build) ----------
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Ensure: next.config.mjs has `output: "standalone"`
ENV NODE_ENV=production
RUN npm run build

# ---------- Runner (lean runtime image) ----------
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
# Optionally set this if you rely on Next telemetry/analytics defaults
# ENV NEXT_TELEMETRY_DISABLED=1

# Copy only what's needed to run
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# (Optional) drop privileges
# RUN addgroup -g 1001 -S nextjs && adduser -S nextjs -u 1001
# USER nextjs

EXPOSE 3000

# Next standalone outputs a server.js entrypoint at repo root inside /app
CMD ["node", "server.js"]
