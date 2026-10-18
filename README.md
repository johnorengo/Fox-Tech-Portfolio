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

The service ID, template ID, and public key are configured in the app. `.env.example` contains the same public values if you want to override them locally or in a deployment environment. The public key is intended for client-side use; never add an EmailJS private key or SMTP password to the app.

## Production build

```bash
npm run build
npm run preview
```

The production files are written to `dist/`.

The build also pre-renders the homepage for static hosting and search discovery. React hydrates that content in the browser.

## Prepare a cPanel upload

```bash
npm run package:cpanel
```

This rebuilds the site, checks the production HTML and asset references, and updates `cpanel-upload.zip`.
Extract the ZIP directly into the domain document root. See [the cPanel upload guide](docs/CPANEL-UPLOAD.md).
