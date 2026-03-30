<template>
  <div class="umu-page">
    <header class="umu-header">
      <div class="shell header-row">
        <a class="brand" href="#top" aria-label="umovingu home">
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
          <a class="is-active" href="#top">Home</a>
          <a href="#whynow">Why now?</a>
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

    <main id="top">
      <section class="hero">
        <div class="shell hero-grid">
          <div class="hero-copy">
            <p class="eyebrow hero-eyebrow">EARLY ACCESS OPEN NOW</p>
            <h1 class="hero-title">You accepted the offer.</h1>
            <h1 class="hero-title hero-title-second">You&rsquo;ve already found your next home.</h1>
            <p class="hero-title-third">Then the call came.</p>
            <p class="hero-sub">
              Every year, hundreds of thousands of property sales collapse after
              the offer, usually because of something the seller didn&rsquo;t know,
              couldn&rsquo;t find, or nobody thought to check. The stress, the wasted
              money, the lost purchase. It doesn&rsquo;t have to be this way.
            </p>
            <div class="hero-actions">
              <a href="#contact" class="btn hero-btn-primary">See what&rsquo;s in your home: it&rsquo;s free</a>
              <a href="#whynow" class="btn btn-light hero-btn-secondary">What goes wrong and why</a>
            </div>
          </div>

          <aside class="passport-card" aria-label="Passport summary">
            <p class="passport-kicker">UMOVINGU</p>
            <p class="passport-badge">3 issues found and resolved</p>
            <h2>47 Meadow Lane</h2>
            <p class="muted">Birmingham, B15 2TT · Semi detached · 4 bedroom</p>

            <div class="passport-metrics">
              <article>
                <span>Started</span>
                <strong>2 yrs ago</strong>
              </article>
              <article>
                <span>Documents</span>
                <strong>21 / 22</strong>
              </article>
              <article>
                <span>Issues fixed</span>
                <strong>3</strong>
              </article>
              <article>
                <span>Sale ready</span>
                <strong class="yes">Yes</strong>
              </article>
            </div>

            <div class="passport-docs">
              <div class="doc-row doc-row-head">
                <span class="doc-name">Document name</span>
                <span class="doc-action">Action taken</span>
                <span class="doc-status-h">Status</span>
              </div>
              <div v-for="doc in passportDocs" :key="doc.name" class="doc-row">
                <span class="doc-name">{{ doc.name }}</span>
                <span class="doc-action muted">{{ doc.action }}</span>
                <span class="doc-status" :class="doc.statusClass">{{ doc.status }}</span>
              </div>
            </div>

            
          </aside>
        </div>
        <p class="passport-note muted">
              These issues were found early, fixed quietly, and the sale went
              through in 11 days.
            </p>
      </section>

      <section id="whynow" class="section section-whynow">
        <div class="shell">
          <p class="eyebrow">WHY START BEFORE YOU ARE THINKING ABOUT SELLING</p>
          <h2 class="section-title">
            <span class="whynow-title-line">The wait is not the exception.</span>
            <span class="whynow-title-line">It&rsquo;s the system.</span>
            <span class="whynow-title-line whynow-title-line-soft">
              And the system starts the moment you accept an offer.
            </span>
          </h2>
          <p class="section-text">
            Whether your sale has hidden problems or not, you will wait. You will
            wait for documents to be found. You will wait for searches to come
            back. You will wait for solicitors to ask questions that could have
            been answered before the sale even started. The entire process assumes
            you arrive unprepared. And you do, because nobody ever told you not to.
          </p>

          <div class="stats-grid stats-grid-whynow">
            <article class="stat-box stat-box-whynow stat-box-whynow-1">
              <p class="stat-value stat-value-whynow">22 weeks</p>
              <p class="stat-label">
                <strong>The average sale</strong>
                <br />
               From offer to completion in England and Wales. That is five and a half months of your life, on hold. Most of that time is not investigating problems, it is waiting for paperwork that should already exist.
              </p>
            </article>
            <article class="stat-box stat-box-whynow stat-box-whynow-2">
              <p class="stat-value stat-value-whynow">1in 3</p>
              <p class="stat-label">
                <strong>Never make it</strong>
                <br />
                Sales that collapse before completion. Usually traced to something that could have been found and resolved months earlier, if anyone had looked.
              </p>
            </article>
            <article class="stat-box stat-box-whynow stat-box-whynow-3">
              <p class="stat-value stat-value-whynow">£560m</p>
              <p class="stat-label">
                <strong>Lost every year</strong>
                <br />
               In failed transactions. Surveys, solicitor fees, removals booked and cancelled. People who lost thousands because the information was never in one place.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="section section-soft why-wait-section">
        <div class="shell why-wait-shell">
          <p class="eyebrow">WHY THE WAIT HAPPENS</p>
          <h2 class="section-title why-wait-heading">
            Every sale starts from scratch.<br />
            Nobody keeps the record.
          </h2>
          <div class="why-wait-body">
            <p>When you accept an offer, your solicitor doesn&rsquo;t hand you everything neatly organised.</p>
            <p>They send you forms.<br />They ask questions.</p>
            <p>Title register. Planning history. Building control completion. Gas safety records. Electrical certificates. Fixtures and fittings. Environmental details.</p>
            <p>And that&rsquo;s the moment it starts.</p>
            <p>You begin searching, through emails, folders, boxes under the stairs, even chasing old solicitors who may or may not still have the file.</p>
            <p>Every seller goes through this.<br />Every time.<br />For every property.</p>
            <p>Because nobody ever built a system that keeps it all in one place.</p>
          </div>

          <div class="cards-3">
            <article class="info-box">
              <h3>Documents are scattered</h3>
              <p>
                Emails from 2017. A folder on a laptop you no longer own. A
                solicitor who has since retired. The average seller spends weeks
                just finding things that should take minutes to share.
              </p>
            </article>
            <article class="info-box">
              <h3>Searches take months to return</h3>
              <p>
                Local authority searches, environmental checks, drainage, flood
                risk &mdash; these are ordered after an offer is accepted and take
                4 to 8 weeks to come back. Nothing can move forward until they do.
              </p>
            </article>
            <article class="info-box">
              <h3>Every question needs an answer</h3>
              <p>
                A buyer&rsquo;s solicitor raises enquiries. Each one waits for a
                response. Each response might need a document. Each document
                might need a professional opinion. The chain sits still.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="issues" class="section">
        <div class="shell">
          <p class="eyebrow">THE HIDDEN ISSUES IN MOST HOMES</p>
          <h2 class="section-title">
            You probably have at least one of these.
            <br />
            Most homeowners do.
          </h2>
          <p class="section-text">
            They are not dramatic. They are not your fault. But they will come up,
            and whether they come up now, while you have time and no pressure, or
            during a sale, when you are already committed and the clock is running,
            makes all the difference.
          </p>

          <div class="cards-3">
            <article v-for="item in homeIssues" :key="item.title" class="issue-box">
              <p class="tag" :class="item.className">{{ item.level }}</p>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section section-soft">
        <div class="shell">
          <p class="eyebrow">THE OTHER KIND OF PROBLEM</p>
          <h2 class="section-title">
            Some problems have nothing to do with missing paperwork.
            <br />
            They are about what your home actually is.
          </h2>
          <p class="section-text">
            Your documents can be perfect and your sale can still fall through.
            Because a buyer&rsquo;s mortgage lender does not just check your paperwork.
            They assess the property itself. Its construction type. Its lease
            length. What the ground beneath it was used for. Whether a surveyor
            will flag structural concerns. Most sellers have no idea these risks
            exist until a buyer&rsquo;s mortgage is refused and the sale is already dead.
          </p>

          <div class="cards-3">
            <article v-for="item in lenderIssues" :key="item.title" class="issue-box">
              <p class="tag" :class="item.className">{{ item.level }}</p>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          <p class="eyebrow">THIS WORKS BOTH WAYS</p>
          <h2 class="section-title">
            If you are buying, umovingu protects you too.
            <br />
            Before you spend a single penny.
          </h2>
          <p class="section-text">
            Most buyers do not find out about a property&rsquo;s problems until they
            have already paid for a survey, instructed a solicitor, and emotionally
            committed to the move. By then, walking away feels like failure, even
            when the right answer is clearly to walk away. umovingu changes that.
          </p>

          <div class="cards-2">
            <article class="info-box">
              <h3>Know what the searches will say before you offer</h3>
              <p>
                Mining risk. Flood zone. Contaminated land. Environmental history.
                These results come back in conveyancing, but by then you have spent
                money and time and given notice. umovingu surfaces this upfront so
                you can decide before you are committed.
              </p>
            </article>
            <article class="info-box">
              <h3>Know the property&rsquo;s full history</h3>
              <p>
                Past subsidence. Previous flood damage. Structural work. Planning
                applications, approved and refused. A home&rsquo;s history is rarely
                volunteered. umovingu makes it visible, so buyers are not
                discovering things at the moment they can least afford a shock.
              </p>
            </article>
            <article class="info-box">
              <h3>Know what your lender will think before you apply</h3>
              <p>
                Nonstandard construction. Short lease. Cladding. Units above
                commercial premises. Lenders have criteria that most buyers never
                know exist until their application is declined. Checking upfront
                saves a mortgage application, a survey fee, and weeks of your life.
              </p>
            </article>
            <article class="info-box">
              <h3>Walk away with nothing lost, or commit with full confidence</h3>
              <p>
                The purpose is not to put buyers off. It is to give them real
                information before the costs begin. Some issues are perfectly
                manageable once you know about them. Others are genuine
                dealbreakers, and far better discovered before the survey than
                after it.
              </p>
            </article>
          </div>

          <div class="buyer-cta-banner">
            <h3 class="buyer-cta-heading">You don&rsquo;t know what you don&rsquo;t know. Until you do.</h3>
            <p class="buyer-cta-text">
              The property market has always run on incomplete information. Sellers do
              not know their own risks. Buyers do not know what they are buying until
              they have paid to find out. umovingu exists to change that, for both
              sides, before the first cost is ever incurred.
            </p>
            <a href="#contact" class="buyer-cta-btn">Get started with umovingu</a>
          </div>
        </div>
      </section>

      <section class="section section-dark comparison-section">
        <div class="shell">
          <p class="eyebrow eyebrow-light">THE TIMING ARGUMENT</p>
          <h2 class="section-title">
            <span class="comp-title-white">The same problem.</span>
            <br />
            <span class="comp-title-faded">Two completely different outcomes.</span>
          </h2>

          <div class="comparison-grid">
            <div class="comparison-box comparison-bad">
              <div class="comp-header comp-header-bad">
                <h3>DISCOVERED DURING CONVEYANCING, TOO LATE</h3>
              </div>
              <div class="comp-body comp-body-bad">
                <p>
                  You have accepted an offer. You have found your next home. You
                  have given notice at work.
                </p>
                <p>
                  The buyer&rsquo;s solicitor raises an enquiry. They discover your 2014
                  extension has no building control completion certificate. Your
                  buyer&rsquo;s lender flags it. They want an indemnity policy, but since
                  the enquiry has now been raised, the policy may not be available.
                </p>
                <p>
                  Your buyer loses confidence. They withdraw. The chain collapses.
                  Your onward purchase falls through too.
                </p>
                <p class="comparison-result comparison-result-bad">
                  Result: the sale is dead. You have lost £8,000 in fees, your
                  onward purchase, and four months of your life.
                </p>
              </div>
            </div>

            <div class="comparison-box comparison-good">
              <div class="comp-header comp-header-good">
                <h3>FOUND BY UMOVINGU, 18 MONTHS BEFORE YOU LISTED</h3>
              </div>
              <div class="comp-body comp-body-good">
                <p>
                  umovingu flags the 2014 extension. Notes there is no building
                  regulations entry in your documents.
                </p>
                <p>
                  You contact the council at leisure. They carry out a retrospective
                  inspection. Completion obtained. Document uploaded to umovingu.
                </p>
                <p>
                  When you sell 14 months later, your solicitor shares it on day one.
                  No enquiry raised. No delay. No drama.
                </p>
                <p class="comparison-result comparison-result-good">
                  Result: the sale proceeds. Completion in 14 days. Total cost: one
                  council inspection fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section id="timeline" class="section timeline-section">
        <div class="shell">
          <p class="eyebrow">WHEN YOU ARE READY TO SELL</p>
          <h2 class="section-title">
            <span class="timeline-title-dark">150 days.</span>
            <br />
            <span class="timeline-title-faded">Or 14.</span>
          </h2>
          <p class="section-text">
            The difference is not a lucky solicitor or a fast buyer. It is whether
            the paperwork was ready before the offer was accepted. One path starts
            from nothing. The other was already done.
          </p>

          <div class="timeline-table">
            <div class="timeline-head">
              <div class="timeline-head-bad">Without umovingu &middot; 150 days</div>
              <div class="timeline-head-good">With umovingu &middot; 14 days</div>
            </div>

            <div v-for="row in timeline" :key="row.leftTitle" class="timeline-row">
              <div class="timeline-cell timeline-cell-left">
                <h3>{{ row.leftTitle }}</h3>
                <p>{{ row.leftText }}</p>
              </div>
              <div class="timeline-cell timeline-cell-right">
                <h3>{{ row.rightTitle }}</h3>
                <p>{{ row.rightText }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section days-saved-section">
        <div class="shell">
          <div class="days-saved-card">
            <p class="days-saved-label">DAYS SAVED</p>
            <p class="days-saved-number">136 days</p>
            <p class="days-saved-sub">Four and a half months back in your life.</p>
            <p class="days-saved-note">
              And that is only if the sale completes at all. The 150&ndash;day version where
              everything collapses at day 140 is the one that really costs you.
            </p>
            <a href="#contact" class="days-saved-btn">Get early access</a>
          </div>
        </div>
      </section>

      <section class="section section-dark solution-section">
        <div class="shell">
          <h2 class="solution-heading">
            <span class="solution-title-white">The solution is simple.</span>
            <br />
            <span class="solution-title-faded">Know everything before anyone else does.</span>
          </h2>
          <p class="solution-body">
            umovingu builds a complete, verified record of your home, while
            you&rsquo;re living in it, long before any sale begins. So when the
            time comes, everything is ready. Nothing is a surprise. And the
            process that usually takes 22 weeks takes a fraction of the time.
          </p>
          <div class="solution-actions">
            <a href="#contact" class="solution-btn-primary">Get started with umovingu for free</a>
            <a href="#how" class="solution-btn-secondary">How it works</a>
          </div>
        </div>
      </section>

      <section id="how" class="section how-section">
        <div class="shell">
          <p class="eyebrow">HOW IT WORKS</p>
          <h2 class="section-title">
            Ten minutes today.
            <br />
            Everything ready when you need it.
          </h2>

          <div class="steps-grid">
            <article v-for="step in steps" :key="step.number" class="step-box">
              <div class="step-top">
                <span class="step-icon" v-html="step.icon"></span>
                <span class="step-number">{{ step.number }}</span>
              </div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" class="section contact-cta-section">
        <div class="shell">
          <p class="contact-eyebrow">EARLY ACCESS</p>
          <h2 class="contact-heading">Start my Property Passport: it&rsquo;s free.</h2>
          <p class="contact-sub">
            By now you know how it works. The next step is choosing your path
            and telling us a little about you. It takes a minute.
          </p>
          <a href="mailto:hello@umovingu.com" class="contact-btn">Start my Property Passport: it&rsquo;s free</a>
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
import { reactive, ref } from 'vue'

const menuOpen = ref(false)
const showCookies = ref(true)
const submitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  role: '',
  message: ''
})

