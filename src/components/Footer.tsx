'use client';

import { useTranslations } from 'next-intl';
import { Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import { Container } from './ui/Container';

export function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#features', label: nav('features') },
    { href: '#how-it-works', label: nav('howItWorks') },
    { href: '#pricing', label: nav('pricing') },
    { href: '#contact', label: nav('contact') },
  ];

  const legalLinks = [
    { href: '#', label: t('privacy') },
    { href: '#', label: t('terms') },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-primary/10 border-t border-primary/20">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                Katameal
              </h3>
              <p className="text-text-light mb-6 max-w-md">
                {t('description')}
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-lg flex items-center justify-center transition-colors duration-200"
                    >
                      <Icon className="w-5 h-5 text-text-white" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-text-white font-bold mb-4">{t('quickLinks')}</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-text-light hover:text-secondary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-text-white font-bold mb-4">{t('contact')}</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${t('email')}`}
                    className="flex items-center gap-2 text-text-light hover:text-secondary transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{t('email')}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${t('phone').replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-text-light hover:text-secondary transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{t('phone')}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-text-light text-sm text-center md:text-left">
                © {currentYear} Katameal. {t('rights')}
              </p>
              <div className="flex gap-6">
                {legalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-text-light hover:text-secondary text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

