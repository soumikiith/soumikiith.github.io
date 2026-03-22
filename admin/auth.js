/**
 * auth.js — Admin authentication
 *
 * HOW TO SET YOUR PASSWORD (one-time setup):
 * ------------------------------------------
 * 1. Open your browser console (F12 → Console)
 * 2. Paste and run:
 *      const h = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("your-password"))
 *        .then(b => Array.from(new Uint8Array(b)).map(x=>x.toString(16).padStart(2,"0")).join(""));
 *      console.log(h);
 * 3. Copy the hash it prints
 * 4. Replace ADMIN_HASH below with your hash
 * 5. Commit and push — done. Works on every computer automatically.
 *
 * Default password: admin123
 * (Replace ADMIN_HASH before going public!)
 */

// SHA-256 hash of the admin password.
// Default is "admin123" — replace with your own hash before deploying.
const ADMIN_HASH = "3babe351d12c0716b9ab5af1a8ea51332741fbe27bffa3d5b8e3ffd8b334903e";

const SESSION_KEY = "portfolio_admin_session";
const EXPIRES_KEY = "portfolio_admin_expires";
const SESSION_TTL = 2 * 60 * 60 * 1000; // 2 hours

async function hashPassword(password) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(password));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

async function checkPassword(password) {
  const hash = await hashPassword(password);
  return hash === ADMIN_HASH;
}

function isLoggedIn() {
  const session = sessionStorage.getItem(SESSION_KEY);
  const expires = sessionStorage.getItem(EXPIRES_KEY);
  if (!session || !expires) return false;
  if (Date.now() > parseInt(expires, 10)) {
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(EXPIRES_KEY);
    return false;
  }
  return session === ADMIN_HASH;
}

function setSession(hashOverride) {
  const h = hashOverride || ADMIN_HASH;
  sessionStorage.setItem(SESSION_KEY, h);
  sessionStorage.setItem(EXPIRES_KEY, Date.now() + SESSION_TTL);
}

function logout() {
  sessionStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(EXPIRES_KEY);
  window.location.href = "index.html";
}