function submitForm() {
  submitted.value = true
}

const homeIssues = [
  {
    level: 'High risk',
    className: 'tag-high',
    title: 'Missing building regs',
    text: 'Extensions, loft conversions, garage conversions: if the work was never signed off, your buyer\u2019s mortgage lender may refuse to lend. An indemnity policy can resolve this in days if you act before listing. If discovered during a sale, it can collapse the transaction.'
  },
  {
    level: 'Common',
    className: 'tag-mid',
    title: 'Outdated electrical certificate',
    text: 'An EICR older than 10 years raises immediate red flags with lenders. A new one costs \u00A3150 to \u00A3300 and takes a day. If found during a sale, it can delay exchange by weeks and give buyers a reason to renegotiate.'
  },
  {
    level: 'Common',
    className: 'tag-mid',
    title: 'Boundary discrepancies',
    text: 'The Land Registry\u2019s filed plan does not always match the physical boundary. A mismatch triggers solicitor enquiries that can take months to resolve, or derail a sale entirely if a buyer loses confidence.'
  },
  {
    level: 'Common',
    className: 'tag-mid',
    title: 'Planning permission gaps',
    text: 'Work done without planning permission, or permitted development rights never confirmed in writing. Indemnity insurance is cheap and quick, but only if nobody has raised the issue yet. Once raised, the policy is unavailable.'
  },
  {
    level: 'Manageable',
    className: 'tag-low',
    title: 'Title register anomalies',
    text: 'Ownership not updated after a death, divorce or remortgage. Rights of way undocumented. Restrictive covenants not disclosed. All routine enquiries for a buyer\u2019s solicitor. All slow to fix once someone starts asking.'
  },
  {
    level: 'Manageable',
    className: 'tag-low',
    title: 'Expiring warranties and certificates',
    text: 'FENSA certificates, Gas Safe records, boiler warranties: they expire quietly and nobody notices. Found in advance, renewals take hours. Found during a sale, they become negotiating leverage for the buyer.'
  }
]

