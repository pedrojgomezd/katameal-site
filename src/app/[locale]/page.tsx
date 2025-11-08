import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { WeeklyMenu } from '@/components/WeeklyMenu';
import { Pricing } from '@/components/Pricing';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      {/* <WeeklyMenu /> */}
      <Pricing />
      <ContactForm />
      <Footer />
    </main>
  );
}

