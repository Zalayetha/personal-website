import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`flex flex-col lg:px-32 lg:py-8 px-12 py-8 ${className}`}>
      {children}
    </section>
  );
}