const lenderIssues = [
  {
    level: 'Often fatal',
    className: 'tag-high',
    title: 'Nonstandard construction',
    text: 'Concrete panel, steel frame, timber frame, prefab, Airey, Cornish build: many lenders simply refuse to lend on these property types regardless of condition or paperwork. Knowing early means pricing accordingly and finding the right buyers before anyone wastes time.'
  },
  {
    level: 'Often fatal',
    className: 'tag-high',
    title: 'Short lease',
    text: 'Below 80 years and mortgage options narrow significantly. Below 70 and most high street lenders will not lend. A lease extension takes months and costs thousands, but started two years in advance, it is entirely manageable.'
  },
  {
    level: 'High impact',
    className: 'tag-mid',
    title: 'Cladding: no EWS1 certificate',
    text: 'Flats in buildings with external cladding are effectively unlendable without an EWS1 certificate. Many flat owners do not know they need one until a buyer\u2019s mortgage application is declined. Getting the certificate can take a year or more.'
  },
  {
    level: 'High impact',
    className: 'tag-mid',
    title: 'Mining, subsidence and ground risk',
    text: 'Coal mining, tin, salt, clay extraction: if the ground has a history, it shows up in local searches. A buyer finds out six weeks into the transaction. Their lender requires specialist structural insurance or a full engineer\u2019s report. The chain stalls while everyone waits.'
  },
  {
    level: 'High impact',
    className: 'tag-mid',
    title: 'Flood risk and environmental history',
    text: 'Environmental searches reveal flood zones, contaminated land, former industrial use nearby. Some lenders will not lend in high flood risk areas. A buyer who discovers this during a purchase can and often does walk away.'
  },
  {
    level: 'High impact',
    className: 'tag-mid',
    title: 'Down valuation',
    text: 'The surveyor values the property below the agreed sale price. The buyer\u2019s lender will only lend against the surveyor\u2019s figure. The buyer cannot make up the shortfall. The sale falls, or the seller is forced to drop the price mid-transaction.'
  }
]

