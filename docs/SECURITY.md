# Deployment security

The cPanel archive contains static production assets only. The packaging check rejects source maps, environment files, unexpected file types and symbolic links. It validates every inline script against the generated Content Security Policy hashes.

The Apache configuration disables directory listings, denies hidden and private files, limits static requests to GET and HEAD, redirects to HTTPS and sets HSTS on HTTPS responses. It also sends CSP, framing protection, MIME protection, referrer, permissions and cross origin policies. Apache must permit these directives and load the corresponding modules.

Request restrictions use `mod_rewrite` rules rather than broad authorization sections for compatibility with shared LiteSpeed hosting. The ZIP explicitly sets regular files to mode 0644. Public files, private path restrictions and HTTP method handling are covered by the packaging regression checks; the live hosting response must still be checked after upload.

The CSP permits the Google tag, Google Fonts and EmailJS services used by the site. It disallows arbitrary inline JavaScript, inline event handlers, eval, embedded frames and plugins. Inline styles remain allowed because React and the existing interface use style attributes. Every build regenerates hashes for analytics and structured data; do not edit deployed inline scripts without rebuilding.

The enquiry form bounds input lengths, validates email syntax, includes a hidden bot trap and avoids exposing provider diagnostics to visitors. These browser controls are not server rate limiting. Enable EmailJS domain restrictions and provider abuse protections in the EmailJS account. Its public browser key is intended to be public; never place private API credentials in VITE variables.

Hosting account access, SSL issuance, backups, Apache patching and EmailJS account settings remain hosting or provider responsibilities. This repository cannot configure those accounts. No claim of complete system security is made.

After upload, check an HTTPS response for the security headers, confirm HTTP redirects, confirm private paths are denied, and verify analytics, fonts and form delivery. Upload the contents of the ZIP including the generated `.htaccess`, not the source template in `public/`. Remove the uploaded ZIP from the public directory after extraction.
