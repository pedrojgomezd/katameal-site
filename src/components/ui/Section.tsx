import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  id?: string;
}

export function Section({ children, className, containerSize = 'lg', id }: SectionProps) {
  return (
    <section id={id} className={clsx('py-16 md:py-24', className)}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

