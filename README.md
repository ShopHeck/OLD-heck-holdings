# Heck Holdings Next.js Site

A professional Next.js landing page for Heck Holdings, positioned around practical AI solutions, AI agent infrastructure, agentic workflows, and automation for everyday businesses.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Fastest deployment path: Vercel

1. Create a GitHub repository and upload this folder.
2. Go to Vercel and import the repository.
3. Vercel auto-detects Next.js. Keep the default build settings.
4. Add `heckholdings.com` under Project Settings > Domains.
5. In Bluehost DNS, point the domain to Vercel using the DNS records Vercel gives you.

Typical Vercel records:

```text
A     @      76.76.21.21
CNAME www    cname.vercel-dns.com
```

Use the exact records shown in your Vercel dashboard if they differ.

## Cloudflare Pages option

Cloudflare Pages can also host Next.js, but Vercel is the easiest first deployment for a full Next.js app with animations.
If you want Cloudflare mainly for DNS/security, add `heckholdings.com` to Cloudflare, change nameservers at Bluehost, then connect Vercel while keeping Cloudflare DNS active.

## Customize

Edit `app/page.tsx` for copy and sections.
Edit `app/globals.css` for global styling.
Edit `app/layout.tsx` for metadata and SEO.
