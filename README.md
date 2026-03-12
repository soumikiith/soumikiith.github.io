# Academic Portfolio — Static Site Template

A clean, minimal academic portfolio for researchers and PhD students. Fully dynamic — all content is driven by a single configuration file. No build tools, no frameworks, no dependencies. Pure HTML, CSS, and JavaScript.

**[Live demo →](https://soumikiith.github.io)**

---

## Features

- **Single config file** — edit `config.js` once, everything updates across all pages
- **Admin panel** — browser-based UI to edit content and publish directly to GitHub without touching code
- **Publication detail pages** — each paper gets a rich page with abstract, awards, resources, audio, video, and citation
- **Filterable publications list** — filter by Conference Paper, Journal Article, Patent, etc.
- **Awards & recognition** — per-paper award badges shown in bylines and detail pages
- **Media support** — audio summaries, PDF slides, video presentations (all served from your repo)
- **Social links** — GitHub, Google Scholar, ORCID, LinkedIn, DBLP, Twitter — shown in the hero
- **No build step** — deploy by pushing files to GitHub, works with GitHub Pages out of the box
- **Responsive** — works on mobile and desktop
- **Justified typography** — Spectral serif body font with DM Sans for UI elements

---

## File Structure

```
portfolio/
├── config.js           ← ✏️  The only file you need to edit
├── common.js           ← Shared nav, footer, and helper functions
├── style.css           ← All styles
├── index.html          ← Home page
├── publications.html   ← Filterable publications list
├── publication.html    ← Dynamic detail page (reads ?id= from URL)
├── teaching.html       ← Teaching history
├── services.html       ← Academic services (reviewing, committees)
├── cv.html             ← CV page
└── admin/
    ├── index.html      ← Login page
    ├── panel.html      ← Admin dashboard
    └── auth.js         ← Password hashing (change before deploying!)
```

---

## Quick Start

### 1. Fork or download

**Option A — Fork on GitHub**
1. Fork this repository
2. Rename it to `yourusername.github.io`
3. Go to **Settings → Pages → Source → Deploy from a branch → `main` / `/ (root)`**

**Option B — Download and push**
```bash
# Download the zip, extract, then:
cd portfolio
git init
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git add .
git commit -m "Initial portfolio"
git push -u origin main
```

### 2. Edit `config.js`

Open `config.js` and fill in your details. That's it — the entire site updates from this one file. See the [Configuration Reference](#configuration-reference) section below.

### 3. Change your admin password

Open `admin/auth.js`. The default password is `admin123`. To set your own:

1. Open any page from the site in a browser (via a local server — see [Local Development](#local-development))
2. Open the browser console (F12 → Console tab)
3. Run this snippet:
   ```js
   const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("your-new-password"))
     .then(b => Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2,"0")).join(""));
   console.log(hash);
   ```
4. Copy the resulting hash string
5. In `admin/auth.js`, replace the value of `ADMIN_HASH` with your hash

### 4. Add your photo

Place your profile photo at `Documents/profile.jpg` (or update the `photo` path in `config.js`).

### 5. Deploy

Push to GitHub. Your site will be live at `https://yourusername.github.io` within ~30 seconds.

---

## Using the Admin Panel

Navigate to `/admin/` on your live site (e.g. `https://yourusername.github.io/admin/`).

> **Note:** The admin panel requires a real web server. It will not work when opened as a local `file://` URL. Use `python -m http.server 8000` or `npx serve .` to test locally, then visit `http://localhost:8000/admin/`.

### First-time GitHub setup

The admin panel publishes directly to your GitHub repo via the GitHub API — no server required.

1. In the admin panel, go to the **GitHub / Publish** tab
2. Fill in:
   - **Repository** — `yourusername/yourusername.github.io`
   - **Personal Access Token** — [generate one here](https://github.com/settings/tokens/new?scopes=repo&description=Portfolio+Admin) with `repo` scope
   - **Branch** — `main`
   - **Config file path** — `config.js`
3. Click **Test connection** — you should see "Connected!"

Your token is stored only in your browser's `sessionStorage` for the current tab session. It is never written to disk or committed to your repo.

### Publishing changes

1. Log in, make your edits in any tab of the panel
2. Click **Publish to GitHub** (top bar or bottom bar)
3. The panel commits an updated `config.js` directly to your repo
4. GitHub Pages rebuilds — **your site is live in ~30 seconds**

---

## Configuration Reference

Everything lives in `config.js`. Here is a complete reference for every supported field.

### Personal info

```js
personal: {
  name:        "Your Full Name",
  nameLocal:   "Name in local script — e.g. বাংলা (optional)",
  title:       "PhD Student",
  institution: "Your University",
  department:  "Department of Computer Science",
  email:       "you@university.edu",
  photo:       "Documents/profile.jpg",   // path relative to site root
  photoAlt:    "Your Name",               // alt text for accessibility
}
```

### Social links

Set any field to `null` to hide it. Non-null values are shown as links in the hero section.

```js
social: {
  github:   "https://github.com/yourusername",
  scholar:  "https://scholar.google.com/citations?user=XXXX",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter:  "https://twitter.com/yourusername",
  dblp:     "https://dblp.org/pid/xx/xxxx.html",
  orcid:    "https://orcid.org/0000-0000-0000-0000",
}
```

### Navigation

Add, remove, or reorder nav links.

```js
nav: [
  { label: "Home",         href: "index.html"        },
  { label: "Publications", href: "publications.html" },
  { label: "Teaching",     href: "teaching.html"     },
  { label: "Services",     href: "services.html"     },
  { label: "CV",           href: "cv.html"           },
]
```

### About

```js
about: {
  // Each string is one paragraph. HTML tags like <strong> are allowed.
  bio: [
    "First paragraph of your bio.",
    "Second paragraph with <strong>bold text</strong> if needed.",
  ],
  // Shown as small tags below the bio text
  interests: [
    "Compiler Optimizations",
    "Program Analysis",
  ],
  // Shown as a dashed list under "Outside Research"
  hobbies: [
    "Reading books",
    "Long walks",
  ],
}
```

### News

```js
news: [
  {
    date:     "April 2025",                   // display string, shown in monospace
    text:     "Paper accepted at ECOOP 2025.",
    link:     "publication.html?id=gsohc",    // optional link
    linkText: "Read more →",                  // optional, defaults to "Read more →"
  },
]
```

### Publications

Each entry in the `publications` array supports these fields:

```js
{
  id:         "unique-slug",     // used in URL: publication.html?id=unique-slug
                                 // use lowercase letters, numbers, and hyphens only
  title:      "Full Paper Title",
  authors: [
    { name: "Your Name", self: true },   // self: true renders your name in bold
    { name: "Co-Author Name" },
    { name: "Another Author" },
  ],
  venue:      "Full Conference or Journal Name",
  venueShort: "CONF 2025",               // short label shown in cards and lists
  dates:      "1–5 June, 2025",          // optional conference date range
  year:       2025,                      // used for grouping in the publications list
  type:       "Conference Paper",        // one of:
                                         //   "Conference Paper" | "Journal Article"
                                         //   "Patent" | "Workshop Paper"
  coreRank:   "A*",                      // optional CORE rank badge; null to hide
  featured:   true,                      // true = show as a card on the home page

  // Awards for this paper — supports multiple, shown as 🏆 badges
  awards: [
    {
      title: "Best Paper Award",
      body:  "Awarded by the Programme Committee",   // optional description
      year:  2025,                                   // optional
    },
  ],

  // Full abstract text — use a blank line to create a new paragraph
  abstract: `First paragraph of the abstract.

Second paragraph of the abstract.`,

  // All resource paths are relative to the site root (your repo root)
  resources: {
    pdf:      "Publications/mypaper/paper.pdf",

    artifact: {
      url:       "https://doi.org/10.5281/zenodo.xxxxx",  // external DOI link
      badge:     "Functional / Reusable",                  // artifact badge text
      available: true,
    },

    audio:  "Publications/mypaper/summary.mp3",   // .mp3 or .wav; null to hide
    video:  "Publications/mypaper/talk.pdf",      // .pdf embeds inline
                                                  // .mp4 / .webm plays as video
                                                  // null to hide
    slides: "Publications/mypaper/slides.pdf",   // PDF embedded inline; null to hide
    code:   "https://github.com/you/repo",        // external URL; null to hide
  },

  // Shown in a copyable citation box at the bottom of the detail page
  citation: `Author, A., Author, B. (2025). Title. Proceedings of CONF 2025, pp. 1–20.`,

  detail: true,   // true  → generates a full detail page at publication.html?id=...
                  // false → listed in publications.html only, no detail page
}
```

#### Recommended folder layout for paper files

```
Publications/
└── your-paper-id/
    ├── paper.pdf
    ├── slides.pdf
    ├── summary.mp3
    └── presentation.mp4
```

#### Migrating old per-paper HTML pages

If you previously had individual HTML files per paper (e.g. `Publications/gsohc/gsohc.html`), add a redirect so old links still work:

```html
<!-- Publications/gsohc/gsohc.html -->
<script>window.location.replace("../../publication.html?id=gsohc");</script>
```

### Teaching

```js
teaching: [
  {
    course:      "CS3423: Compilers",
    role:        "Teaching Assistant",
    term:        "Spring 2024",
    institution: "IIT Hyderabad",
  },
]
```

### Academic Services

```js
services: [
  {
    role:        "Reviewer",
    type:        "Review",         // "Review" | "Committee" | "Volunteer"
                                   // "Organisation" | "Other"
    venue:       "PLDI 2025",
    venueFull:   "ACM SIGPLAN Conference on Programming Language Design and Implementation",
    year:        2025,
    description: null,             // optional free-text note
  },
]
```

### CV page

```js
cv: {
  pdfPath:  "Documents/cv.pdf",   // path to your CV PDF; null to hide download link
  embedPdf: true,                  // true = also embed the PDF inline on the page

  education: [
    {
      degree:      "PhD, Computer Science",
      institution: "IIT Hyderabad",
      period:      "2021 – present",
      details:     "Advised by Dr. Jyothi Vedurada",
    },
  ],

  experience: [
    {
      role:    "Research Intern",
      org:     "Some Lab, Some Institute",
      period:  "Summer 2023",
      details: "Worked on XYZ.",
    },
  ],

  // CV-level awards (separate from per-paper awards)
  awards: [
    {
      title: "Prime Minister's Research Fellowship",
      body:  "Government of India",
      year:  2021,
    },
  ],
}
```

### Footer

```js
footer: {
  text: "© Your Name. All rights reserved.",
  year: null,   // null = auto-fill current year; or set a fixed number e.g. 2025
}
```

---

## Adding a New Publication (step by step)

**Via the admin panel (recommended):**
1. Go to `/admin/` → **Publications** tab
2. Click **+ Add publication** and fill in all fields
3. Click **Publish to GitHub**

**Manually:**
1. Place your paper's files in the repo:
   ```
   Publications/
   └── mypaper/
       ├── paper.pdf
       └── slides.pdf
   ```
2. Add an entry to the `publications` array in `config.js`
3. Commit and push

The paper will automatically appear on the home page (if `featured: true`), the publications list, and its own detail page (if `detail: true`).

---

## Local Development

No build step needed — just run a local HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .
```

Then open:
- `http://localhost:8000` — the site
- `http://localhost:8000/admin/` — the admin panel

---

## Customisation

### Colours

All colours are CSS variables in `style.css`:

```css
:root {
  --bg:     #faf9f7;   /* page background        */
  --bg-alt: #f3f2ef;   /* subtle alternate bg     */
  --text:   #1c1c1a;   /* primary text            */
  --muted:  #6b6b68;   /* secondary / label text  */
  --faint:  #c4c3be;   /* borders, subtle dividers */
  --border: #e2e1dc;   /* card and section borders */
  --link:   #2a52a0;   /* hyperlink colour         */
}
```

### Fonts

Fonts are loaded from Google Fonts. The defaults are:

| Variable | Font | Used for |
|---|---|---|
| `--ff-serif` | [Spectral](https://fonts.google.com/specimen/Spectral) | Body text, headings |
| `--ff-sans` | [DM Sans](https://fonts.google.com/specimen/DM+Sans) | UI labels, nav, badges |
| `--ff-mono` | [DM Mono](https://fonts.google.com/specimen/DM+Mono) | Dates, code, citation box |

To change fonts, update the `@import` URL and the three `--ff-*` variables in `style.css`.

### Adding a new page

1. Copy `teaching.html` as a template
2. Change the `initPage("teaching.html")` call to `initPage("yourpage.html")`
3. Add the page to the `nav` array in `config.js`

---

## Security Notes

- **Password** — The admin password is verified client-side using SHA-256. This is appropriate for a personal static site — the worst a malicious actor could do is edit your `config.js`, which still requires your GitHub token.
- **GitHub Token** — Stored only in `sessionStorage` for the current browser session. Cleared automatically when the tab is closed. Never committed to the repo.
- **Token scope** — When generating your token, limit it to only the specific repository (under "Repository access → Only select repositories") for minimal blast radius.
- **Do not commit your token** — The token is entered in the browser, not stored in any file.

---

## Browser Support

All modern browsers — Chrome, Firefox, Safari, Edge. JavaScript must be enabled.

---

## License

MIT — free to use, modify, and redistribute. Attribution appreciated but not required.

---

*No frameworks. No build tools. No node_modules. Just files.*
