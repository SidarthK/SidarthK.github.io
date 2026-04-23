import Image from "next/image";
import type { LinkItem } from "@/data/siteContent";

type HeroSectionProps = {
  name: string;
  headshotSrc: string;
  intro: string;
  summary: string;
  links: LinkItem[];
};

export function HeroSection({ name, headshotSrc, intro, summary, links }: HeroSectionProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-[140px_1fr] sm:gap-8">
      <div className="relative hidden h-36 w-36 overflow-hidden rounded-md bg-surface sm:mt-5 sm:block">
        <Image src={headshotSrc} alt={`${name} headshot`} fill sizes="144px" className="object-cover" />
      </div>
      <div className="space-y-5">
        <h1 className="text-2xl font-semibold tracking-tight text-accent-strong sm:text-3xl">{name}</h1>
        <p className="max-w-3xl leading-7 text-muted">{intro}</p>
        <p className="max-w-3xl leading-7 text-muted">{summary}</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-accent">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="underline decoration-accent-soft underline-offset-4 transition-colors hover:text-accent-strong"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