const timeline = [
  {
    leftTitle: 'Day 0 · Offer accepted',
    leftText: 'Clock starts. You have nothing prepared. The scramble begins.',
    rightTitle: 'Day 0 · Offer accepted',
    rightText: 'You are ready. Every document verified and waiting. Nothing to chase.'
  },
  {
    leftTitle: 'Day 5 to 30 · Document hunt begins',
    leftText: 'Solicitor requests everything. You search emails, folders, old files, old solicitors. Weeks pass.',
    rightTitle: 'Day 1 · Home record shared instantly',
    rightText: 'One tap. Solicitor and buyer\u2019s side have everything from the start. No back and forth.'
  },
  {
    leftTitle: 'Day 30 to 60 · Gaps discovered',
    leftText: 'Missing building regs. Outdated cert. Lender flags construction type. Each one a new delay.',
    rightTitle: 'Day 2 to 4 · No gaps to fill',
    rightText: 'Issues were found and resolved months ago. No enquiries about things you already dealt with.'
  },
  {
    leftTitle: 'Day 60 to 90 · Searches ordered',
    leftText: 'Local authority and environmental searches take 4 to 8 weeks to return. You can only wait.',
    rightTitle: 'Day 4 to 6 · Searches already available',
    rightText: 'Ordered and returned in advance. The bottleneck that usually eats two months is already cleared.'
  },
  {
    leftTitle: 'Day 90 to 140 · Enquiries and surveys',
    leftText: 'Buyer\u2019s solicitor raises questions. Each answer may need a document or a professional opinion. The chain waits.',
    rightTitle: 'Day 7 to 12 · Mortgage and legal run in parallel',
    rightText: 'Complete information means nothing is waiting on anything else. Everything moves at once.'
  },
  {
    leftTitle: 'Day 150 · Completion, if you made it',
    leftText: '1 in 3 did not get here. For those who did: five months of stress, waiting and uncertainty.',
    rightTitle: 'Day 14 · Completion',
    rightText: 'Done. Because everything was already done before the sale started.'
  }
]

const steps = [
  {
    number: '01',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="m8 21 4-4 4 4"/></svg>',
    title: 'Get started with umovingu today',
    text: 'Answer a few questions about your home. We connect to public records and build the foundation. Takes ten minutes. Then it works in the background.'
  },
  {
    number: '02',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
    title: 'Know what you have, and what you are missing',
    text: 'umovingu shows you everything that exists, everything that is expiring, and everything that could become a problem. You find out now, when you can still do something about it.'
  },
  {
    number: '03',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    title: 'Fix things quietly, before the pressure starts',
    text: 'A missing certificate. An indemnity policy. A lease extension. These things take weeks when you are not in a chain. They feel impossible when you are. Do them now, on your terms.'
  },
  {
    number: '04',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
    title: 'When you sell, you are already ready',
    text: 'Share your complete, verified home record from umovingu with your solicitor in one tap. No scramble. No delays caused by your side. The 22\u2011week process becomes something much shorter.'
  }
]

const passportDocs = [
  { name: 'Planning permission, rear extension', action: 'Missing cert found and uploaded · 14 months ago', status: 'Done', statusClass: 'doc-done' },
  { name: 'Electrical installation report', action: 'Out of date · Renewed 8 months ago', status: 'Done', statusClass: 'doc-done' },
  { name: 'Indemnity insurance, missing Building Regs', action: 'Policy obtained · 6 months ago', status: 'Done', statusClass: 'doc-done' },
  { name: 'Title deeds, boundary discrepancy', action: 'Confirmed with Land Registry · 3 months ago', status: 'Done', statusClass: 'doc-done' }
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
  letter-spacing: 0.01em;
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
  margin-left:162px;
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

.hero {
  padding: clamp(38px, 7vw, 84px) 0 36px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(18px, 3vw, 28px);
  justify-items: center;
}

.hero-copy {
  max-width: 760px;
  text-align: center;
}

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 38px;
  padding: 0 18px;
  border: 1px solid #cfd3dd;
  border-radius: 999px;
  background: #f3f4f6;
  color: #656d87;
  letter-spacing: 0.28em;
}

.hero-eyebrow::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #00a19a;
}

.eyebrow {
  margin: 0 0 24px;
font-size: 12px;
    line-height: 16px;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 700;
    color: rgb(35 29 69 / 0.5);
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    text-align: center;
}

.hero-title {
  margin: 0;
  font-size:72px;
  line-height: 1;
  letter-spacing: -0.025em;
  text-wrap: balance;
  color: rgb(35 29 69 / var(--tw-text-opacity, 1));
  font-weight: 700;
  font-family: 'Instrument Serif', serif;
}

.hero-title-second {
  font-size: 53px;
  line-height: 1;
  letter-spacing: -1.8px;
  white-space: normal;
  text-wrap: balance;
}

.hero-title-third {
  margin: 0;
  font-size: 72px;
  line-height: 1;
  font-weight: 700;
  font-family: 'Instrument Serif', serif;
  color: rgb(35 29 69 / 0.4);
}
.hero-sub,
.section-text,
.info-box p,
.issue-box p,
.step-box p,
.table-row p,
.muted {
  color: var(--muted);
  line-height: 1.62;
  overflow-wrap: anywhere;
}

.hero-sub {
  margin-top: 16px;
    max-width: 560px;
    margin-inline: auto;
    color: rgb(35 29 69 / 0.75);
    margin-bottom: 40px;
    line-height: 32px;
    font-size: 24px;
    font-family: 'Plus Jakarta Sans', 'SFMono-Regular', ui-monospace, sans-serif;
}

