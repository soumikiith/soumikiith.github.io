/**
 * common.js — shared rendering helpers
 * Depends on: CONFIG (config.js)
 */

/* ── Navigation ─────────────────────────────────────────── */
function renderNav(activePage) {
  const nav = document.getElementById("site-nav");
  if (!nav) return;

  const logo = `<a class="nav-logo" href="index.html">${CONFIG.personal.name}</a>`;
  const links = CONFIG.nav.map(item => {
    const isActive = item.href === activePage;
    return `<a href="${item.href}" class="${isActive ? "active" : ""}">${item.label}</a>`;
  }).join("");

  nav.innerHTML = `
    <div class="nav-left">
      <span class="nav-watermark">Uii</span>
      ${logo}
    </div>
    <nav class="nav-links">${links}</nav>`;
}

/* ── Footer ─────────────────────────────────────────────── */
function renderFooter(isHome) {
  const footer = document.getElementById("site-footer");
  if (!footer) return;

  const year = CONFIG.footer.year || new Date().getFullYear();
  const text = CONFIG.footer.text.replace("©", `© ${year}`).replace(`© ${year} ${year}`, `© ${year}`);

  const socialLinks = Object.entries(CONFIG.social)
    .filter(([, url]) => url)
    .map(([key, url]) => `<a href="${url}" target="_blank" rel="noopener">${key}</a>`)
    .join("");

  const adminLink = isHome
    ? `<a href="admin/" class="footer-admin">admin</a>`
    : "";

  footer.innerHTML = `
    <div class="footer-inner">
      <span class="nav-watermark footer-watermark">Buii</span>
      <span class="footer-text">${text}</span>
      ${socialLinks ? `<div class="footer-social">${socialLinks}</div>` : ""}
      <a href="mailto:${CONFIG.personal.email}" class="footer-email">${CONFIG.personal.email}</a>
      ${adminLink}
    </div>
  `;
}

/* ── Authors ─────────────────────────────────────────────── */
function formatAuthors(authors) {
  return authors.map(a =>
    a.self ? `<strong>${a.name}</strong>` : a.name
  ).join(", ");
}

/* ── Publication type badge ──────────────────────────────── */
function typeBadge(pub) {
  const rank = pub.coreRank ? ` &middot; CORE ${pub.coreRank}` : "";
  return `<span class="pub-badge">${pub.type}${rank}</span>`;
}

/* ── Get publication by id ───────────────────────────────── */
function getPub(id) {
  return CONFIG.publications.find(p => p.id === id) || null;
}

/* ── URL query param helper ──────────────────────────────── */
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/* ── Init shared elements ────────────────────────────────── */
function initPage(activePage) {
  renderNav(activePage);
  renderFooter(activePage === "index.html");

  // Set page title
  const titleTag = document.querySelector("title");
  if (titleTag && !titleTag.dataset.custom) {
    titleTag.textContent = CONFIG.personal.name;
  }
}
