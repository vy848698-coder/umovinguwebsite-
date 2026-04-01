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
      <!-- ── Hero ── -->
      <section class="hero-section">
        <div class="shell">
          <p class="hero-eyebrow">THE PRODUCT</p>
          <h1 class="hero-heading">
            <span class="hero-white">Every document.</span><br />
            <span class="hero-white">Every check.</span><br />
            <span class="hero-faded">One place. Always ready.</span>
          </h1>
          <p class="hero-sub">
            The app that builds your home&rsquo;s complete record while you live in it,
            so when the time comes to sell, everything is already done. No scramble.
            No delays caused by your side. Just a sale that moves.
          </p>
        </div>
      </section>

      <!-- ── Founding 30 ── -->
      <section class="founding-section">
        <div class="shell founding-content">
          <h2 class="founding-heading">The Founding 30</h2>
          <p class="founding-subtitle">Thirty homeowners. Private access. Before anyone else.</p>
          <p class="founding-body">
            We are inviting 30 homeowners to use umovingu ahead of the public launch. The product is
            ready. What we want from the Founding 30 is honest experience &mdash; real homes, real
            documents, real feedback that makes what is already good even better. In return you get
            early access, a direct line to the founding team, and a Property Passport that is already
            working for you while everyone else is still waiting.
          </p>
          <div class="founding-actions">
            <a href="/about#founding30" class="founding-btn-primary">Learn about the Founding 30</a>
            <a href="/contact" class="founding-btn-secondary">Apply for early access</a>
          </div>
        </div>
      </section>

      <!-- ── Filing Cabinet ── -->
      <section class="vault-section">
        <div class="shell vault-grid">
          <div class="vault-copy reveal reveal-left">
            <p class="section-eyebrow">DOCUMENT VAULT</p>
            <h2 class="section-heading">
              The filing cabinet your home has always <em>wanted.</em>
            </h2>
            <p class="section-sub">
              Every certificate, every warranty, every piece of planning correspondence,
              uploaded once, organised automatically, accessible forever. Stop searching.
              Start knowing.
            </p>
            <ul class="check-list">
              <li>All property documents in one verified place</li>
              <li>Completeness checker shows exactly what is missing, and why it matters</li>
              <li>Invite fellow owners to contribute and upload together</li>
              <li>Expiry alerts so nothing lapses quietly while you are not watching</li>
            </ul>
          </div>

          <div class="vault-card reveal reveal-right">
            <div class="vault-table">
              <div class="vault-row vault-row-head">
                <span>CATEGORY</span>
                <span>% COMPLETE</span>
              </div>
              <div v-for="cat in categories" :key="cat.name" class="vault-row">
                <span class="vault-cat-name">{{ cat.name }}</span>
                <div class="vault-bar-wrap">
                  <div class="vault-bar" :style="{ width: cat.pct + '%', background: cat.color }" />
                </div>
                <span class="vault-pct">{{ cat.pct }}%</span>
              </div>
            </div>
            <p class="vault-footer-note">
              2 documents verified today &middot; Planning gap flagged, action recommended
            </p>
          </div>
        </div>
      </section>

      <!-- ── AI Checks ── -->
      <section class="checks-section">
        <div class="shell checks-grid">
          <div class="checks-table-wrap reveal reveal-left">
            <div class="checks-table">
              <div class="checks-row checks-row-head">
                <span>CHECK ITEM</span>
                <span>STATUS</span>
              </div>
              <div v-for="item in checkItems" :key="item.name" class="checks-row">
                <span class="checks-name" :class="'checks-name-' + item.cls">{{ item.name }}</span>
                <span class="checks-status" :class="'checks-' + item.cls">{{ item.status }}</span>
              </div>
            </div>
          </div>

          <div class="checks-copy reveal reveal-right">
            <p class="section-eyebrow">AI POWERED CHECKS</p>
            <h2 class="section-heading">
              Spots what you wouldn&rsquo;t think to look <em>for.</em>
            </h2>
            <p class="section-sub">
              AI reviews your documents for the things that most commonly cause sales
              to fail: expiry dates, missing sign offs, lender red flags, inconsistencies
              between records. It finds them while you still have time to fix them quietly.
            </p>
            <ul class="check-list accent-list">
              <li>Automated review of certificates, compliance records and title documents</li>
              <li>Flags missing building regs, planning gaps, short lease, nonstandard construction</li>
              <li>Tells you exactly what the issue is and the most common way to resolve it</li>
              <li>Cross-references documents to catch inconsistencies before a buyer&rsquo;s solicitor does</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ── Share Everything ── -->
      <section class="share-section">
        <div class="shell share-grid">
          <div class="share-copy reveal reveal-left">
            <p class="section-eyebrow">WHEN YOU ARE READY TO SELL</p>
            <h2 class="section-heading">
              Share everything. In one <em>tap.</em>
            </h2>
            <p class="section-sub">
              When your sale begins, umovingu becomes the single source of truth for every
              party. Solicitor. Estate agent. Buyer&rsquo;s solicitor. Everyone gets what they
              need from day one. No chasing. No waiting for your side.
            </p>
            <ul class="check-list accent-list">
              <li>Secure, time-limited sharing with any party, <strong>you control access</strong></li>
              <li>Real-time visibility so everyone always knows where things stand</li>
              <li>Revoke access at any time, your data never leaves without your permission</li>
              <li>Passes to the new owner on completion, their future sale is easier too</li>
            </ul>
          </div>

          <div class="share-timeline reveal reveal-right">
            <div v-for="(evt, i) in timeline" :key="i" class="tl-item" :class="{ 'tl-highlight': evt.highlight }">
              <div class="tl-dot" />
              <div class="tl-body">
                <p class="tl-title">{{ evt.title }}</p>
                <p class="tl-time">{{ evt.time }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Trusted Infrastructure ── -->
      <section class="infra-section">
        <div class="shell">
          <p class="section-eyebrow text-center">TRUSTED INFRASTRUCTURE</p>
          <h2 class="infra-heading">
            Built on the foundations the<br />property industry already <em>trusts.</em>
          </h2>
          <div class="infra-logos reveal">
            <div class="infra-row">
              <img src="/partner.png" alt="HM Land Registry" class="infra-logo" />
              <img src="/rics.png" alt="RICS" class="infra-logo" />
              <img src="/housing.png" alt="Ministry of Housing, Communities & Local Government" class="infra-logo" />
              <img src="/open-property.png" alt="Open Property Data Association" class="infra-logo" />
              <img src="/cfit.png" alt="CFIT" class="infra-logo" />
              <img src="/coventry.png" alt="Coventry University" class="infra-logo" />
              <img src="/wbs.png" alt="Warwick Business School" class="infra-logo" />
            </div>
            <div class="infra-row">
              <img src="/warwick.png" alt="University of Warwick" class="infra-logo" />
              <img src="/technology.png" alt="Department for Business, Innovation & Technology" class="infra-logo" />
              <a href="" target="_blank" rel="noopener noreferrer" class="infra-op-badge">OpenProperty</a>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Ready CTA ── -->
      <section class="ready-section">
        <div class="shell">
          <h2 class="ready-heading">Ready to know your home?</h2>
          <p class="ready-sub">
            Get started with umovingu today, free. It works quietly in the background,
            building your record, flagging what matters, and making sure that when the time
            comes, you are already ready.
          </p>
          <div class="ready-actions">
            <a href="/contact" class="ready-btn-primary">Get early access</a>
            <a href="/umoving#whynow" class="ready-btn-secondary">Why start now</a>
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
            The home record that makes<br />your sale ready before it starts.
          </p>
          <a href="/contact" class="footer-access">Get early access &rarr;</a>
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
          <p class="footer-head">PRODUCT &amp; COMPANY</p>
          <a href="/umoving#howitworks">How it works</a>
          <a href="/product">The Property Passport</a>
          <a href="/about">Our story</a>
          <a href="/about#founding30">The Founding 30</a>
          <a href="https://whatsapp.com/channel/0029VbBX5LCIiRotkq7Uiw26" target="_blank" rel="noopener noreferrer">WhatsApp community</a>
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
      </div>

      <div class="shell footer-bottom">
        <p>&copy; 2025 umovingu Limited &middot; Company No. 13321548 &middot; Registered in England and Wales</p>
        <p class="footer-bottom-links">
          <a href="https://www.umovingu.io/privacy/" target="_blank" rel="noopener noreferrer">Privacy policy</a>
          <span class="footer-dot">&middot;</span>
          <a href="https://www.umovingu.io/terms/" target="_blank" rel="noopener noreferrer">Terms of service</a>
          <span class="footer-dot">&middot;</span>
          <a href="https://www.umovingu.io/cookies/" target="_blank" rel="noopener noreferrer">Cookie policy</a>
        </p>
        <p class="footer-infra-note">Professional infrastructure: <a href="https://openproperty.io" target="_blank" rel="noopener noreferrer" class="footer-op-link">openproperty.io</a></p>
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
import { ref, onMounted } from 'vue'

const menuOpen = ref(false)
const showCookies = ref(true)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})

