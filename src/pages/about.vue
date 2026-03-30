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
          <p class="hero-eyebrow">OUR STORY</p>
          <h1 class="hero-heading">
            <span class="hero-white">30 years watching</span><br />
            <span class="hero-white">the system fail people.</span><br />
            <span class="hero-faded">Then deciding to fix it.</span>
          </h1>
          <p class="hero-sub">
            Maxine Wilson spent three decades inside the UK property industry.
            She watched sales collapse at the worst possible moments, not because
            of bad people or bad luck, but because of a system that was never built
            to help. That is why umovingu exists.
          </p>
        </div>
      </section>

      <!-- ── Bio / Quote ── -->
      <section class="bio-section">
        <div class="shell bio-grid">
          <div class="bio-profile">
            <img
              src="/profile.png"
              alt="Maxine Wilson, Founder of umovingu"
              class="bio-avatar"
              width="260"
              height="260"
            />
            <p class="bio-name">Maxine Wilson</p>
            <p class="bio-role">Founder, umovingu</p>
          </div>

          <div class="bio-copy">
            <blockquote class="bio-quote">
              &ldquo;I have watched people, excited, happy, at one of the best moments
              of their lives, have everything fall apart. Not because the market moved.
              Not because something catastrophic happened. Because a certificate was missing.
              That should not be possible.&rdquo;
            </blockquote>

            <p>
              After more than 30 years in the property sector, Maxine had seen every
              version of how a sale could fail. Missing building regulations from a 2009
              extension nobody thought to check. An electrical certificate that had quietly
              lapsed. A boundary on the title register that did not match the fence that had
              stood there for forty years. Issues that were entirely fixable, if anyone had
              found them before the sale began.
            </p>

            <p>
              She watched estate agents, whose real job is to sell, dragged deep into the
              conveyancing process because no platform existed to connect all the parties.
              She watched solicitors raise enquiries that took three months to answer, on
              issues that could have been resolved in a week if someone had looked six months
              earlier. She saw the same delays, the same stress, the same wasted money, sale
              after sale, year after year.
            </p>

            <p>
              After exiting her last business, she asked one question: what if every homeowner
              could see what was coming before any offer was ever accepted? What if the record
              already existed? What if nobody ever had to start from scratch again? That question
              became umovingu. And that is still the only thing we are trying to answer.
            </p>
          </div>
        </div>
      </section>

      <!-- ── Principles ── -->
      <section class="principles-section">
        <div class="shell">
          <p class="section-eyebrow text-center">WHAT WE BELIEVE</p>
          <h2 class="principles-heading">
            The principles behind<br />everything we <em>build.</em>
          </h2>

          <div class="principles-grid">
            <div class="principle-card">
              <h3>The delay is not inevitable</h3>
              <p>
                The property process takes 22 weeks because the information does not exist
                in one place. We believe that if the information existed, the wait would not.
                That is the only problem we are solving.
              </p>
            </div>
            <div class="principle-card">
              <h3>Knowing is always better than not knowing</h3>
              <p>
                Whether you are selling or buying, the uncertainty of not knowing what is in
                a property&rsquo;s history is worse than any individual problem you might discover.
                Knowing gives you options. Not knowing takes them away.
              </p>
            </div>
            <div class="principle-card">
              <h3>Your data belongs to you</h3>
              <p>
                Your umovingu record. Your control. You decide who sees it, when, and for how
                long. Your information does not move without your permission, ever.
              </p>
            </div>
            <div class="principle-card">
              <h3>The record should outlast the owner</h3>
              <p>
                A property&rsquo;s history should not disappear every time it changes hands.
                When you sell, your umovingu record passes to the new owner. Their future sale
                is easier. The system improves with every transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Founding 30 ── -->
      <section class="founding-section">
        <div class="shell">
          <p class="section-eyebrow text-center">THE FOUNDING 30</p>
          <h2 class="founding-heading">
            30 people to help us<br />build this <em>right.</em>
          </h2>
          <p class="founding-sub">
            We are inviting 30 homeowners to use umovingu before anyone else. Not to test it,
            to shape it. Your home&rsquo;s real issues, your real experience of the process,
            will make the product better for everyone who comes after you.
          </p>

          <div class="benefits-grid">
            <div class="benefit-card">
              <span class="benefit-num">01</span>
              <h3>Early access</h3>
              <p>Use the app before anyone else.</p>
            </div>
            <div class="benefit-card">
              <span class="benefit-num">02</span>
              <h3>Direct influence</h3>
              <p>Your feedback shapes what we build next.</p>
            </div>
            <div class="benefit-card">
              <span class="benefit-num">03</span>
              <h3>Private channel</h3>
              <p>Direct line to the founding team.</p>
            </div>
          </div>

          <!-- Steps -->
          <div class="steps-wrap">
            <div v-for="(step, i) in steps" :key="i" class="step-row">
              <span class="step-num">{{ i + 1 }}</span>
              <div class="step-body">
                <h4>{{ step.title }}</h4>
                <p>{{ step.desc }}</p>
              </div>
            </div>

            <div class="steps-cta">
              <a href="/contact" class="btn steps-btn">GET EARLY ACCESS &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Dark CTA ── -->
      <section class="movement-section">
        <div class="shell">
          <h2 class="movement-heading">
            We are not tweaking a broken system. We are <em>replacing it.</em>
          </h2>
          <p class="movement-sub">
            One where a property sale does not mean months of waiting and uncertainty. One
            where the information exists before anyone asks for it. One where neither side
            ever has to start from scratch.
          </p>
          <a href="/contact" class="btn movement-btn">JOIN THE MOVEMENT &rarr;</a>
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

