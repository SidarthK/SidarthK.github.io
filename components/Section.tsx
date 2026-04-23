import type { ReactNode } from "react";
import type { SectionId } from "@/data/siteContent";

type SectionProps = {
  id: SectionId;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 py-10 sm:py-12">
      <div className="mb-5 flex items-end justify-between">
        <h2 id={`${id}-title`} className="inline-flex items-center text-xl font-semibold tracking-tight text-text sm:text-2xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
