'use client'
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

const statTargets = [4200, 85000, 24, 38]
const CRAFT_IMAGES = {
  saree: '/saree.jpg',
  pottery: '/pottery.jpg',
  jewelry: '/gold%26jwellery.jpg',
  warli: 'https://commons.wikimedia.org/wiki/Special:FilePath/A_Warli_painting_by_Jivya_Soma_Mashe,_Thane_district.jpg',
  madhubani: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mithila_Painting_at_Patna_Junction.jpg',
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)
  const [counts, setCounts] = useState([0, 0, 0, 0])

  const faqItems = useMemo(
    () => [
      {
        q: 'How do I know the crafts are authentic?',
        a: "Each listing is verified using image-based AI checks and a regional artisan verification process. Every purchase includes a digital authenticity certificate and craft provenance details.",
      },
      {
        q: 'Can I commission a custom piece?',
        a: 'Yes. You can message artisans directly, discuss materials and dimensions, and confirm timelines before placing your order. Artisync supports custom workflows with direct artisan communication.',
      },
      {
        q: 'How does the 3D Bazaar work?',
        a: 'The 3D Bazaar is browser-based and mobile-friendly. You can walk through virtual stalls, inspect products, and connect with live artisans without installing special software.',
      },
      {
        q: "I'm an artisan, how do I join?",
        a: 'Create an artisan account, upload your products, and complete onboarding. Listing assistance and AI-powered content generation are provided to help you launch faster.',
      },
      {
        q: 'What payment methods are accepted?',
        a: 'Artisync supports UPI, cards, net banking, and major international gateways. Secure checkout and order-tracking are available for both domestic and global buyers.',
      },
    ],
    []
  )

  useEffect(() => {
    const statsSection = document.getElementById('stats')
    if (!statsSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.35 }
    )

    observer.observe(statsSection)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!statsVisible) return

    const duration = 1800
    const startedAt = performance.now()
    let raf = 0

    const tick = (time: number) => {
      const elapsed = time - startedAt
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCounts(statTargets.map((target) => Math.round(target * eased)))

      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [statsVisible])

  return (
    <div>
      <section className="hero" id="hero" aria-label="Hero">
        <div className="hero__bg" role="img" aria-label="Vibrant Indian handwoven textiles in rich colors">
          <img
            src={CRAFT_IMAGES.saree}
            alt="Handwoven Indian textiles with rich colors and intricate patterns"
          />
        </div>
        <div className="hero__overlay" aria-hidden="true" />

        <div className="hero__content">
          <div className="hero__eyebrow">
            <span>24 Indian Languages · AI-Powered · Live Auctions</span>
          </div>

          <h1 className="hero__heading">
            Where Craft
            <br />
            Finds Its <em>World</em>
          </h1>

          <p className="hero__subheading">
            India&apos;s immersive artisan marketplace. Discover handmade textiles, jewelry, pottery, and living traditions from 4,200+ master craftspeople.
          </p>

          <div className="hero__ctas">
            <Link href="/marketplace" className="btn btn--hero-primary">
              Browse Collections
            </Link>
            <Link href="/marketplace?view=3d" className="btn btn--hero-ghost">
              Enter 3D Bazaar
            </Link>
          </div>
        </div>

        <div className="hero__scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="1" y="1" width="14" height="14" rx="7" ry="7" />
            <line x1="8" y1="5" x2="8" y2="9" />
          </svg>
        </div>
      </section>

      <section className="heritage" id="artisans" aria-labelledby="heritage-title">
        <div className="container">
          <div className="heritage__inner">
            <div className="heritage__text">
              <span className="label-tag">Our Purpose</span>
              <h2 className="heritage__heading" id="heritage-title">
                A living archive of
                <br />
                <strong>India&apos;s craft memory</strong>
              </h2>
              <p className="heritage__body">
                For centuries, artisan families have woven knowledge into cloth, clay, and metal. Artisync connects these makers directly with the world so every tradition has a digital stage.
              </p>
              <p className="heritage__body">
                From Bengal embroiderers to Chhattisgarh metalworkers, each stall reflects a living cultural lineage.
              </p>
              <div className="flex gap-8 pt-6 border-t border-[var(--color-border)]">
                <div>
                  <span className="block font-display text-2xl text-[var(--color-primary)]">4,200+</span>
                  <span className="text-xs uppercase tracking-[0.08em] text-faint">Artisans</span>
                </div>
                <div>
                  <span className="block font-display text-2xl text-[var(--color-primary)]">24</span>
                  <span className="text-xs uppercase tracking-[0.08em] text-faint">Languages</span>
                </div>
                <div>
                  <span className="block font-display text-2xl text-[var(--color-primary)]">29</span>
                  <span className="text-xs uppercase tracking-[0.08em] text-faint">States</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="heritage__image-frame aspect-[4/5]">
                <img
                  src={CRAFT_IMAGES.pottery}
                  alt="Indian artisan at a handloom weaving traditional fabric"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-[140px] h-[140px] border-2 border-[var(--color-gold)] rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="collections" id="collections" aria-labelledby="collections-title">
        <div className="container">
          <div className="collections__header">
            <div>
              <span className="label-tag">Featured Collections</span>
              <h2 className="collections__title" id="collections-title">
                Handcrafted with
                <br />
                <em>centuries of intent</em>
              </h2>
            </div>
            <Link href="/marketplace" className="btn btn--ghost">
              View All
            </Link>
          </div>

          <div className="collections__grid">
            <Link href="/marketplace?category=Textiles" className="collection-card" aria-label="Explore Handwoven Textiles">
              <img
                className="collection-card__img"
                src={CRAFT_IMAGES.saree}
                alt="Colorful Indian handwoven textiles"
              />
              <div className="collection-card__overlay" aria-hidden="true" />
              <div className="collection-card__body">
                <span className="collection-card__tag">Heritage Craft</span>
                <h3 className="collection-card__name">Handwoven Textiles</h3>
                <p className="collection-card__desc">Ikat, kantha, jamdani, and khadi from India&apos;s most celebrated weaving traditions.</p>
                <span className="collection-card__arrow">Explore Collection</span>
              </div>
            </Link>

            <Link href="/marketplace?category=Jewelry" className="collection-card" aria-label="Explore Artisan Jewelry">
              <img
                className="collection-card__img"
                src={CRAFT_IMAGES.jewelry}
                alt="Intricate Indian artisan jewelry"
              />
              <div className="collection-card__overlay" aria-hidden="true" />
              <div className="collection-card__body">
                <span className="collection-card__tag">Adornment</span>
                <h3 className="collection-card__name">Artisan Jewelry</h3>
                <p className="collection-card__desc">Kundan, meenakari, and tribal silverwork by master jewelers.</p>
                <span className="collection-card__arrow">Explore</span>
              </div>
            </Link>

            <Link href="/marketplace?category=Decor" className="collection-card" aria-label="Explore Pottery & Ceramics">
              <img
                className="collection-card__img"
                src={CRAFT_IMAGES.pottery}
                alt="Terracotta pottery"
              />
              <div className="collection-card__overlay" aria-hidden="true" />
              <div className="collection-card__body">
                <span className="collection-card__tag">Earth & Clay</span>
                <h3 className="collection-card__name">Pottery & Ceramics</h3>
                <p className="collection-card__desc">Terracotta, blue pottery, and wheel-thrown forms from master potters.</p>
                <span className="collection-card__arrow">Explore</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="how-it-works" id="how-it-works" aria-labelledby="hiw-title">
        <div className="container">
          <div className="how-it-works__layout">
            <div>
              <span className="label-tag">The Process</span>
              <h2 className="how-it-works__heading" id="hiw-title">
                From the artisan&apos;s
                <br />
                hands to yours
              </h2>
              <p className="how-it-works__intro">
                No middlemen. No guesswork. Every purchase is a direct relationship between you and the craftsperson.
              </p>

              <ol className="steps" role="list">
                <li className="step">
                  <span className="step__num">01</span>
                  <div>
                    <h3 className="step__title">Browse & Discover</h3>
                    <p className="step__desc">Explore curated collections, live auction rooms, or the immersive 3D bazaar.</p>
                  </div>
                </li>
                <li className="step">
                  <span className="step__num">02</span>
                  <div>
                    <h3 className="step__title">Connect with the Maker</h3>
                    <p className="step__desc">Chat in regional languages, request custom pieces, and follow real craft stories.</p>
                  </div>
                </li>
                <li className="step">
                  <span className="step__num">03</span>
                  <div>
                    <h3 className="step__title">Collect with Confidence</h3>
                    <p className="step__desc">AI-assisted verification and artisan transparency make every purchase trustworthy.</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="how-it-works__visual">
              <div className="how-it-works__img-main aspect-[4/5]">
                <img
                  src={CRAFT_IMAGES.saree}
                  alt="Colorful silk sarees displayed in a market stall"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bazaar" id="bazaar" aria-labelledby="bazaar-title">
        <div className="bazaar__bg" role="img" aria-label="Traditional artisan workspace">
          <img
            src={CRAFT_IMAGES.pottery}
            alt="Traditional Indian artisan weaving"
          />
        </div>
        <div className="bazaar__overlay" aria-hidden="true" />
        <div className="bazaar__texture" aria-hidden="true" />

        <div className="bazaar__content">
          <div className="bazaar__inner container">
            <div>
              <span className="label-tag">New Feature</span>
              <h2 className="bazaar__heading" id="bazaar-title">
                Step inside
                <br />
                the <em>3D Bazaar</em>
              </h2>
              <p className="bazaar__body">
                Walk through a digital marketplace inspired by India&apos;s historic bazaars. Browse stalls, inspect products, and connect directly with artisans.
              </p>

              <div className="bazaar__features">
                <div className="bazaar__feature">
                  <div className="bazaar__feature-icon">◉</div>
                  <div>
                    <div className="bazaar__feature-name">360 Product Views</div>
                    <div className="bazaar__feature-desc">Inspect details as if the craft is in your hands.</div>
                  </div>
                </div>
                <div className="bazaar__feature">
                  <div className="bazaar__feature-icon">◎</div>
                  <div>
                    <div className="bazaar__feature-name">Live Artisan Chat</div>
                    <div className="bazaar__feature-desc">Ask questions, discuss techniques, and request custom work.</div>
                  </div>
                </div>
                <div className="bazaar__feature">
                  <div className="bazaar__feature-icon">✦</div>
                  <div>
                    <div className="bazaar__feature-name">Live Auctions</div>
                    <div className="bazaar__feature-desc">Bid on one-of-a-kind pieces in timed events.</div>
                  </div>
                </div>
              </div>

              <Link href="/marketplace?view=3d" className="btn btn--outline-gold">
                Enter the Bazaar
              </Link>
            </div>

            <div className="bazaar__mockup">
              <div className="bazaar__mockup-frame aspect-[4/3]">
                <img
                  src={CRAFT_IMAGES.saree}
                  alt="3D bazaar interface preview"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-features" id="ai-features" aria-labelledby="ai-title">
        <div className="container">
          <div className="ai-features__header mb-12">
            <span className="label-tag mb-4">AI Studio</span>
            <h2 className="ai-features__title" id="ai-title">
              Intelligence in
              <br />
              service of <em>craft</em>
            </h2>
          </div>

          <div className="ai-features__grid">
            <div className="ai-card ai-card--wide">
              <div className="ai-card__visual">
                <img
                  src={CRAFT_IMAGES.saree}
                  alt="AI-enhanced product photography"
                />
              </div>
              <div className="ai-card__body">
                <span className="ai-card__eyebrow">Sell Better</span>
                <h3 className="ai-card__title">AI Photo Enhancement</h3>
                <p className="ai-card__desc">Convert phone photos into studio-ready product visuals with auto cleanup and color correction.</p>
              </div>
            </div>

            <div className="ai-card">
              <div className="ai-card__visual">
                <img
                  src={CRAFT_IMAGES.warli}
                  alt="Artisan story generation"
                />
              </div>
              <div className="ai-card__body">
                <span className="ai-card__eyebrow">Heritage Stories</span>
                <h3 className="ai-card__title">Craft Story Generator</h3>
                <p className="ai-card__desc">Generate rich artisan narratives from simple interviews in local languages.</p>
              </div>
            </div>

            <div className="ai-card">
              <div className="ai-card__visual">
                <img
                  src={CRAFT_IMAGES.madhubani}
                  alt="Smart curation"
                />
              </div>
              <div className="ai-card__body">
                <span className="ai-card__eyebrow">Discover</span>
                <h3 className="ai-card__title">Smart Curation</h3>
                <p className="ai-card__desc">Recommendations tuned to your material, craft, and price preferences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats" id="stats" aria-labelledby="stats-title">
        <div className="container stats__inner">
          <div className="stats__header">
            <span className="stats__eyebrow">By the Numbers</span>
            <h2 className="stats__title" id="stats-title">
              A marketplace rooted in real lives,
              <br />
              real hands, real stories
            </h2>
          </div>

          <div className="stats__grid">
            <div className="stat-item">
              <div className="stat-item__num">
                {counts[0].toLocaleString('en-IN')}<span className="stat-item__suffix">+</span>
              </div>
              <div className="stat-item__label">Active Artisans</div>
              <div className="stat-item__sublabel">across 29 states</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__num">
                {counts[1].toLocaleString('en-IN')}<span className="stat-item__suffix">+</span>
              </div>
              <div className="stat-item__label">Handcrafted Pieces</div>
              <div className="stat-item__sublabel">listed and sold</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__num">{counts[2].toLocaleString('en-IN')}</div>
              <div className="stat-item__label">Indian Languages</div>
              <div className="stat-item__sublabel">fully supported</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__num">
                {counts[3].toLocaleString('en-IN')}<span className="stat-item__suffix">+</span>
              </div>
              <div className="stat-item__label">Countries Reached</div>
              <div className="stat-item__sublabel">global collector community</div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq" id="faq" aria-labelledby="faq-title">
        <div className="container">
          <div className="faq__layout">
            <div className="faq__sidebar">
              <span className="label-tag">FAQ</span>
              <h2 className="faq__sidebar-title" id="faq-title">
                Questions
                <br />
                from collectors
              </h2>
              <p className="faq__sidebar-body">
                Everything you need to know before making your first purchase or opening your artisan stall.
              </p>
              <Link href="/support" className="btn btn--primary">
                Contact Support
              </Link>
            </div>

            <div className="faq__list">
              {faqItems.map((item, idx) => {
                const open = openFaq === idx
                return (
                  <div key={item.q} className={`faq-item ${open ? 'open' : ''}`}>
                    <button
                      className="faq-item__trigger"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? -1 : idx)}
                    >
                      <span className="faq-item__question">{item.q}</span>
                      <svg className="faq-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </button>
                    <div className="faq-item__answer">
                      <div className="faq-item__answer-inner">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