.hero-actions {
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.hero-btn-primary,
.hero-btn-secondary {
  min-height: 56px;
  padding: 0 34px;
  border-radius: 999px;
  font-size: 1.02rem;
  font-weight: 700;
}

.hero-btn-primary {
  min-width: 340px;
  background: #231d45;
}

.hero-btn-primary:hover,
.hero-btn-primary:focus-visible {
  background: #1b1534;
}

.hero-btn-secondary {
  min-width: 286px;
  border-color: #c6cbd8;
  color: #231d45;
  background: #f8f8fa;
}

.hero-btn-secondary:hover,
.hero-btn-secondary:focus-visible {
  background: #eef0f5;
  color: #231d45;
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
  background-color: rgb(35 29 69 / var(--tw-bg-opacity, 1));
}

.btn:hover,
.btn:focus-visible {
  background: var(--accent-dark);
  box-shadow: 0 10px 24px color-mix(in srgb, var(--accent-dark) 30%, transparent);
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(1px);
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

.passport-card {
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: clamp(18px, 2.5vw, 28px);
  background: #ffffff;
  box-shadow: 0 20px 50px rgba(29, 36, 69, 0.08);
  width: min(640px, 100%);
}

.passport-kicker {
  margin: 0;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--accent);
}

.passport-card h2 {
  margin: 10px 0 4px;
  font-size: 1.25rem;
}

.passport-badge {
  display: inline-block;
  margin: 8px 0 4px;
  padding: 4px 10px;
  border-radius: 999px;
  background: #e8f7ef;
  color: #0e7141;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.passport-metrics {
  margin-top: 14px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.passport-metrics article {
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 10px;
  background: #fbfcfd;
}

.passport-metrics span {
  display: block;
  font-size: 0.75rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

.passport-metrics strong {
  font-size: 1rem;
}

.yes {
  color: #0e9a5a;
}

.passport-docs {
  margin-top: 14px;
  border: 1px solid var(--line);
  border-radius: 12px;
  overflow: hidden;
}

.doc-row {
  display: grid;
  grid-template-columns: 1.4fr 1.6fr auto;
  align-items: center;
  padding: 10px 14px;
  font-size: 0.82rem;
  border-bottom: 1px solid var(--line);
  gap: 8px;
}

.doc-row:last-child {
  border-bottom: none;
}

.doc-row-head {
  background: var(--soft);
  font-weight: 700;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--muted);
}

.doc-name {
  color: var(--ink);
}

.doc-action {
  font-size: 0.78rem;
}

.doc-status-h {
  color: var(--muted);
}

.doc-status {
  font-weight: 600;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.doc-done {
  color: #0e9a5a;
}

.doc-pending {
  color: #c9820a;
}

.passport-note {
 font-size: 14px;
    line-height: 20px;
    color: rgb(35 29 69 / 0.5);
    text-align: center;
    margin-top: 16px;
}

.cards-2 {
  margin-top: clamp(24px, 3.5vw, 40px);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(16px, 2vw, 24px);
}

.cards-2 .info-box {
  border: 1px solid #e2e0dc;
  border-radius: 24px;
  padding: clamp(24px, 3vw, 36px);
  background: #ffffff;
  box-shadow: none;
}

.cards-2 .info-box h3 {
  margin: 0 0 14px;
  font-size: clamp(1.05rem, 1.8vw, 1.25rem);
  font-weight: 700;
  font-family: 'Instrument Serif', ui-monospace, serif;
  color: rgb(35 29 69);
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.cards-2 .info-box p {
  margin: 0;
  font-family: 'Plus Jakarta Sans', 'SFMono-Regular', ui-monospace, sans-serif;
  font-weight: 400;
  font-size: clamp(0.88rem, 1.4vw, 1rem);
  line-height: 1.7;
  color: rgb(35 29 69 / 0.6);
}

/* Dark CTA banner card */
.buyer-cta-banner {
  margin-top: clamp(28px, 4vw, 48px);
  background: rgb(35 29 69);
  border-radius: 16px;
  padding: clamp(32px, 5vw, 60px) clamp(24px, 5vw, 80px);
  text-align: center;
}

.buyer-cta-heading {
  margin: 0 0 20px;
  font-family: 'Plus Jakarta Sans', 'SFMono-Regular', ui-monospace, sans-serif;
  font-weight: 700;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.buyer-cta-text {
  margin: 0 auto 28px;
  max-width: 672px;
  font-family: 'Plus Jakarta Sans', 'SFMono-Regular', ui-monospace, sans-serif;
  font-weight: 400;
  font-size: clamp(0.92rem, 1.6vw, 1.08rem);
  line-height: 1.625;
  color: rgb(244 241 238 / 0.75);
}

.buyer-cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 32px;
  border-radius: 999px;
  background: #f5f3ef;
  color: rgb(35 29 69);
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s ease, transform 0.14s ease;
}

.buyer-cta-btn:hover,
.buyer-cta-btn:focus-visible {
  background: #ffffff;
  transform: translateY(-1px);
}

/* Comparison section — dark layout */
.comparison-section {
  background: linear-gradient(158deg, var(--dark) 0%, var(--dark-2) 100%);
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding-left: 0;
  padding-right: 0;
  width: 100vw;
}

.comp-title-white {
  color: #ffffff;
  font-family: 'Instrument Serif', ui-monospace, serif;
  font-weight: 700;
}

.comp-title-faded {
  color: rgb(244 241 238 / 0.35);
  font-family: 'Instrument Serif', ui-monospace, serif;
  font-weight: 700;
}

.comparison-grid {
  margin-top: clamp(24px, 3.5vw, 40px);
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 700px;
  margin-inline: auto;
}

.comparison-box {
  border-radius: 16px;
  overflow: hidden;
  background: rgb(255 255 255 / 0.06);
}

.comp-header {
  padding: 14px 24px;
  text-align: center;
}

.comp-header h3 {
  margin: 0;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
}

.comp-header-bad {
  background: #c0392b;
}

.comp-header-good {
  background: #0e9a5a;
}

.comp-body {
  padding: clamp(18px, 2.5vw, 28px) clamp(20px, 2.5vw, 28px);
}

.comp-body-bad {
  background-color: rgb(69 10 10 / 0.4);
}

.comp-body-good {
  background-color: rgb(2 44 34 / 0.3);
}

.comp-body-bad p {
  border-left-color: rgb(185 28 28 / 1.0);
}

.comp-body-good p {
  border-left-color: rgb(16 185 129 / 0.6);
}

.comp-body p {
  margin: 0 0 16px;
  padding-left: 16px;
  border-left: 3px solid rgb(185 28 28 / 1.0);
  font-family: 'Plus Jakarta Sans', 'SFMono-Regular', ui-monospace, sans-serif;
  font-weight: 400;
  font-size: clamp(0.85rem, 1.4vw, 0.95rem);
  line-height: 1.65;
  color: rgb(255 255 255 / 0.7);
}

.comp-body p:last-child {
  margin-bottom: 0;
}

.comparison-box .comparison-result {
  border-left: none;
  padding-left: 0;
  font-weight: 700;
  margin-top: 4px;
  padding-top: 0;
  border-top: none;
  color: #ffffff;
}

.comparison-box .comparison-result-bad {
  color: #ffffff;
}

.comparison-box .comparison-result-good {
  color: #ffffff;
}

/* Timeline section — 150 days vs 14 */
.timeline-section {
  background: #f0eeeb;
}

.timeline-title-dark {
  color: rgb(35 29 69);
  font-family: 'Instrument Serif', serif;
  font-weight: 700;
  font-style: italic;
}

.timeline-title-faded {
  color: rgb(35 29 69 / 0.3);
  font-family: 'Instrument Serif', serif;
  font-weight: 700;
  font-style: italic;
}

.timeline-table {
  margin-top: clamp(24px, 3.5vw, 40px);
  border: 1px solid #e2e0dc;
  border-radius: 20px;
  overflow: hidden;
  background: #ffffff;
  max-width: 920px;
  margin-inline: auto;
}

.timeline-head {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.timeline-head-bad,
.timeline-head-good {
  padding: 14px 20px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
}

.timeline-head-bad {
  background: #c0392b;
  border-radius: 18px 0 0 0;
}

.timeline-head-good {
  background: #0e9a5a;
  border-radius: 0 18px 0 0;
}

.timeline-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid #eae8e4;
}

.timeline-cell {
  padding: 16px 20px;
  min-width: 0;
}

.timeline-cell-left h3 {
  margin: 0 0 4px;
  font-size: 0.88rem;
  font-weight: 700;
  color: rgb(35 29 69);
}

.timeline-cell-left p {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.55;
  color: rgb(35 29 69 / 0.5);
  font-style: italic;
}

.timeline-cell-right {
  border-left: 1px solid #eae8e4;
}

.timeline-cell-right h3 {
  margin: 0 0 4px;
  font-size: 0.88rem;
  font-weight: 700;
  color: rgb(35 29 69);
}

.timeline-cell-right p {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.55;
  color: rgb(35 29 69 / 0.5);
  font-style: italic;
}

.saved-block {
  margin-top: 22px;
  text-align: center;
}

.saved-label {
  margin: 0;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #5ee6d6;
  text-transform: uppercase;
}

.saved {
  margin: 6px 0 0;
  color: #5ee6d6;
  font-weight: 700;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  line-height: 1;
}

.saved-sub {
  margin: 6px 0 0;
  color: #c5cedf;
  font-size: 0.95rem;
}

/* ── Days-Saved Card ── */
.days-saved-section {
  background: #f0eeeb;
  padding: 0 0 clamp(3rem, 6vw, 5rem);
}

.days-saved-card {
  background: rgb(35 29 69);
  border-radius: 24px;
  padding: clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3.5rem);
  text-align: center;
  max-width: 780px;
  margin: 0 auto;
}

.days-saved-label {
  margin: 0;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: #5ee6d6;
  text-transform: uppercase;
}

.days-saved-number {
  margin: 10px 0 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: clamp(2.8rem, 6vw, 4.2rem);
  line-height: 1.05;
  color: #fff;
}

.days-saved-sub {
  margin: 10px 0 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.4;
  color: #fff;
}

.days-saved-note {
  margin: 18px auto 0;
  max-width: 520px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(0.82rem, 1.4vw, 0.92rem);
  line-height: 1.6;
  color: rgb(255 255 255 / 0.55);
}

.days-saved-btn {
  display: inline-block;
  margin-top: 28px;
  padding: 14px 38px;
  border-radius: 999px;
  background: #f4f1ee;
  color: rgb(35 29 69);
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: opacity 0.2s;
}

.days-saved-btn:hover {
  opacity: 0.85;
}

/* ── Solution Section ── */
.solution-section {
  background: linear-gradient(158deg, var(--dark) 0%, var(--dark-2) 100%);
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding: clamp(4rem, 8vw, 7rem) 0;
  width: 100vw;
  text-align: center;
}

.solution-heading {
  margin: 0;
  font-family: 'Instrument Serif', serif;
  font-size: clamp(2rem, 5vw, 3.4rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 400;
}

.solution-title-white {
  color: #ffffff;
}

.solution-title-faded {
  color: rgb(244 241 238 / 0.35);
}

.solution-body {
  margin: 24px auto 0;
  max-width: 580px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(0.92rem, 1.5vw, 1.05rem);
  line-height: 1.7;
  color: rgb(255 255 255 / 0.6);
}

.solution-actions {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.solution-btn-primary,
.solution-btn-secondary {
  min-height: 52px;
  padding: 0 32px;
  border-radius: 999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease, transform 0.14s ease;
  cursor: pointer;
}

.solution-btn-primary {
  background: rgb(255 255 255 / 0.12);
  border: 1px solid rgb(255 255 255 / 0.25);
  color: #ffffff;
}

.solution-btn-primary:hover,
.solution-btn-primary:focus-visible {
  background: rgb(255 255 255 / 0.18);
  transform: translateY(-1px);
}

.solution-btn-secondary {
  background: transparent;
  border: 1px solid rgb(255 255 255 / 0.25);
  color: #ffffff;
}

.solution-btn-secondary:hover,
.solution-btn-secondary:focus-visible {
  background: rgb(255 255 255 / 0.08);
  transform: translateY(-1px);
}

.section {
  padding: clamp(48px, 8vw, 90px) 0;
}

.section-soft {
  background: #f5f5f5;
  border-top: 1px solid color-mix(in srgb, var(--line) 50%, transparent);
  border-bottom: 1px solid color-mix(in srgb, var(--line) 50%, transparent);
}

.section-title {
  margin: 0;
  font-size: clamp(1.75rem, 5vw, 3rem);
  line-height: 1.08;
  letter-spacing: -0.025em;
  text-wrap: balance;
  font-weight: 700;
  font-family: 'Instrument Serif', serif;
  overflow-wrap: anywhere;
  text-align: center;
}

.section-text {
  margin-top: 14px;
  max-width: 660px;
  font-family: 'Plus Jakarta Sans', 'SFMono-Regular', ui-monospace, sans-serif;
  text-align: center;
  font-weight: 300;
  font-size: clamp(1rem, 2.5vw, 1.375rem);
  line-height: 1.6;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  overflow-wrap: anywhere;
}

.section-whynow {
  background: #f0eeeb;
}

.section-whynow .shell {
  max-width: 880px;
  margin-inline: auto;
}

.section-whynow .eyebrow,
.section-whynow .section-title,
.section-whynow .section-text {
  text-align: center;
}

.section-whynow .section-text {
  margin-inline: auto;
  max-width: 720px;
  font-family: 'Plus Jakarta Sans', 'SFMono-Regular', ui-monospace, sans-serif;
  font-weight: 400;
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  line-height: 1.7;
  color: rgb(35 29 69 / 0.55);
}

/* WHY THE WAIT HAPPENS — editorial layout */
.why-wait-section {
  background: #f5f5f5;
}

.why-wait-shell {
  max-width: 780px;
  margin-inline: auto;
  text-align: center;
}

.why-wait-heading {
  font-size: clamp(2rem, 5.5vw, 3.5rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: rgb(35 29 69);
  margin-bottom: 36px;
}

.why-wait-body {
  max-width: 680px;
  margin-inline: auto;
}

.why-wait-body p {
  font-family: 'Plus Jakarta Sans', 'SFMono-Regular', ui-monospace, sans-serif;
  font-weight: 300;
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  line-height: 1.65;
  color: rgb(35 29 69 / 0.55);
  text-align: center;
  margin: 0 0 24px;
  text-wrap: balance;
}

.why-wait-body p:last-child {
  margin-bottom: 40px;
}

.whynow-title-line {
  display: block;
  font-size: clamp(2.2rem, 5.8vw, 4rem);
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 700;
  font-family: 'Instrument Serif', serif;
  color: rgb(35 29 69);
  text-wrap: balance;
  overflow-wrap: anywhere;
}

.whynow-title-line-soft {
  margin-top: 10px;
  display: block;
  color: rgb(35 29 69 / 0.35);
  font-size: clamp(2.2rem, 5.8vw, 4rem);
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 700;
  font-family: 'Instrument Serif', serif;
  text-wrap: balance;
  overflow-wrap: anywhere;
}

.stats-grid-whynow {
  margin-top: 44px;
}

.stat-box-whynow {
  border-radius: 14px;
  min-height: 230px;
  padding: 22px 20px;
  box-shadow: none;
}

.stat-value-whynow {
  font-size: clamp(2.1rem, 4vw, 3rem);
  line-height: 1;
  letter-spacing: -0.02em;
  font-family: 'Instrument Serif', serif;
}

.stat-box-whynow .stat-label {
  margin-top: 10px;
  font-size: 0.95rem;
}

.stat-box-whynow .stat-label strong {
  color: #1d2445;
  font-size: 1.1rem;
}

.stat-box-whynow-1 {
  border-color: #b8e5e1;
}

.stat-box-whynow-1 .stat-value-whynow {
  color: #00a19a;
}

.stat-box-whynow-2 {
  border-color: #f0d8aa;
}

.stat-box-whynow-2 .stat-value-whynow {
  color: #c57b0d;
}

.stat-box-whynow-3 {
  border-color: #e8d1f0;
}

.stat-box-whynow-3 .stat-value-whynow {
  color: #b448ca;
}

.stats-grid,
.cards-3 {
  margin-top: clamp(18px, 2.7vw, 30px);
  display: grid;
  gap: 14px;
}

.steps-grid {
  margin-top: clamp(24px, 3.5vw, 40px);
  display: grid;
}

.stats-grid,
.cards-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.stat-box,
.info-box,
.issue-box {
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: clamp(18px, 2.4vw, 26px);
  background: #ffffff;
}

.stat-value {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
}

.stat-label {
  margin: 8px 0 0;
  color: var(--muted);
  line-height: 1.5;
}

.info-box h3,
.issue-box h3,
.table-row h3 {
  margin: 0 0 8px;
  font-size: 1.06rem;
}

.tag {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  margin: 0 0 10px;
  font-size: 0.73rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

.tag-high {
  background: #ffe7e5;
  color: #9b2915;
}

.tag-mid {
  background: #fff4dc;
  color: #8a5000;
}

.tag-low {
  background: #e8f7ef;
  color: #0e7141;
}

.section-dark {
  background: linear-gradient(158deg, var(--dark) 0%, var(--dark-2) 100%);
}

.eyebrow-light {
  color: #5ee6d6;
}

.section-title-light {
  color: #f6fbff;
}

.table-wrap {
  margin-top: 20px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  overflow: hidden;
}

.table-head,
.table-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.table-head p {
  margin: 0;
  padding: 12px 14px;
  color: #f6fbff;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.08);
}

.table-row > div {
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  padding: 14px;
  min-width: 0;
}

.table-row h3 {
  color: #ffffff;
}

.table-row p {
  margin: 0;
  color: #cdd8e8;
}

.how-section {
  background: #f0eeeb;
}

.steps-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.step-box {
  position: relative;
  border: 1px solid #e2e0dc;
  border-radius: 20px;
  padding: clamp(24px, 3vw, 36px);
  background: #ffffff;
  overflow: hidden;
}

.step-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;
}

.step-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #eef0f8;
  color: rgb(35 29 69 / 0.7);
}

.step-number {
  font-family: 'Instrument Serif', serif;
  font-size: clamp(3rem, 5vw, 4.5rem);
  font-weight: 400;
  line-height: 0.85;
  color: rgb(35 29 69 / 0.06);
  user-select: none;
}

.step-box h3 {
  margin: 0 0 10px;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  /* font-size: clamp(1rem, 1.6vw, 1.18rem); */
  line-height: 1.3;
  color: rgb(35 29 69);
}

.step-box p {
  margin: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 400;
  font-size: clamp(0.85rem, 1.3vw, 0.95rem);
  line-height: 1.65;
  color: rgb(35 29 69 / 0.55);
}

.step-n {
  display: none;
}

/* ── Contact CTA (teal gradient) ── */
.contact-cta-section {
  background: linear-gradient(135deg, #00b4a0 0%, #00d4be 35%, #1ec8c8 65%, #00c4b4 100%);
  text-align: center;
  padding: clamp(3.5rem, 7vw, 6rem) 0;
}

.contact-eyebrow {
  margin: 0 0 20px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgb(255 255 255 / 0.7);
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
}

.contact-heading {
  margin: 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  /* font-size: clamp(1.8rem, 4.5vw, 3rem); */
  line-height: 1.12;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-wrap: balance;
}

.contact-sub {
  margin: 16px auto 0;
  max-width: 540px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(0.9rem, 1.5vw, 1.05rem);
  line-height: 1.65;
  color: rgb(255 255 255 / 0.7);
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
  min-height: 52px;
  padding: 0 36px;
  border-radius: 999px;
  background: #f5f3ef;
  color: rgb(35 29 69);
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: background 0.15s ease, transform 0.14s ease;
  cursor: pointer;
}

.contact-btn:hover,
.contact-btn:focus-visible {
  background: #ffffff;
  transform: translateY(-1px);
}

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

.cookie {
  position: fixed;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  width: min(1020px, calc(100% - 20px));
  border: 1px solid var(--line);
  background: color-mix(in srgb, #ffffff 94%, #e8f4f3);
  border-radius: 14px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
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

@media (max-width: 1024px) {
  .desktop-nav,
  .btn-small {
    display: none;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .hero-grid {
    grid-template-columns: 1fr;
  }

  .cards-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .shell {
    width: calc(100% - 24px);
  }

  .umu-page {
    overflow-x: hidden;
  }

  .hero-copy,
  .section-text,
  .stat-label,
  .info-box p,
  .issue-box p {
    overflow-wrap: anywhere;
    word-break: normal;
  }

  .hero-title,
  .hero-title-second,
  .hero-title-third {
    font-size: clamp(1.78rem, 9.6vw, 2.55rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
  }

  .hero-sub {
    max-width: 100%;
    font-size: clamp(1.02rem, 4.6vw, 1.2rem);
    line-height: 1.55;
    margin-bottom: 28px;
  }

  .hero-actions {
    width: 100%;
    gap: 12px;
  }

  .hero-btn-primary,
  .hero-btn-secondary {
    width: 100%;
    min-width: 0;
    max-width: 100%;
    min-height: 50px;
    font-size: 0.98rem;
    padding: 0 16px;
  }

  .section-title {
    font-size: clamp(1.4rem, 7.5vw, 2rem);
    line-height: 1.08;
  }

  .section-text {
    font-size: clamp(0.95rem, 4.2vw, 1.15rem);
    line-height: 1.55;
    max-width: 100%;
  }

  .why-wait-heading {
    font-size: clamp(1.5rem, 8vw, 2.2rem);
    margin-bottom: 24px;
  }

  .why-wait-body p {
    font-size: clamp(0.92rem, 4vw, 1.08rem);
    line-height: 1.55;
    margin-bottom: 18px;
  }

  .whynow-title-line,
  .whynow-title-line-soft {
    font-size: clamp(1.6rem, 8vw, 2.4rem);
    line-height: 1.1;
    letter-spacing: -0.02em;
    overflow-wrap: anywhere;
  }

  .whynow-title-line-soft {
    margin-top: 6px;
  }

  .hero-title,
  .hero-title-second,
  .hero-title-third,
  .section-title,
  .whynow-title-line,
  .whynow-title-line-soft,
  .hero-sub,
  .section-text,
  .stat-label,
  .info-box p,
  .issue-box p,
  .table-row p,
  .comparison-box p,
  .saved-sub,
  .btn {
    max-inline-size: 100%;
    overflow-wrap: anywhere;
    word-break: normal;
    hyphens: auto;
  }

  .stats-grid,
  .cards-3,
  .cards-2 {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .cards-2 .info-box {
    padding: 20px;
    border-radius: 18px;
  }

  .cards-2 .info-box h3 {
    font-size: 1.05rem;
  }

  .cards-2 .info-box p {
    font-size: 0.92rem;
    line-height: 1.6;
  }

  .steps-grid,
  .table-head,
  .table-row,
  .comparison-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 28px 20px;
  }

  .footer-brand-col {
    grid-column: 1 / -1;
  }

  .comp-body p {
    font-size: 0.88rem;
    line-height: 1.55;
  }

  .comp-header {
    padding: 12px 16px;
  }

  .timeline-head,
  .timeline-row {
    grid-template-columns: 1fr;
  }

  .timeline-head-bad {
    border-radius: 18px 18px 0 0;
  }

  .timeline-head-good {
    border-radius: 0;
  }

  .timeline-cell-right {
    border-left: none;
    border-top: 1px solid #eae8e4;
  }

  .timeline-cell {
    padding: 14px 16px;
  }

  .passport-metrics {
    grid-template-columns: 1fr;
  }

  .doc-row {
    grid-template-columns: 1fr;
    gap: 2px;
  }

  .doc-row-head {
    display: none;
  }

  .table-head p:nth-child(2),
  .table-row > div:nth-child(2) {
    border-top: 1px solid rgba(255, 255, 255, 0.18);
  }

  .footer-bottom {
    text-align: center;
  }

  .cookie {
    left: 8px;
    right: 8px;
    bottom: 8px;
    width: auto;
    transform: none;
    flex-direction: column;
    align-items: flex-start;
  }

  .cookie > div {
    width: 100%;
  }

  .cookie > div .btn {
    flex: 1;
  }
}

@media (max-width: 480px) {
  .shell {
    width: calc(100% - 18px);
  }

  .hero-title,
  .hero-title-second,
  .hero-title-third {
    font-size: clamp(1.7rem, 10.2vw, 2.2rem);
  }

  .hero-sub {
    font-size: clamp(0.96rem, 4.6vw, 1.08rem);
    line-height: 1.48;
  }

  .hero-actions {
    gap: 10px;
  }

  .hero-btn-primary,
  .hero-btn-secondary {
    min-height: 46px;
    font-size: 0.92rem;
  }

  .passport-card {
    padding: 12px;
  }

  .passport-metrics article {
    padding: 8px;
  }

  .doc-row {
    padding: 8px 10px;
  }
}

@media (max-width: 390px) {
  .header-row {
    min-height: 64px;
  }

  .brand img {
    width: 38px;
    height: 38px;
  }

  .brand span {
    font-size: 20px;
    line-height: 1.1;
  }

  .hero {
    padding: 30px 0 24px;
  }

  .hero-eyebrow {
    min-height: 34px;
    padding: 0 14px;
    letter-spacing: 0.18em;
    font-size: 0.66rem;
  }

  .hero-title,
  .hero-title-second,
  .hero-title-third {
    font-size: 2.05rem;
    line-height: 1.06;
    letter-spacing: -0.01em;
  }

  .section-title {
    font-size: 1.55rem;
    line-height: 1.08;
  }

  .section-text {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .why-wait-heading {
    font-size: 1.55rem;
    margin-bottom: 20px;
  }

  .why-wait-body p {
        font-size: 18px;
        line-height: 1.625;
        margin-bottom: 16px;
        color: rgb(35 29 69 / 0.7);
  }

  .whynow-title-line,
  .whynow-title-line-soft {
    font-size: 1.75rem;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .hero-sub {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 22px;
  }

  .hero-btn-primary,
  .hero-btn-secondary {
    min-height: 48px;
    font-size: 0.94rem;
    padding: 0 12px;
  }

  .passport-card {
    border-radius: 16px;
    padding: 14px;
  }

  .passport-card h2 {
    font-size: 1.08rem;
  }

  .passport-note {
    font-size: 12px;
    line-height: 17px;
  }
}

@media (max-width: 360px) {
  .brand {
    gap: 8px;
  }

  .brand img {
    width: 34px;
    height: 34px;
  }

  .brand span {
    font-size: 18px;
  }

  .hero-eyebrow {
    padding: 0 10px;
    letter-spacing: 0.14em;
  }

  .hero-title,
  .hero-title-second,
  .hero-title-third {
    font-size: 1.9rem;
  }

  .hero-btn-primary,
  .hero-btn-secondary {
    font-size: 0.88rem;
    padding: 0 10px;
  }

  .stat-box-whynow {
    min-height: auto;
    padding: 16px 14px;
  }
}

@media (max-width: 320px) {
  .shell {
    width: calc(100% - 14px);
  }

  .hero-title,
  .hero-title-second,
  .hero-title-third {
    font-size: 1.7rem;
  }

  .hero-sub {
    font-size: 0.92rem;
    line-height: 1.45;
  }

  .section-title {
    font-size: 1.35rem;
    line-height: 1.08;
  }

  .section-text,
  .stat-label,
  .info-box p,
  .issue-box p,
  .step-box p,
  .table-row p,
  .comparison-box p,
  .saved-sub,
  .cookie p {
    font-size: 0.88rem;
    line-height: 1.45;
  }

  .whynow-title-line,
  .whynow-title-line-soft {
    font-size: 1.5rem;
    line-height: 1.08;
    letter-spacing: -0.01em;
  }

  .why-wait-heading {
    font-size: 1.35rem;
    margin-bottom: 16px;
  }

  .why-wait-body p {
    font-size: 0.86rem;
    line-height: 1.45;
    margin-bottom: 14px;
  }

  .hero-btn-primary,
  .hero-btn-secondary,
  .btn {
    min-height: 44px;
    font-size: 0.84rem;
    padding: 0 10px;
  }

  .passport-card {
    padding: 10px;
  }

  .doc-row {
    padding: 7px 8px;
    font-size: 0.76rem;
  }
}
</style>
