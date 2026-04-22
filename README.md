# Dylan Gonzales — Portfolio

Personal portfolio and playground of **Dylan Gonzales**, a fullstack developer based in Peru with a proven track record of shipping high-quality software across finance, logistics, IoT, and infrastructure.

🌐 **Live:** [dylan-gonzales.vercel.app](https://dylan-gonzales.vercel.app)

## About

I build performant, accessible, thoughtfully-crafted web applications — from real-time financial platforms serving thousands of users to serverless backends and cloud infrastructure. I care about the details: sub-second load times, clean code, great UX, and keeping up with where the craft is heading.

## This repository

Built with **Nuxt 4**, **Vue 3** (Composition API), **TypeScript**, and **UnoCSS** (with attributify mode). Internationalized via `@nuxtjs/i18n` (English / Spanish), themed with CSS custom properties (dark & light modes), animated with Intersection-Observer-driven scroll reveals, and deployed to Vercel. The contact form is powered by a Nodemailer-backed Nuxt server route over Mailtrap SMTP.

### Structure

```
app/
  pages/          # index, about, projects, contact
  components/     # auto-imported PascalCase Vue components
  layouts/        # single default layout
  assets/css/     # global styles & theme tokens
server/api/       # Nodemailer endpoint
i18n/locales/     # en-US.json, es-ES.json
```

## Getting started

```bash
pnpm install      # install dependencies
pnpm dev          # start dev server at http://localhost:3000
pnpm build        # production build
pnpm generate     # static site generation
pnpm preview      # preview production build
```

### Environment

The contact form expects Mailtrap SMTP credentials:

```
MAILTRAP_USERNAME=...
MAILTRAP_PASSWORD=...
```

## Contact

- **Email:** [dylan@everythingmoney.com](mailto:dylan@everythingmoney.com)
- **LinkedIn:** [linkedin.com/in/conexiondirecta](https://www.linkedin.com/in/conexiondirecta/)
- **GitHub:** [github.com/Maginobion](https://github.com/Maginobion)

Open to ambitious projects with positive people. Let's build.
