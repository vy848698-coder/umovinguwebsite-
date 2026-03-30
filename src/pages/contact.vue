<template>
  <div class="umu-page">
    <header class="umu-header">
      <div class="shell header-row">
        <a class="brand" href="/umoving" aria-label="umovingu home">
          <img src="/umoving.svg" alt="umovingu" />
          <span>umovingu</span>
        </a>

        <button
          class="menu-toggle"
          type="button"
          aria-label="Toggle menu"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <span />
          <span />
          <span />
        </button>

        <nav class="desktop-nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/#whynow">Why now?</a>
          <a href="/product">Product</a>
          <a href="/about">Our story</a>
          <a href="/contact">Contact</a>
        </nav>

        <a href="/contact" class="btn btn-small">GET EARLY ACCESS</a>
      </div>

      <nav v-if="menuOpen" class="mobile-nav" aria-label="Mobile navigation">
        <a href="/" @click="menuOpen = false">Home</a>
        <a href="/#whynow" @click="menuOpen = false">Why now?</a>
        <a href="/product" @click="menuOpen = false">Product</a>
        <a href="/about" @click="menuOpen = false">Our story</a>
        <a href="/contact" @click="menuOpen = false">Contact</a>
      </nav>
    </header>

    <main>
      <!-- Hero: Pick the path -->
      <section class="hero-section">
        <div class="shell">
          <p class="hero-eyebrow">EARLY ACCESS</p>
          <h1 class="hero-heading">
            <span class="hero-title-white">Pick the path that fits.</span>
            <br />
            <span class="hero-title-faded">We&rsquo;ll take it from there.</span>
          </h1>

          <div class="path-grid">
            <a href="mailto:hello@umovingu.io" class="path-card">
              <span class="path-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9 6 9-6"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
              </span>
              <h3>I own a home and want to know what&rsquo;s in it</h3>
              <p>Build your record before pressure starts.</p>
            </a>

            <a href="mailto:hello@umovingu.io" class="path-card">
              <span class="path-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              </span>
              <h3>I&rsquo;m selling soon or have already accepted an offer</h3>
              <p>Get sale ready with everything in one place.</p>
            </a>

            <a href="mailto:hello@umovingu.io" class="path-card">
              <span class="path-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </span>
              <h3>I&rsquo;m buying and want to know before I commit</h3>
              <p>See risks before surveys and fees.</p>
            </a>
          </div>
        </div>
      </section>

      <!-- Get in Touch -->
      <section class="touch-section">
        <div class="shell">
          <p class="touch-eyebrow">OTHER WAYS TO REACH US</p>
          <h2 class="touch-heading">Get in <em>touch</em></h2>
          <p class="touch-sub">Email, WhatsApp, or follow us on social media.</p>

          <div class="touch-grid">
            <div class="touch-card">
              <span class="touch-icon touch-icon-email">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </span>
              <h3>Email</h3>
              <p>Drop us an email anytime</p>
              <a href="mailto:hello@umovingu.io" class="touch-link">hello@umovingu.io &nearr;</a>
            </div>

            <div class="touch-card">
              <span class="touch-icon touch-icon-whatsapp">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </span>
              <h3>WhatsApp</h3>
              <p>Chat with us directly</p>
              <a href="https://wa.me/448001930647" target="_blank" rel="noopener noreferrer" class="touch-link touch-link-green">0800 193 0647 &nearr;</a>
            </div>

            <div class="touch-card">
              <span class="touch-icon touch-icon-social">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
              </span>
              <h3>Social media</h3>
              <p>Follow us and stay connected</p>
              <div class="touch-social-row">
                <a href="https://www.linkedin.com/company/umovingu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM6.831 20.452H3.823V9h3.008v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://www.youtube.com/@umovingu" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://www.instagram.com/umovingu" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@umovingu" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Questions CTA -->
      <section class="questions-section">
        <div class="shell">
          <h2 class="questions-heading">Questions before you apply?</h2>
          <p class="questions-sub">
            You can also join our WhatsApp community for updates and conversation with other homeowners.
          </p>
          <div class="questions-actions">
            <a href="https://whatsapp.com/channel/0029VbBX5LCIiRotkq7Uiw26" target="_blank" rel="noopener noreferrer" class="questions-btn-primary">Join our community</a>
            <a href="/umoving" class="questions-btn-secondary">Back to home</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="umu-footer">
      <div class="shell footer-grid">
        <div class="footer-brand-col">
          <div class="footer-brand-row">
            <img src="/umoving.svg" alt="umovingu" class="footer-logo" />
            <span class="footer-brand">umovingu</span>
          </div>
          <p class="footer-muted">
            The home record that<br />makes your sale ready<br />before it starts.
          </p>
          <p class="footer-infra-note">
            Professional infrastructure:<br />
            <a href="https://openproperty.io" target="_blank" rel="noopener noreferrer" class="footer-op-link">openproperty.io</a>
          </p>
          <a href="/contact" class="footer-access">Get early access &rarr;</a>
          <div class="footer-app">
            <p class="footer-app-label">DOWNLOAD THE APP</p>
            <a href="#" class="footer-store-badge" aria-label="Get it on Google Play">
              <svg width="135" height="40" viewBox="0 0 135 40" fill="none">
                <rect width="135" height="40" rx="5" fill="#000"/>
                <text x="67" y="14" text-anchor="middle" font-size="7" fill="#fff" font-family="sans-serif" letter-spacing="0.4">GET IT ON</text>
                <text x="72" y="28" text-anchor="middle" font-size="13" font-weight="600" fill="#fff" font-family="sans-serif">Google Play</text>
                <path d="M18 9l10 11-10 11V9z" fill="#34a853"/>
                <path d="M18 9l12 7-2 4L18 9z" fill="#fbbc04"/>
                <path d="M18 31l10-11 2 4-12 7z" fill="#ea4335"/>
                <path d="M18 9v22l-2-2V11l2-2z" fill="#4285f4"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <p class="footer-head">PRODUCT</p>
          <a href="/umoving#howitworks">How it works</a>
          <a href="/product">The Property Passport</a>
          <a href="/about">Our story</a>
          <a href="/about#founding30">The Founding 30</a>
          <a href="https://whatsapp.com/channel/0029VbBX5LCIiRotkq7Uiw26" target="_blank" rel="noopener noreferrer">WhatsApp community</a>
        </div>

        <div>
          <p class="footer-head">UNDERSTAND</p>
          <a href="/umoving#whynow">Why start now</a>
          <a href="/umoving#issues">What kills sales</a>
          <a href="/umoving#timeline">180 days vs 14 days</a>
          <a href="/umoving#issues">Lender eligibility issues</a>
          <a href="/umoving#buyerperspective">If you are buying</a>
        </div>

        <div>
          <p class="footer-head">CONNECT</p>
          <a href="/contact">Contact us</a>
          <a href="mailto:hello@umovingu.io">hello@umovingu.io</a>
          <a href="tel:08001930647">0800 193 0647</a>
          <div class="footer-social">
            <a href="https://www.linkedin.com/company/umovingu" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              LinkedIn
            </a>
            <a href="https://www.instagram.com/umovingu" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
              Instagram
            </a>
            <a href="https://www.tiktok.com/@umovingu" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/></svg>
              TikTok
            </a>
            <a href="https://www.youtube.com/@umovingu" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>
              YouTube
            </a>
          </div>
        </div>

        <div>
          <p class="footer-head">LEGAL</p>
          <a href="https://www.umovingu.io/privacy/" target="_blank" rel="noopener noreferrer">Privacy policy</a>
          <a href="https://www.umovingu.io/terms/" target="_blank" rel="noopener noreferrer">Terms of service</a>
          <a href="https://www.umovingu.io/cookies/" target="_blank" rel="noopener noreferrer">Cookie policy</a>
        </div>
      </div>

      <div class="shell footer-bottom">
        <p>&copy; 2025 umovingu Limited &middot; Company No. 13321548 &middot; Registered in England and Wales</p>
      </div>
    </footer>

    <div v-if="showCookies" class="cookie" role="dialog" aria-live="polite">
      <p>
        We use cookies to improve your experience. By continuing to browse, you
        agree to our use of cookies.
      </p>
      <div>
        <button class="btn btn-light btn-cookie" type="button" @click="showCookies = false">
          Decline
        </button>
        <button class="btn btn-cookie" type="button" @click="showCookies = false">
          Accept
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const menuOpen = ref(false)
const showCookies = ref(true)
</script>

