"use client";

import { useEffect, useState } from "react";
import type { NavItem, SectionId } from "@/data/siteContent";

type NavbarProps = {
  items: NavItem[];
};

export function Navbar({ items }: NavbarProps) {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveOnScroll = () => {
      const anchorY = window.scrollY + 140;
      let current = sections[0]?.id as SectionId | undefined;

      sections.forEach((section) => {
        if (section.offsetTop <= anchorY) {
          current = section.id as SectionId;
        }
      });

      if (current) {
        setActive(current);
      }
    };

    updateActiveOnScroll();
    window.addEventListener("scroll", updateActiveOnScroll, { passive: true });
    window.addEventListener("hashchange", updateActiveOnScroll);

    return () => {
      window.removeEventListener("scroll", updateActiveOnScroll);
      window.removeEventListener("hashchange", updateActiveOnScroll);
    };
  }, [items]);

  return (
    <header className="sticky top-0 z-20 bg-background/95">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3 sm:px-10">
        <a
          href="#home"
          onClick={() => setActive("home")}
          className="text-2xl font-semibold tracking-tight text-accent-strong"
        >
          SK.
        </a>
        <nav aria-label="Section navigation" className="overflow-x-auto">
          <ul className="flex min-w-max items-center gap-5 text-sm font-medium text-muted sm:gap-6">
            {items.map((item) => {
              const isActive = item.id === active;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setActive(item.id)}
                    className={`pb-0.5 transition-colors hover:text-text ${
                      isActive
                        ? "border-b border-accent-strong text-accent-strong"
                        : "border-b border-transparent"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