const categories = [
  { name: 'Title and ownership', pct: 92, color: '#00a19a' },
  { name: 'Certificates and compliance', pct: 78, color: '#f5a623' },
  { name: 'Planning and works', pct: 45, color: '#e8622c' },
  { name: 'Fixtures and fittings', pct: 18, color: '#e04848' },
]

const checkItems = [
  { name: 'Title register, ownership correct', status: 'Clear ✓', cls: 'clear' },
  { name: 'EPC, valid until 2031', status: 'Clear ✓', cls: 'clear' },
  { name: 'No adverse planning history', status: 'Clear ✓', cls: 'clear' },
  { name: 'Electrical cert, expires in 4 months', status: 'Action needed !', cls: 'action' },
  { name: '2019 extension, no building regs found', status: 'Flagged !', cls: 'flagged' },
  { name: 'Gas Safety record, current', status: 'Clear ✓', cls: 'clear' },
]

const timeline = [
  { title: 'Home record shared with Clarke and Co Solicitors', time: 'Just now', highlight: false },
  { title: 'Buyer\'s solicitor viewed all documents', time: '12 min ago', highlight: false },
  { title: 'No enquiries raised, all documents clear', time: 'Day 3', highlight: false },
  { title: 'Mortgage offer received', time: 'Day 7', highlight: false },
  { title: 'Exchange confirmed. Completion: Friday.', time: 'Day 11, because everything was ready before the sale began', highlight: true },
]


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
  height: 48px;
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