<style scoped>
:global(html),
:global(body) {
  margin: 0;
  padding: 0;
}

.umu-page {
  --bg: #fafafa;
  --soft: #f4f5f6;
  --line: #e2e5ea;
  --ink: #1d2445;
  --muted: #4f5879;
  --accent: #00a19a;
  --accent-dark: #008a84;
  --dark: #1d2445;
  --dark-2: #2a335e;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  background: var(--bg);
  color: var(--ink);
  min-height: 100vh;
  overflow-x: clip;
}

.umu-page,
.umu-page * {
  box-sizing: border-box;
}

.umu-page img,
.umu-page video {
  max-width: 100%;
  height: auto;
}

.shell {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

/* ── Header ── */
.umu-header {
  position: sticky;
  top: 0;
  z-index: 40;
  border-bottom: 1px solid color-mix(in srgb, var(--line) 70%, transparent);
  background: color-mix(in srgb, #ffffff 90%, transparent);
  backdrop-filter: blur(10px);
}

.header-row {
  min-height: 72px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--ink);
  font-weight: 700;
  font-size: 2.12rem;
  line-height: 1;
}

.brand img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
}

.brand span {
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.6px;
}

.desktop-nav {
  margin-left: 162px;
  margin-right: auto;
  display: flex;
  gap: 0;
  align-items: center;
}

