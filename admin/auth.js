/**
 * auth.js — Secure client-side admin authentication
 *
 * SECURITY MODEL:
 *   The password hash is NEVER stored in this file or in the repo.
 *   On first visit to /admin/, you are prompted to set a password.
 *   The SHA-256 hash is stored only in the browser's localStorage
 *   under the key "portfolio_admin_hash".
 *
 *   To reset your password: open browser DevTools → Application →
 *   Local Storage → delete "portfolio_admin_hash" → reload /admin/.
 */

const STORAGE_KEY = "portfolio_admin_hash";
const SESSION_KEY = "portfolio_admin_session";
const EXPIRES_KEY = "portfolio_admin_expires";
const SESSION_TTL = 2 * 60 * 60 * 1000; // 2 hours

async function hashPassword(password) {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(password)
  );
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

function hasPasswordSet() {
  return !!localStorage.getItem(STORAGE_KEY);
}

async function setPassword(password) {
  const hash = await hashPassword(password);
  localStorage.setItem(STORAGE_KEY, hash);
  return hash;
}

async function checkPassword(password) {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return false;
  const hash = await hashPassword(password);
  return hash === stored;
}

function isLoggedIn() {
  const session = sessionStorage.getItem(SESSION_KEY);
  const expires = sessionStorage.getItem(EXPIRES_KEY);
  const stored  = localStorage.getItem(STORAGE_KEY);
  if (!session || !expires || !stored) return false;
  if (Date.now() > parseInt(expires, 10)) {
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(EXPIRES_KEY);
    return false;
  }
  return session === stored;
}

function setSession() {
  const stored = localStorage.getItem(STORAGE_KEY);
  sessionStorage.setItem(SESSION_KEY, stored);
  sessionStorage.setItem(EXPIRES_KEY, Date.now() + SESSION_TTL);
}

function logout() {
  sessionStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(EXPIRES_KEY);
  window.location.href = "index.html";
}