/* ── Hero ── */
.hero-section {
  background: linear-gradient(158deg, var(--dark) 0%, var(--dark-2) 100%);
  padding: clamp(4rem, 10vw, 7rem) 0 clamp(3.5rem, 7vw, 5.5rem);
  text-align: center;
}

.hero-eyebrow {
  margin: 0 0 20px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgb(255 255 255 / 0.5);
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
}

.hero-heading {
  margin: 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 700;
  font-size: clamp(2.2rem, 6vw, 4rem);
  
}

.hero-white {
  color: #ffffff;
}

.hero-faded {
  color: rgb(244 241 238 / 0.35);
}

.hero-sub {
  margin: 20px auto 0;
  max-width: 672px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(0.9rem, 1.4vw, 1.02rem);
  line-height: 28px;
  color: rgb(255 255 255 / 0.5);
}

/* ── Founding 30 ── */
.founding-section {
  background: #ffffff;
  padding: clamp(4rem, 8vw, 7rem) 0;
  text-align: center;
}

.founding-content {
  max-width: 720px;
  margin: 0 auto;
}

.founding-heading {
  margin: 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 72px);
  line-height: 1;
  color: var(--ink);
}

.founding-subtitle {
  margin: 18px 0 0;
  font-family: 'Plus Jakarta Sans', 'SFMono-Regular', ui-monospace, sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.5;
  color: var(--ink);
}

.founding-body {
  margin: 14px auto 0;
  max-width: 640px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(0.88rem, 1.3vw, 0.98rem);
  line-height: 1.65;
  color: rgb(35 29 69 / 0.7);
}