.desktop-nav a,
.mobile-nav a {
  position: relative;
  text-decoration: none;
  color: var(--muted);
  font-size: 0.95rem;
  font-weight: 600;
  padding: 9px 16px;
  transition: color 0.15s ease;
}

.desktop-nav a + a::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 20px;
  background: color-mix(in srgb, var(--line) 85%, #b8bec9);
}

.desktop-nav a.is-active {
  border-radius: 999px;
  background: #d8f2ef;
  color: var(--ink);
  box-shadow: inset 0 0 0 1px #4ad3c8;
}

.desktop-nav a:hover,
.desktop-nav a:focus-visible,
.mobile-nav a:hover,
.mobile-nav a:focus-visible {
  color: var(--ink);
}

.menu-toggle {
  margin-left: auto;
  width: 42px;
  height: 42px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: #ffffff;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
}

.menu-toggle span {
  width: 16px;
  height: 2px;
  background: var(--ink);
}

.mobile-nav {
  border-top: 1px solid var(--line);
  background: #ffffff;
  padding: 8px 16px 14px;
  display: grid;
  gap: 8px;
}

.mobile-nav a {
  padding: 10px 8px;
  border-radius: 8px;
}

.mobile-nav a::before {
  display: none;
}

.mobile-nav a:hover,
.mobile-nav a:focus-visible {
  background: #f2f6f8;
}

.btn {
  min-height: 46px;
  padding: 0 22px;
  border: 1px solid transparent;
  border-radius: 999px;
  color: #ffffff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: transform 0.14s ease, background-color 0.16s ease, box-shadow 0.16s ease;
  background-color: rgb(35 29 69);
}

.btn:hover,
.btn:focus-visible {
  background: var(--accent-dark);
  box-shadow: 0 10px 24px color-mix(in srgb, var(--accent-dark) 30%, transparent);
  transform: translateY(-1px);
}

.btn-light {
  background: #ffffff;
  color: var(--ink);
  border-color: var(--line);
}

.btn-light:hover,
.btn-light:focus-visible {
  background: #f2f6f8;
}

.btn-small {
  margin-left: 12px;
  min-height: 40px;
  padding: 0 28px;
  font-size: 0.88rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: #231d45;
}

.btn-small:hover,
.btn-small:focus-visible {
  background: #1b1534;
}

/* ── Hero Section ── */
.hero-section {
  background: linear-gradient(158deg, var(--dark) 0%, var(--dark-2) 100%);
  padding: clamp(3.5rem, 8vw, 6rem) 0 clamp(3rem, 6vw, 5rem);
  text-align: center;
}

.hero-eyebrow {
  margin: 0 0 20px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgb(255 255 255 / 0.5);
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
}

