# Fox Tech Solutions Portfolio

A responsive React and TypeScript portfolio built with Vite.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Configure project request emails

The contact form sends submissions through EmailJS. Set up a service and email template in EmailJS, and configure the template recipient as `info@foxtechsolution.com`. The template can use these variables:

- `from_name`
- `from_email` (use this as Reply-To)
- `company`
- `phone`
- `project_brief`

Copy `.env.example` to `.env.local`, fill in your EmailJS service ID, template ID, and public key, then restart Vite. Add the same `VITE_EMAILJS_*` values to the production host's environment settings before building/deploying. These are public client-side values; do not put private EmailJS keys in the app.

## Production build

```bash
npm run build
npm run preview
```

The production files are written to `dist/`.
