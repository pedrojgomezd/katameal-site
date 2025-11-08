'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Truck, Utensils, Calendar, Clock, CheckCircle, Award } from 'lucide-react';
import { Section } from './ui/Section';

const features = [
  { icon: Truck, key: 'feature1' },
  { icon: Utensils, key: 'feature2' },
  { icon: Calendar, key: 'feature3' },
  { icon: Clock, key: 'feature4' },
  { icon: CheckCircle, key: 'feature5' },
  { icon: Award, key: 'feature6' },
];

export function Features() {
  const t = useTranslations('features');

  return (
    <Section id="features" className="bg-gradient-to-b from-background to-primary/5">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-primary/10 to-secondary/5 p-8 rounded-xl border border-primary/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20"
            >
              <div className="mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-text-white mb-3">
                {t(`${feature.key}Title`)}
              </h3>
              <p className="text-text-light">
                {t(`${feature.key}Description`)}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