.hero-heading {
  margin: 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 500;
  font-size: clamp(2rem, 5.5vw, 3.4rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.hero-title-white {
  color: #ffffff;
}

.hero-title-faded {
  color: rgb(244 241 238 / 0.35);
}

/* ── Path Cards ── */
.path-grid {
  margin-top: clamp(28px, 4vw, 44px);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  text-align: left;
}

.path-card {
  display: block;
  background: rgb(255 255 255 / 0.07);
  border: 1px solid rgb(255 255 255 / 0.1);
  border-radius: 18px;
  padding: clamp(20px, 2.5vw, 28px);
  text-decoration: none;
  transition: background 0.15s ease;
}

.path-card:hover {
  background: rgb(255 255 255 / 0.12);
}

.path-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgb(255 255 255 / 0.1);
  color: #5ee6d6;
  margin-bottom: 18px;
}

.path-card h3 {
  margin: 0 0 8px;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: clamp(0.95rem, 1.5vw, 1.12rem);
  line-height: 1.35;
  color: #ffffff;
}

.path-card p {
  margin: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 18px;
  line-height: 1.625;
  color: rgb(255 255 255 / 0.65);
}

/* ── Get in Touch ── */
.touch-section {
  background: var(--bg);
  padding: clamp(3.5rem, 7vw, 6rem) 0;
  text-align: center;
}

.touch-eyebrow {
  margin: 0 0 16px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgb(35 29 69 / 0.45);
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
}

.touch-heading {
  margin: 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: clamp(1.8rem, 4.5vw, 2.8rem);
  line-height: 1.15;
  color: var(--ink);
}

.touch-heading em {
  color: var(--accent);
}

.touch-sub {
  margin: 12px 0 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 18px;
  line-height: 1.625;
  color: rgb(75 85 99 / 1);
}

.touch-grid {
  margin-top: clamp(28px, 4vw, 44px);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  text-align: center;
}

.touch-card {
  border: 1px solid #e2e0dc;
  border-radius: 20px;
  padding: clamp(24px, 3vw, 36px) clamp(16px, 2vw, 24px);
  background: #ffffff;
}

.touch-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  margin-bottom: 18px;
}

.touch-icon-email {
  background: #eef0f8;
  color: rgb(35 29 69 / 0.65);
}

.touch-icon-whatsapp {
  background: #e6f7f2;
  color: #0e9a5a;
}

.touch-icon-social {
  background: #eef0f8;
  color: rgb(35 29 69 / 0.65);
}

.touch-card h3 {
  margin: 0 0 6px;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: clamp(1.05rem, 1.6vw, 1.2rem);
  color: var(--ink);
}

.touch-card p {
  margin: 0 0 14px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 18px;
  line-height: 1.625;
  color: rgb(75 85 99 / 1);
}

.touch-link {
  display: inline-block;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--ink);
  text-decoration: none;
}

.touch-link:hover {
  text-decoration: underline;
}

.touch-link-green {
  color: var(--accent);
}

.touch-social-row {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 4px;
}

.touch-social-row a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #f0f0f0;
  color: rgb(35 29 69 / 0.55);
  text-decoration: none;
  transition: background 0.15s ease;
}

.touch-social-row a:hover {
  background: #e0e0e0;
  color: var(--ink);
}

