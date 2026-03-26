"use client"
import Link from "next/link"
import ArtisyncLogo from "@/components/ArtisyncLogo"
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '@/components/LanguageProvider'
import '@/lib/i18n'

const FooterItem = ({ text, link }: { text: string, link: string }) => {
  return (
    <li>
      <Link href={link} className="duration-200 hover:text-[var(--color-text)] transition-colors">
        {text}
      </Link>
    </li>
  )
}

const FooterBlockItem = ({ title, items }: { title: string, items: Array<{ id: number; link: string; text: string }> }) => {
  return (
    <div>
      <p className="footer__col-title">{title}</p>
      <ul className="footer__col-links">
        {
          items.map(item => (
            <FooterItem key={item.id} {...item} />
          ))
        }
      </ul>
    </div>
  )
}

export default function Footer() {
  const { t } = useTranslation()
  const { currentLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatches
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <footer className="footer mt-auto">
        <div className="container py-20" />
      </footer>
    )
  }

  const footerBlocks = [
    {
      id: 1,
      title: t('footer.quickLinks'),
      items: [
        { id: 1, text: t('footer.about'), link: '/about' },
        { id: 2, text: t('footer.howItWorks'), link: '/howitworks' },
        { id: 3, text: t('footer.successStories'), link: '/successstories' },
        { id: 4, text: t('footer.support'), link: '/support' },
      ],
    },
    {
      id: 2,
      title: t('footer.legal'),
      items: [
        { id: 1, text: t('footer.privacy'), link: '/policy' },
        { id: 2, text: t('footer.terms'), link: '/terms' },
        { id: 3, text: t('footer.cookies'), link: '/cookies' },
        { id: 4, text: t('footer.contact'), link: '/contact' },
      ],
    },
    {
      id: 3,
      title: t('footer.quickLinks'),
      items: [
        { id: 1, text: t('navbar.marketplace') || 'Marketplace', link: '/marketplace' },
        { id: 2, text: t('navbar.auctions') || 'Auctions', link: '/auctions' },
        { id: 3, text: t('home.bazaar3d') || '3D Bazaar', link: '/marketplace?view=3d' },
        { id: 4, text: t('navbar.reels') || 'Reels', link: '/reels' },
      ],
    },
  ]

  return (
    <footer className="footer mt-auto text-[var(--text)]">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link href="/" className="footer__brand-logo flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14">
                <ArtisyncLogo className="w-full h-full" />
              </div>
              <span className="footer__brand-text" key={`footer-brand-${currentLanguage}`}>{t('brand.name')}</span>
            </Link>
            <p className="footer__brand-desc">{t('footer.tagline')}</p>
            <div className="footer__social" aria-label="Social links">
              <Link href="/contact" aria-label="Contact">✦</Link>
              <Link href="/support" aria-label="Support">✧</Link>
              <Link href="/about" aria-label="About">◈</Link>
            </div>
            <div className="mt-6">
              <p className="footer__col-title mb-3">{t('footer.subscribeTitle')}</p>
              <form className="footer__newsletter-form">
                <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  className="footer__newsletter-input"
                />
                <button className="btn btn--primary" type="button">
                  {t('footer.subscribeBtn')}
                </button>
              </form>
            </div>
          </div>

          {footerBlocks.map((footerBlock) => (
            <FooterBlockItem key={footerBlock.id} {...footerBlock} />
          ))}
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">{t('footer.copyright')}</p>
          <p className="footer__attribution">{t('footer.communityBlurb')}</p>
          <div className="flex items-center gap-4">
            <Link href="/policy" className="footer__copy hover:text-[var(--color-text)]">{t('footer.privacy')}</Link>
            <Link href="/terms" className="footer__copy hover:text-[var(--color-text)]">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
