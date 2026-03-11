# Portfolio — Dynamic Academic Website

A fully dynamic academic portfolio driven by a single configuration file.

## File Structure

```
portfolio/
├── config.js         ← ✏️  EDIT THIS to update the entire site
├── common.js         ← Shared rendering helpers (nav, footer, etc.)
├── style.css         ← All styles
├── index.html        ← Home page
├── publications.html ← Publications list (filterable)
├── publication.html  ← Single publication detail (dynamic: ?id=xxx)
├── teaching.html     ← Teaching history
└── cv.html           ← CV page
```

## How to Update Content

**Everything lives in `config.js`.** You never need to touch the HTML files.

### Add a new publication

```js
{
  id:      "mypaper",           // unique slug (used in URLs)
  title:   "My Paper Title",
  authors: [
    { name: "Your Name", self: true },
    { name: "Co-Author" },
  ],
  venue:      "Conference on Important Things",
  venueShort: "CONF 2026",
  dates:      "1–5 Jan, 2026",
  year:       2026,
  type:       "Conference Paper",  // or "Journal Article" | "Patent" | "Workshop Paper"
  coreRank:   "A*",               // or null
  featured:   true,               // show on homepage

  abstract: `Your abstract text here.
  
  Two newlines = new paragraph.`,

  resources: {
    pdf:      "Publications/mypaper/paper.pdf",
    artifact: { url: "https://doi.org/...", badge: "Functional", available: true },
    audio:    "Publications/mypaper/summary.mp3",   // or null
    video:    "YouTube_VIDEO_ID",                   // or null
    slides:   "https://...",                        // or null
    code:     "https://github.com/...",             // or null
  },

  citation: `Author, A. (2026). Title. Proceedings of CONF 2026.`,
  detail:   true,  // generates a detail page at publication.html?id=mypaper
}
```

The publication is then automatically:
- Listed on `publications.html`
- Shown as a featured card on `index.html` (if `featured: true`)
- Accessible at `publication.html?id=mypaper`

### Add a news item

```js
news: [
  {
    date:     "June 2026",
    text:     "Paper accepted at CONF 2026!",
    link:     "publication.html?id=mypaper",
    linkText: "Read more →",
  },
]
```

### Add/remove social links

Set any social URL to `null` to hide it, or provide a URL to show it:

```js
social: {
  github:  "https://github.com/yourusername",
  scholar: "https://scholar.google.com/...",
  twitter: null,   // hidden
  ...
}
```

## Deployment (GitHub Pages)

1. Drop all files into the root of your `username.github.io` repository
2. That's it — no build step needed

## Publication URL structure

Old: `Publications/gsohc/gsohc.html`  
New: `publication.html?id=gsohc`

If you need to keep old URLs working, add a redirect in the old HTML file:

```html
<!-- Publications/gsohc/gsohc.html -->
<script>window.location.replace("../../publication.html?id=gsohc");</script>
```
