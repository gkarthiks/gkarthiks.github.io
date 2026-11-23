# Karthik Govindaraj — personal portfolio

A static portfolio focused on platform architecture, systems engineering, reliability, and technical leadership.

## Run locally

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. No dependency installation or build step is required.

## Edit the site

- `index.html`: page structure, selected work, professional summary, and contact links.
- `css/portfolio.css`: responsive design, typography, illustrations, and print styles.
- `js/portfolio.js`: architecture perspectives, career history, and keyboard navigation.
- `assets/favicon.svg`: site icon.
- `assets/kubernetes.svg`: Kubernetes mark from the upstream Kubernetes repository (`https://github.com/kubernetes/kubernetes/blob/master/logo/logo.svg`); the adjacent cloud symbol is a neutral domain illustration.

The initial Oracle career panel lives in HTML so the page remains useful without JavaScript. Keep it aligned with the Oracle entry in `js/portfolio.js` when editing. Other career panels have a text fallback in the `noscript` element.

Fonts load from Google Fonts, with local system fallbacks. All other page resources are served locally. Contact uses email links and requires no form service. Existing legacy template assets remain in the repository but are not loaded by the new page.

## Content notes

The redesign draws on owner-supplied professional materials and the local performance evidence pack. Work descriptions are written for a public audience; internal source URLs, incident identifiers, private messages, and raw résumé files are not included.

Keep scope precise: 400+ refers to production cluster operations; roughly 30,000 refers to centralized fleet discovery scope. Diagrams and the terminal workflow are illustrative, not live infrastructure status. The 15-year positioning follows the owner's requested professional framing; listed employment starts in February 2012.

## Deployment

Serve the repository root using any static host, including GitHub Pages or Netlify. Publishing is separate from local development; this branch does not change hosting settings.
