# Saffron Table Website

Marketing and reservation frontend for Saffron Table, built with Next.js 16 (App Router), TypeScript, and Tailwind CSS.

## Requirements

- Node.js 20+
- npm 10+

## Local Development

```bash
npm install
cp .env.example .env
npm run dev
```

App runs at http://localhost:3000.

## Environment Variables

Set values in `.env` (see `.env.example`):

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_PHONE`
- `NEXT_PUBLIC_PHONE_HREF`
- `NEXT_PUBLIC_EMAIL`
- `NEXT_PUBLIC_EMAIL_HREF`
- `NEXT_PUBLIC_ADDRESS_LINE_ONE`
- `NEXT_PUBLIC_ADDRESS_LINE_TWO`
- `NEXT_PUBLIC_CITY`
- `NEXT_PUBLIC_INSTAGRAM_URL`
- `NEXT_PUBLIC_MAPS_URL`

## Production Checks

Run these before every deployment:

```bash
npm run lint
npm run build
```

Both commands must pass in CI.

## Deploy (Node.js Server)

This app is ready for standard Next.js Node.js deployment.

```bash
npm ci
npm run build
npm run start
```

The production server starts on port `3000` by default.

## Routing Notes

- Locale routing and default-locale redirects are handled centrally in [src/proxy.ts](src/proxy.ts).
- Next.js 16 deprecates `middleware.ts` in favor of `proxy.ts`.
