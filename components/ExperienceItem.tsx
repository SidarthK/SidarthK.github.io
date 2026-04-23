import type { ExperienceEntry } from "@/data/siteContent";

type ExperienceItemProps = {
  item: ExperienceEntry;
};

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article className="space-y-2 rounded-xl bg-surface p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-base font-bold text-accent-deep">
            {item.organization} <span className="font-normal text-muted">— {item.role}</span>
          </h3>
        </div>
        <p className="text-sm text-muted sm:whitespace-nowrap">{item.dates}</p>
      </div>
      <div className="space-y-1.5">
        {item.summaryLines.map((line) => (
          <p key={line} className="leading-6 text-muted">
            {line}
          </p>
        ))}
      </div>
    </article>
  );
}