.founding-actions {
  margin-top: 28px;
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.founding-btn-primary,
.founding-btn-secondary {
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
  transition: background 0.15s ease, transform 0.14s ease, box-shadow 0.15s ease;
  cursor: pointer;
}

.founding-btn-primary {
  background: var(--dark);
  color: #ffffff;
  border: none;
}

.founding-btn-primary:hover {
  background: #1b1534;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgb(29 36 69 / 0.2);
}

.founding-btn-secondary {
  background: #ffffff;
  color: var(--ink);
  border: 1px solid var(--line);
}

.founding-btn-secondary:hover {
  background: #f2f6f8;
  transform: translateY(-1px);
}

/* ── Shared Section Typography ── */
.section-eyebrow {
  margin: 0 0 16px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgb(0 161 154 / 1);
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
}

.section-heading {
  margin: 0;
  font-family: 'Instrument Serif', ui-monospace, serif;
  font-weight: 700;
  font-size: clamp(1.7rem, 4vw, 2.6rem);
  line-height: 1;
  color: rgb(35 29 69 / var(--tw-text-opacity, 1)); 
}

/* .section-heading em {
} */

.section-sub {
  margin: 14px 0 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(0.88rem, 1.3vw, 0.98rem);
  line-height: 1.65;
  color: rgb(35 29 69 / 0.7);
}

.text-center {
  text-align: center;
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 24px 0 0;
}

.check-list li {
  position: relative;
  padding-left: 26px;
  margin-bottom: 12px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.92rem;
  line-height: 1.55;
  color: rgb(35 29 69 / 0.85);
}

.check-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  top: 0;
  font-weight: 700;
  color: var(--accent);
}

.accent-list li::before {
  content: "✓";
  color: var(--accent);
}

/* ── Vault (Filing Cabinet) ── */
.vault-section {
  padding: clamp(4rem, 8vw, 7rem) 0;
  background: var(--bg);
}

.vault-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(28px, 4vw, 56px);
  align-items: center;
}

.vault-card {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: clamp(20px, 2.5vw, 28px);
  box-shadow: 0 2px 12px rgb(0 0 0 / 0.04);
}

.vault-table {
  display: grid;
  gap: 0;
}

.vault-row {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgb(226 229 234 / 0.6);
}

.vault-row:last-child {
  border-bottom: none;
}

.vault-row-head {
  padding-bottom: 8px;
}

.vault-row-head span {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgb(35 29 69 / 0.35);
}

.vault-cat-name {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--ink);
}

.vault-bar-wrap {
  height: 8px;
  background: rgb(226 229 234 / 0.5);
  border-radius: 99px;
  overflow: hidden;
}

.vault-bar {
  height: 100%;
  border-radius: 99px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.vault-card.active .vault-bar {
  transform: scaleX(1);
}

.vault-row:nth-child(2) .vault-bar { transition-delay: 0s; }
.vault-row:nth-child(3) .vault-bar { transition-delay: 0.12s; }
.vault-row:nth-child(4) .vault-bar { transition-delay: 0.24s; }
.vault-row:nth-child(5) .vault-bar { transition-delay: 0.36s; }

.vault-pct {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--ink);
  text-align: right;
  min-width: 36px;
}

.vault-footer-note {
  margin: 16px 0 0;
  padding-top: 12px;
  border-top: 1px solid rgb(226 229 234 / 0.6);
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.78rem;
  color: rgb(35 29 69 / 0.45);
}

/* ── Checks (AI) ── */
.checks-section {
  padding: clamp(4rem, 8vw, 7rem) 0;
  background: var(--soft);
}

.checks-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(28px, 4vw, 56px);
  align-items: center;
}

.checks-table {
  background: var(--dark);
  border: 1px solid rgb(255 255 255 / 0.08);
  border-radius: 18px;
  padding: clamp(16px, 2vw, 24px);
  box-shadow: 0 8px 32px rgb(0 0 0 / 0.25);
}

.checks-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgb(255 255 255 / 0.08);
  gap: 12px;
}

.checks-row:last-child {
  border-bottom: none;
}

.checks-row-head {
  padding-bottom: 8px;
}

.checks-row-head span {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgb(255 255 255 / 0.4);
}

