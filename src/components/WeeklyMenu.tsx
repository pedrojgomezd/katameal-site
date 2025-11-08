'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Flame, Apple, Wheat, Droplet, Sparkles } from 'lucide-react';
import { Section } from './ui/Section';

const mealEmojis = ['🍗', '🥩', '🐟', '🍝', '🌮', '🥩'];

export function WeeklyMenu() {
  const t = useTranslations('weeklyMenu');

  const weekDays = [
    { day: t('monday'), key: 'meal1' },
    { day: t('tuesday'), key: 'meal2' },
    { day: t('wednesday'), key: 'meal3' },
    { day: t('thursday'), key: 'meal4' },
    { day: t('friday'), key: 'meal5' },
    { day: t('saturday'), key: 'meal6', special: true },
  ];

  return (
    <Section id="weekly-menu" className="bg-linear-to-b from-background to-primary/5 py-12 md:py-16">
      <div className="text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-white mb-3"
        >
          {t('title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-lg text-text-light max-w-2xl mx-auto"
        >
          {t('subtitle')}
        </motion.p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative w-full overflow-hidden">
        <div className="overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide">
          <div className="flex gap-4 md:gap-6 px-4 md:px-0 min-w-max">
            {weekDays.map((item, index) => {
            const mealTitle = t(`${item.key}Title`);
            const mealDescription = t(`${item.key}Description`);
            const calories = t(`${item.key}Calories`);
            const protein = t(`${item.key}Protein`);
            const carbs = t(`${item.key}Carbs`);
            const fats = t(`${item.key}Fats`);

            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative shrink-0 w-[280px] md:w-[320px] snap-start bg-linear-to-br from-primary/10 to-secondary/5 rounded-xl overflow-hidden border border-primary/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20"
              >
                {/* Day Badge */}
                <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-background/90 backdrop-blur-sm rounded-full border border-primary/30">
                  <span className="text-xs font-semibold text-text-white">{item.day}</span>
                </div>

                {/* Special Badge for Saturday */}
                {item.special && (
                  <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-linear-to-r from-secondary to-secondary-dark rounded-full shadow-lg">
                    <div className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-white" />
                      <span className="text-xs font-bold text-white">{t('special')}</span>
                    </div>
                  </div>
                )}

                {/* Meal Image Placeholder - Más compacto */}
                <div className="relative h-32 bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
                  <span className="text-5xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {mealEmojis[index]}
                  </span>
                </div>

                {/* Meal Content - Más compacto */}
                <div className="p-4">
                  <h3 className="text-base font-bold text-text-white mb-2 line-clamp-2">
                    {mealTitle}
                  </h3>

                  <p className="text-xs text-text-light mb-3 line-clamp-2">
                    {mealDescription}
                  </p>

                  {/* Nutrition Info - Compacto */}
                  <div className="space-y-2">
                    {/* Calories - Inline compacto */}
                    <div className="flex items-center justify-between p-2 bg-background/50 rounded-lg">
                      <div className="flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-secondary" />
                        <span className="text-xs font-medium text-text-light">{t('calories')}</span>
                      </div>
                      <span className="text-sm font-bold text-text-white">{calories}</span>
                    </div>

                    {/* Macros Grid - Más compacto */}
                    <div className="grid grid-cols-3 gap-1.5">
                      {/* Protein */}
                      <div className="flex flex-col items-center p-1.5 bg-background/30 rounded-lg">
                        <Apple className="w-3 h-3 text-primary mb-1" />
                        <span className="text-[10px] text-text-light mb-0.5">{t('protein')}</span>
                        <span className="text-xs font-bold text-text-white">{protein}</span>
                      </div>

                      {/* Carbs */}
                      <div className="flex flex-col items-center p-1.5 bg-background/30 rounded-lg">
                        <Wheat className="w-3 h-3 text-secondary mb-1" />
                        <span className="text-[10px] text-text-light mb-0.5">{t('carbs')}</span>
                        <span className="text-xs font-bold text-text-white">{carbs}</span>
                      </div>

                      {/* Fats */}
                      <div className="flex flex-col items-center p-1.5 bg-background/30 rounded-lg">
                        <Droplet className="w-3 h-3 text-primary mb-1" />
                        <span className="text-[10px] text-text-light mb-0.5">{t('fats')}</span>
                        <span className="text-xs font-bold text-text-white">{fats}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-6">
          <p className="text-xs text-text-light/70 flex items-center justify-center gap-2">
            <span>←</span>
            <span>Desliza para ver más</span>
            <span>→</span>
          </p>
        </div>
      </div>
    </Section>
  );
}

