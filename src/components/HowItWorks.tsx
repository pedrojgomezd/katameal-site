'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ClipboardCheck, MapPin, Smile } from 'lucide-react';
import { Section } from './ui/Section';

const steps = [
  { icon: ClipboardCheck, key: 'step1', number: '01' },
  { icon: MapPin, key: 'step2', number: '02' },
  { icon: Smile, key: 'step3', number: '03' },
];

export function HowItWorks() {
  const t = useTranslations('howItWorks');

  return (
    <Section id="how-it-works" className="bg-background">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-white mb-4"
        >
          {t('title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-text-light max-w-2xl mx-auto"
        >
          {t('subtitle')}
        </motion.p>
      </div>

      <div className="relative">
        {/* Connection line - desktop only */}
        <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Number badge */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="absolute w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-text-white mb-4">
                  {t(`${step.key}Title`)}
                </h3>
                <p className="text-text-light">
                  {t(`${step.key}Description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