const steps = [
  {
    title: 'Apply via the contact form',
    desc: 'Tell us your situation: buying, selling, or just being a homeowner who wants to know what is actually in their property\u2019s record.',
  },
  {
    title: 'Short conversation',
    desc: 'A quick call so we understand your home and can make sure early access will be genuinely useful to you.',
  },
  {
    title: 'Onboarding link sent',
    desc: 'Setup takes under five minutes. umovingu starts building your record immediately.',
  },
  {
    title: 'You are in: your home is protected',
    desc: 'Use the app, tell us what you find, give us honest feedback. Help us build something that works for real homes.',
  },
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

/* ── Shared ── */
.section-eyebrow {
  margin: 0 0 16px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 4.2px;
    text-transform: uppercase;
    color: rgb(0 161 154 / 0.8);
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    line-height: 20px;
}

.text-center {
  text-align: center;
}

/* ── Hero ── */
.hero-section {
  background: linear-gradient(158deg, var(--dark) 0%, var(--dark-2) 100%);
  padding: clamp(4rem, 10vw, 7rem) 0 clamp(3.5rem, 7vw, 5.5rem);
  text-align: center;
}

.hero-eyebrow {
  margin: 0 0 20px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgb(255 255 255 / 0.5);
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
}

.hero-heading {
  margin: 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: clamp(2.2rem, 6vw, 3.8rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.hero-white {
  color: #ffffff;
}

.hero-faded {
  color: rgb(244 241 238 / 0.35);
  font-style: italic;
}

.hero-sub {
  margin: 22px auto 0;
  max-width: 560px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(0.9rem, 1.4vw, 1.02rem);
  line-height: 1.65;
  color: rgb(255 255 255 / 0.5);
}

/* ── Bio ── */
.bio-section {
  padding: clamp(4rem, 8vw, 7rem) 0;
  background: var(--bg);
}

.bio-grid {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: start;
}

.bio-profile {
  text-align: center;
  position: sticky;
  top: 100px;
}

.bio-avatar {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto 16px;
}

.bio-name {
  margin: 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  color: var(--ink);
}

.bio-role {
  margin: 4px 0 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  color: var(--accent);
  font-weight: 400;
  letter-spacing: 0.4px;
}

.bio-copy {
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.bio-quote {
  margin: 0 0 28px;
  padding: 0 0 0 24px;
  border-left: 4px solid var(--accent);
  font-family: 'Instrument Serif', serif;
  font-size: clamp(25px, 1.8vw, 1.3rem);
  line-height: 36px;
  color: var(--ink);
  font-style:italic;
}

.bio-copy p {
  margin: 0 0 18px;
  font-size: 18px;
  line-height: 1.625;
   color: rgb(75 85 99 / 1);
}

/* ── Principles ── */
.principles-section {
  padding: clamp(4rem, 8vw, 7rem) 0;
  background: var(--soft);
  text-align: center;
}

.principles-heading {
  margin: 0 0 clamp(28px, 4vw, 44px);
  font-family: 'Instrument Serif', serif;
  font-weight: 700;
  font-size: clamp(70px, 4.5vw, 2.8rem);
  line-height: 1;
  color: var(--ink);
  letter-spacing: -1.8px;
}

.principles-heading em {
  font-style: italic;
}

.principles-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  text-align: left;
}

.principle-card {
  background: #ffffff;
  border: 1px solid rgb(226 229 234 / 0.6);
  border-radius: 18px;
  padding: clamp(28px, 3vw, 40px);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.3s ease;
  cursor: default;
}

.principle-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 48px rgb(29 36 69 / 0.10), 0 8px 20px rgb(29 36 69 / 0.06);
  border-color: rgb(0 161 154 / 0.25);
}

.principle-card h3 {
  margin: 0 0 12px;
  font-family: 'Instrument Serif', serif;
  font-weight: 700;
  font-size: clamp(1.15rem, 1.8vw, 1.35rem);
  color: var(--ink);
  transition: color 0.25s ease;
}

.principle-card:hover h3 {
  color: var(--accent);
}

.principle-card p {
  margin: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 18px;
  line-height: 1.625;
  color: rgb(75 85 99 / 1);
}

/* ── Founding 30 ── */
.founding-section {
  padding: clamp(4rem, 8vw, 7rem) 0;
  background: var(--bg);
  text-align: center;
}

.founding-heading {
  margin: 0 0 clamp(28px, 4vw, 44px);
  font-family: 'Instrument Serif', serif;
  font-weight: 700;
  font-size: clamp(70px, 4.5vw, 2.8rem);
  line-height: 1;
  color: var(--ink);
  letter-spacing: -1.8px;
}

.founding-heading em {
  font-style: italic;
}

.founding-sub {
  margin: 0 auto 0;
  max-width: 580px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 18px;
  line-height: 1.625;
  color: rgb(75 85 99 / 1);
}

.benefits-grid {
  margin-top: clamp(28px, 4vw, 44px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  text-align: center;
}

.benefit-card {
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: clamp(24px, 3vw, 36px) clamp(16px, 2vw, 24px);
  background: #ffffff;
}

.benefit-num {
  display: block;
  font-family: 'Instrument Serif', serif;
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 400;
  color: rgb(0 161 154 / 0.5);
  line-height: 1;
  margin-bottom: 12px;
}

.benefit-card h3 {
  margin: 0 0 8px;
  font-family: 'Instrument Serif', serif;
  font-weight: 700;
  font-size: clamp(20px, 1.4vw, 1.15rem);
  line-height: 28px;
  color: var(--ink);
}

.benefit-card p {
  margin: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 18px;
  line-height: 1.625;
  color: rgb(75 85 99 / 1);
}

/* Steps */
.steps-wrap {
  margin-top: clamp(36px, 5vw, 56px);
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}

.step-row {
  display: flex;
  gap: 18px;
  align-items: flex-start;
  padding: 20px 0;
  border-bottom: 1px solid rgb(226 229 234 / 0.6);
}

.step-row:last-of-type {
  border-bottom: none;
}

.step-num {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--dark);
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
}

.step-body h4 {
  margin: 0 0 4px;
  font-family: 'Instrument Serif', serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: var(--ink);
}

.step-body p {
  margin: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 18px;
  line-height: 1.625;
  color: rgb(75 85 99 / 1);
}

.steps-cta {
  margin-top: 32px;
  text-align: center;
}

.steps-btn {
  min-height: 52px;
  padding: 0 34px;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: var(--dark);
}

.steps-btn:hover,
.steps-btn:focus-visible {
  background: var(--accent-dark);
}

/* ── Movement CTA ── */
.movement-section {
  background: linear-gradient(158deg, var(--dark) 0%, var(--dark-2) 100%);
  padding: clamp(4rem, 8vw, 6.5rem) 0;
  text-align: center;
}

.movement-heading {
  margin: 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: clamp(1.8rem, 4.5vw, 2.8rem);
  line-height: 1.15;
  color: #ffffff;
}

.movement-heading em {
  font-style: italic;
  color: rgb(244 241 238 / 0.35);
}

.movement-sub {
  margin: 16px auto 0;
  max-width: 580px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 18px;
  line-height: 1.625;
  color: rgb(255 255 255 / 0.65);
}

.movement-btn {
  margin-top: 28px;
  min-height: 52px;
  padding: 0 34px;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: var(--accent);
}

.movement-btn:hover,
.movement-btn:focus-visible {
  background: var(--accent-dark);
}

/* ── Footer ── */
.umu-footer {
  background: rgb(35 29 69);
  padding: clamp(48px, 6vw, 72px) 0 0;
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

.footer-infra-note {
  margin: 0 0 4px;
  font-size: 0.82rem;
  line-height: 1.5;
  color: rgb(255 255 255 / 0.35);
}

.footer-op-link {
  color: rgb(255 255 255 / 0.6) !important;
  text-decoration: underline !important;
  text-underline-offset: 3px;
  font-size: 0.82rem !important;
}

.footer-op-link:hover {
  color: #ffffff !important;
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

.footer-app {
  margin-top: auto;
}

.footer-app-label {
  margin: 0 0 10px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgb(255 255 255 / 0.35);
}

.footer-store-badge {
  display: inline-block !important;
  margin: 0 !important;
  transition: opacity 0.15s ease;
}

.footer-store-badge:hover {
  opacity: 0.8;
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
  text-align: left;
}

.footer-bottom p {
  margin: 0;
  color: rgb(255 255 255 / 0.3);
  font-size: 0.82rem;
  line-height: 1.5;
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

  .bio-grid {
    grid-template-columns: 1fr;
  }

  .bio-profile {
    position: static;
  }

  .principles-grid,
  .benefits-grid {
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
    font-size: clamp(1.8rem, 8vw, 2.4rem);
  }

  .principles-heading,
  .founding-heading,
  .movement-heading {
    font-size: clamp(1.5rem, 7vw, 2rem);
  }

  .footer-social {
    gap: 10px;
  }

  .footer-social a {
    font-size: 0.68rem !important;
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