.checks-name {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.88rem;
  color: rgb(255 255 255 / 0.9);
}

.checks-name-action {
  color: #fbbf24;
}

.checks-name-flagged {
  color: #f87171;
}

.checks-status {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  white-space: nowrap;
  padding: 4px 12px;
  border-radius: 99px;
}

.checks-clear {
  background: rgb(16 185 129 / 0.15);
  color: #34d399;
}

.checks-action {
  background: rgb(251 191 36 / 0.15);
  color: #fbbf24;
}

.checks-flagged {
  background: rgb(248 113 113 / 0.15);
  color: #f87171;
}

/* ── Share Everything ── */
.share-section {
  padding: clamp(4rem, 8vw, 7rem) 0;
  background: var(--bg);
}

.share-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(28px, 4vw, 56px);
  align-items: center;
}

.share-timeline {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: clamp(20px, 2.5vw, 28px);
  box-shadow: 0 2px 12px rgb(0 0 0 / 0.04);
}

.tl-item {
  display: flex;
  gap: 14px;
  padding: 14px 0;
  border-bottom: 1px solid rgb(226 229 234 / 0.5);
}

.tl-item:last-child {
  border-bottom: none;
}

.tl-dot {
  flex-shrink: 0;
  width: 10px;
  height: 10px;
  margin-top: 5px;
  border-radius: 50%;
  background: var(--accent);
}

.tl-highlight {
  background: rgb(220 244 237);
  border-radius: 10px;
  padding: 18px 14px;
  border-bottom: none;
  margin-top: 4px;
  border-left: 3px solid var(--accent);
}

.tl-highlight .tl-dot {
  display: none;
}

.tl-title {
  margin: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.4;
}

.tl-highlight .tl-title {
  color: var(--ink);
  font-family: 'Instrument Serif', serif;
  font-weight: 700;
  font-size: 1.15rem;
}

.tl-highlight .tl-time {
  color: rgb(35 29 69 / 0.5);
}

.tl-time {
  margin: 2px 0 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.78rem;
  color: rgb(35 29 69 / 0.4);
}

/* ── Infrastructure ── */
.infra-section {
  padding: clamp(4rem, 8vw, 7rem) 0;
  background: #ffffff;
  text-align: center;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.infra-heading {
  margin: 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: clamp(1.7rem, 4vw, 2.6rem);
  line-height: 1.15;
  color: var(--ink);
}

.infra-heading em {
  font-style: italic;
}

.infra-logos {
  margin-top: clamp(32px, 4vw, 48px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(28px, 4vw, 44px);
}

.infra-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: clamp(20px, 3.5vw, 40px);
}

.infra-logo {
  height: 36px;
  width: auto;
  object-fit: contain;
  filter: grayscale(30%);
  transition: opacity 0.2s ease, filter 0.2s ease;
}

.infra-row:last-child .infra-logo {
  height: 42px;
}

.infra-logo:hover {
  opacity: 1;
  filter: grayscale(0%);
}

.infra-op-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 28px;
  border: 1.5px solid var(--accent);
  border-radius: 8px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--ink);
  text-decoration: none;
  letter-spacing: -0.2px;
  transition: background 0.15s ease, border-color 0.15s ease;
}

.infra-op-badge:hover {
  background: rgb(0 161 154 / 0.06);
  border-color: var(--accent-dark);
}