/* ── Questions CTA ── */
.questions-section {
  background: linear-gradient(135deg, #00b4a0 0%, #00d4be 35%, #1ec8c8 65%, #00c4b4 100%);
  padding: clamp(3.5rem, 7vw, 5.5rem) 0;
  text-align: center;
}

.questions-heading {
  margin: 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: clamp(1.8rem, 4.5vw, 2.8rem);
  line-height: 1.15;
  color: #ffffff;
}

.questions-sub {
  margin: 14px auto 0;
  max-width: 520px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 18px;
  line-height: 1.625;
  color: rgb(255 255 255 / 0.65);
}

.questions-actions {
  margin-top: 28px;
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.questions-btn-primary,
.questions-btn-secondary {
  min-height: 50px;
  padding: 0 30px;
  border-radius: 999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 0.92rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease, transform 0.14s ease;
  cursor: pointer;
}

.questions-btn-primary {
  background: rgb(255 255 255 / 0.15);
  border: 1px solid rgb(255 255 255 / 0.3);
  color: #ffffff;
}

.questions-btn-primary:hover {
  background: rgb(255 255 255 / 0.22);
  transform: translateY(-1px);
}

.questions-btn-secondary {
  background: rgb(255 255 255 / 0.15);
  border: 1px solid rgb(255 255 255 / 0.3);
  color: #ffffff;
}

.questions-btn-secondary:hover {
  background: rgb(255 255 255 / 0.22);
  transform: translateY(-1px);
}

/* ── Footer ── */
.umu-footer {
  background: rgb(35 29 69);
  padding: clamp(40px, 6vw, 64px) 0 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr 0.8fr;
  gap: clamp(20px, 3vw, 40px);
}

.footer-brand-col {
  display: flex;
  flex-direction: column;
}

.footer-brand-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.footer-logo {
  width: 32px;
  height: 32px;
}

.footer-brand {
  margin: 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 700;
  font-size: clamp(1.3rem, 2.5vw, 1.7rem);
  color: #ffffff;
}

.footer-muted {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgb(255 255 255 / 0.45);
}

.footer-infra-note {
  margin: 14px 0 0;
  font-size: 0.82rem;
  line-height: 1.5;
  color: rgb(255 255 255 / 0.35);
}

.footer-op-link {
  display: inline !important;
  font-size: inherit !important;
  color: rgb(255 255 255 / 0.5) !important;
  text-decoration: underline !important;
}

.footer-op-link:hover {
  color: #ffffff !important;
}

.footer-access {
  display: inline-block;
  margin: 18px 0 20px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.footer-access:hover {
  color: rgb(255 255 255 / 0.7);
}

.footer-app {
  margin-top: auto;
  padding-top: 10px;
}

.footer-app-label {
  margin: 0 0 8px;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: rgb(255 255 255 / 0.35);
}

.footer-store-badge {
  display: inline-block !important;
  margin: 0 !important;
  line-height: 0;
}

.footer-store-badge svg {
  display: block;
}

.footer-head {
  margin: 0 0 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.7rem;
  color: rgb(255 255 255 / 0.4);
  font-weight: 700;
}

.umu-footer a {
  display: block;
  margin: 0 0 8px;
  text-decoration: none;
  color: rgb(255 255 255 / 0.7);
  font-size: 0.9rem;
  line-height: 1.4;
}

.umu-footer a:hover,
.umu-footer a:focus-visible {
  color: #ffffff;
}

.footer-social {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
}

.footer-social a {
  display: inline-flex !important;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem !important;
  font-weight: 400;
  color: rgb(255 255 255 / 0.7);
}

.footer-social a svg {
  flex-shrink: 0;
  opacity: 0.7;
}

.footer-social a:hover {
  color: #ffffff;
}

.footer-social a:hover svg {
  opacity: 1;
}

.footer-bottom {
  margin-top: clamp(20px, 3vw, 28px);
  padding: clamp(16px, 2vw, 22px) 0;
  text-align: center;
  border-top: 1px solid rgb(255 255 255 / 0.08);
}

.footer-bottom p {
  margin: 0;
  color: rgb(255 255 255 / 0.35);
  font-size: 0.82rem;
  line-height: 1.5;
}

.footer-bottom a {
  display: inline !important;
  color: rgb(255 255 255 / 0.5);
  text-decoration: underline;
}

/* ── Cookie ── */
.cookie {
  position: fixed;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  width: min(1020px, calc(100% - 20px));
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background: #ffffff;
  box-shadow: 0 14px 32px rgba(17, 24, 39, 0.14);
  z-index: 60;
}

.cookie p {
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;
}

.cookie > div {
  display: flex;
  gap: 8px;
}

.btn-cookie {
  min-height: 36px;
  padding: 0 14px;
  font-size: 0.88rem;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .desktop-nav,
  .btn-small {
    display: none;
  }

  .menu-toggle {
    display: inline-flex;
  }
}

@media (max-width: 760px) {
  .shell {
    width: calc(100% - 24px);
  }

  .path-grid,
  .touch-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 28px 20px;
  }

  .footer-brand-col {
    grid-column: 1 / -1;
  }

  .hero-heading {
    font-size: clamp(1.6rem, 8vw, 2.2rem);
  }

  .touch-heading,
  .questions-heading {
    font-size: clamp(1.5rem, 7vw, 2rem);
  }

  .cookie {
    left: 8px;
    right: 8px;
    bottom: 8px;
    width: auto;
    transform: none;
    flex-direction: column;
    text-align: center;
  }
}
</style>