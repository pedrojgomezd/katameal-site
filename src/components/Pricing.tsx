'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, Star, Sparkles } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export function Pricing() {
  const t = useTranslations('pricing');

  const plans = [
    {
      id: 1,
      name: t('plan1Name'),
      price: t('plan1Price'),
      description: t('plan1Description'),
      features: [
        t('plan1Feature1'),
        t('plan1Feature2'),
        t('plan1Feature3'),
        t('plan1Feature4'),
      ],
      popular: false,
      bestValue: false,
    },
    {
      id: 2,
      name: t('plan2Name'),
      price: t('plan2Price'),
      description: t('plan2Description'),
      features: [
        t('plan2Feature1'),
        t('plan2Feature2'),
        t('plan2Feature3'),
        t('plan2Feature4'),
      ],
      popular: false,
      bestValue: false,
    },
    {
      id: 3,
      name: t('plan3Name'),
      price: t('plan3Price'),
      description: t('plan3Description'),
      features: [
        t('plan3Feature1'),
        t('plan3Feature2'),
        t('plan3Feature3'),
        t('plan3Feature4'),
      ],
      popular: false,
      bestValue: false,
    },
    {
      id: 4,
      name: t('plan4Name'),
      price: t('plan4Price'),
      description: t('plan4Description'),
      features: [
        t('plan4Feature1'),
        t('plan4Feature2'),
        t('plan4Feature3'),
        t('plan4Feature4'),
      ],
      popular: false,
      bestValue: false,
    },
    {
      id: 5,
      name: t('plan5Name'),
      price: t('plan5Price'),
      description: t('plan5Description'),
      features: [
        t('plan5Feature1'),
        t('plan5Feature2'),
        t('plan5Feature3'),
        t('plan5Feature4'),
      ],
      popular: true,
      bestValue: false,
    },
    {
      id: 6,
      name: t('plan6Name'),
      price: t('plan6Price'),
      description: t('plan6Description'),
      features: [
        t('plan6Feature1'),
        t('plan6Feature2'),
        t('plan6Feature3'),
        t('plan6Feature4'),
      ],
      popular: false,
      bestValue: true,
    },
  ];

  return (
    <Section id="pricing" className="bg-linear-to-b from-primary/5 to-background">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            // style={{ padding: '1rem' }}
            className={`relative rounded-2xl p-8 lg:p-8 flex flex-col ${
              plan.popular
                ? 'bg-linear-to-br from-primary to-primary-dark border-2 border-secondary shadow-2xl shadow-secondary/30 md:scale-105'
                : plan.bestValue
                ? 'bg-linear-to-br from-primary/20 to-secondary/10 border-2 border-primary shadow-xl'
                : 'bg-linear-to-br from-primary/10 to-secondary/5 border border-primary/20'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-linear-to-r from-secondary to-secondary-dark rounded-full flex items-center gap-1 shadow-lg">
                <Star className="w-3 h-3 text-white fill-white" />
                <span className="text-xs font-bold text-white">{t('mostPopular')}</span>
              </div>
            )}

            {plan.bestValue && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-linear-to-r from-primary to-primary-dark rounded-full flex items-center gap-1 shadow-lg">
                <Sparkles className="w-3 h-3 text-white" />
                <span className="text-xs font-bold text-white">{t('bestValue')}</span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-xl lg:text-2xl font-bold text-text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-text-light mb-4">{plan.description}</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl lg:text-5xl font-bold text-text-white">{plan.price}</span>
                <span className="text-sm text-text-light">/ {t('perWeek')}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-6 grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="shrink-0 w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-sm text-text-light">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={plan.popular ? 'secondary' : plan.bestValue ? 'primary' : 'outline'}
              className="w-full mt-auto"
              size="md"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('selectPlan')}
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