/* ── Ready CTA ── */
.ready-section {
  background: linear-gradient(135deg, #00b4a6 0%, #00c9b8 30%, #2dd4bf 60%, #5eead4 100%);
  padding: clamp(5rem, 10vw, 8rem) 0;
  text-align: center;
}

.ready-heading {
  margin: 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.15;
  color: #ffffff;
}

.ready-sub {
  margin: 16px auto 0;
  max-width: 600px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(0.9rem, 1.4vw, 1.05rem);
  line-height: 1.65;
  color: rgb(255 255 255 / 0.85);
}

.ready-actions {
  margin-top: 28px;
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.ready-btn-primary,
.ready-btn-secondary {
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

.ready-btn-primary {
  background: rgb(30 60 55 / 0.65);
  color: #ffffff;
  border: none;
  backdrop-filter: blur(4px);
}

.ready-btn-primary:hover {
  background: rgb(30 60 55 / 0.85);
  transform: translateY(-1px);
}

.ready-btn-secondary {
  background: rgb(255 255 255 / 0.12);
  border: 1px solid rgb(255 255 255 / 0.45);
  color: #ffffff;
  backdrop-filter: blur(4px);
}

.ready-btn-secondary:hover {
  background: rgb(255 255 255 / 0.25);
  transform: translateY(-1px);
}

/* ── Footer ── */
.umu-footer {
  background: rgb(35 29 69);
  padding: clamp(48px, 6vw, 72px) 0 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
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
  margin-bottom: 16px;
}

.footer-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.footer-brand {
  margin: 0;
  font-family: 'SF Pro Display', -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #ffffff;
  letter-spacing: -0.3px;
}

.footer-muted {
  margin: 0 0 16px;
  font-size: 0.9rem;
  line-height: 1.55;
  color: rgb(255 255 255 / 0.45);
}

.footer-access {
  display: inline-block;
  margin: 14px 0 24px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.footer-access:hover {
  color: rgb(255 255 255 / 0.7);
}

.footer-head {
  margin: 0 0 14px;
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
  gap: 6px;
  margin-top: 12px;
}

.footer-social a {
  display: inline-flex !important;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem !important;
  font-weight: 500;
  color: rgb(255 255 255 / 0.7);
}

.footer-social a svg {
  flex-shrink: 0;
  opacity: 0.6;
}

.footer-social a:hover {
  color: #ffffff;
}

.footer-social a:hover svg {
  opacity: 1;
}

.footer-bottom {
  margin-top: clamp(32px, 4vw, 48px);
  padding: clamp(16px, 2vw, 22px) 0;
  border-top: 1px solid rgb(255 255 255 / 0.08);
  text-align: center;
}

.footer-bottom p {
  margin: 0;
  color: rgb(255 255 255 / 0.3);
  font-size: 0.82rem;
  line-height: 1.5;
}

.footer-bottom-links {
  margin: 6px 0 !important;
}

.footer-bottom-links a {
  display: inline !important;
  color: rgb(255 255 255 / 0.5);
  text-decoration: none;
  font-size: 0.82rem;
}

.footer-bottom-links a:hover {
  color: #ffffff;
  text-decoration: underline;
}

.footer-dot {
  color: rgb(255 255 255 / 0.3);
  margin: 0 4px;
}

.footer-bottom .footer-infra-note {
  margin: 6px 0 0;
  font-size: 0.82rem;
  line-height: 1.5;
  color: rgb(255 255 255 / 0.35);
}

.footer-bottom .footer-op-link {
  display: inline !important;
  font-size: inherit !important;
  color: rgb(255 255 255 / 0.5) !important;
  text-decoration: none !important;
}

.footer-bottom .footer-op-link:hover {
  color: #ffffff !important;
}

.footer-bottom a {
  display: inline !important;
  color: rgb(255 255 255 / 0.4);
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

/* ── Scroll Reveal Animations ── */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.reveal-left {
  transform: translateX(-50px);
}

.reveal.reveal-right {
  transform: translateX(50px);
}

.reveal.active {
  opacity: 1;
  transform: none;
}

/* Stagger delay for side-by-side pairs */
.vault-card.reveal,
.checks-copy.reveal,
.share-timeline.reveal {
  transition-delay: 0.15s;
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

  .vault-grid,
  .checks-grid,
  .share-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 28px 20px;
  }

  .footer-brand-col {
    grid-column: 1 / -1;
  }

  .checks-grid .checks-table-wrap {
    order: 2;
  }

  .checks-grid .checks-copy {
    order: 1;
  }

  .hero-heading {
    font-size: clamp(1.8rem, 8vw, 2.4rem);
  }

  .section-heading,
  .infra-heading {
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  .founding-heading {
    font-size: clamp(1.5rem, 7vw, 2.2rem);
  }

  .ready-heading {
    font-size: clamp(1.5rem, 7vw, 2.2rem);
  }

  .footer-social {
    gap: 8px;
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
