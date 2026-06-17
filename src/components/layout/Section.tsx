import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`flex flex-col lg:px-64 lg:py-4 px-12 py-8 ${className}`}
    >
      {children}
    </section>
  );
}
