'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, X } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export function ContactForm() {
  const t = useTranslations('contact');
  const v = useTranslations('validation');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [selectedPlan, setSelectedPlan] = useState<{ id: string; name: string } | null>(null);

  const parseHashParams = () => {
    if (typeof window === 'undefined') return null;
    const hash = window.location.hash;
    if (hash.includes('?')) {
      const params = new URLSearchParams(hash.split('?')[1]);
      const planId = params.get('plan');
      const planName = params.get('planName');
      if (planId && planName) {
        return { id: planId, name: decodeURIComponent(planName) };
      }
    }
    return null;
  };

  useEffect(() => {
    // Check on mount
    const plan = parseHashParams();
    if (plan) {
      setSelectedPlan(plan);
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const plan = parseHashParams();
      if (plan) {
        setSelectedPlan(plan);
      } else {
        setSelectedPlan(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const formSchema = z.object({
    name: z.string().min(2, v('nameMin')),
    email: z.string().email(v('emailInvalid')),
    phone: z.string().min(10, v('phoneInvalid')),
    company: z.string().optional(),
    location: z.string().min(1, v('locationRequired')),
    message: z.string().min(10, v('messageMin')).optional(),
    plan: z.string().optional(),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plan: selectedPlan?.name || '',
    },
  });

  useEffect(() => {
    if (selectedPlan) {
      setValue('plan', selectedPlan.name);
    }
  }, [selectedPlan, setValue]);

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    
    // Format WhatsApp message
    const whatsappNumber = '19728961209';
    let message = `¡Hola! Me interesa solicitar información sobre el plan: ${data.plan || 'No especificado'}\n\n`;
    message += `*Información de contacto:*\n`;
    message += `Nombre: ${data.name}\n`;
    message += `Email: ${data.email}\n`;
    message += `Teléfono: ${data.phone}\n`;
    if (data.company) {
      message += `Empresa: ${data.company}\n`;
    }
    message += `Ubicación del sitio: ${data.location}\n`;
    if (data.message) {
      message += `\nMensaje: ${data.message}`;
    }
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setStatus('success');
    reset();
    setSelectedPlan(null);

    // Reset status after 5 seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

  const clearSelectedPlan = () => {
    setSelectedPlan(null);
    setValue('plan', '');
    // Remove from URL hash
    const hash = window.location.hash;
    if (hash.includes('?')) {
      const [hashPart, queryPart] = hash.split('?');
      const params = new URLSearchParams(queryPart);
      params.delete('plan');
      params.delete('planName');
      const newHash = params.toString() ? `${hashPart}?${params.toString()}` : hashPart;
      window.history.replaceState({}, '', newHash);
    }
  };

  return (
    <Section id="contact" className="bg-gradient-to-b from-background to-primary/10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
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
            className="text-lg text-text-light"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary/10 to-secondary/5 p-8 md:p-12 rounded-2xl border border-primary/20 shadow-xl"
        >
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/20 rounded-full mb-6">
                <CheckCircle className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-text-white mb-4">{t('successTitle')}</h3>
              <p className="text-text-light mb-8">{t('successMessage')}</p>
              <Button onClick={() => setStatus('idle')} variant="secondary">
                {t('submit')} {t('submit') === 'Submit Request' ? 'Another' : 'Otra Solicitud'}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {selectedPlan && (
                <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-text-light mb-1">Plan seleccionado:</p>
                    <p className="text-lg font-bold text-secondary">{selectedPlan.name}</p>
                  </div>
                  <button
                    type="button"
                    onClick={clearSelectedPlan}
                    className="p-2 hover:bg-secondary/30 rounded-full transition-colors"
                    aria-label="Eliminar plan seleccionado"
                  >
                    <X className="w-5 h-5 text-text-light" />
                  </button>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder={t('namePlaceholder')}
                    className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-text-white placeholder-text-light/50 focus:outline-none focus:border-secondary transition-colors"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-secondary flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-text-white placeholder-text-light/50 focus:outline-none focus:border-secondary transition-colors"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-secondary flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    {...register('phone')}
                    type="tel"
                    placeholder={t('phonePlaceholder')}
                    className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-text-white placeholder-text-light/50 focus:outline-none focus:border-secondary transition-colors"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-secondary flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register('company')}
                    type="text"
                    placeholder={t('companyPlaceholder')}
                    className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-text-white placeholder-text-light/50 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
              </div>

              <div>
                <input
                  {...register('location')}
                  type="text"
                  placeholder={t('jobSitePlaceholder')}
                  className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-text-white placeholder-text-light/50 focus:outline-none focus:border-secondary transition-colors"
                />
                {errors.location && (
                  <p className="mt-1 text-sm text-secondary flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.location.message}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder={t('messagePlaceholder')}
                  className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-text-white placeholder-text-light/50 focus:outline-none focus:border-secondary transition-colors resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-secondary flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              <input type="hidden" {...register('plan')} />
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="w-full"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {t('submitting')}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Solicitar Información
                    <Send className="w-5 h-5" />
                  </span>
                )}
              </Button>

              {status === 'error' && (
                <div className="text-center text-secondary">
                  {t('errorMessage')}
                </div>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}

