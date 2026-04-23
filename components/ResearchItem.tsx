import type { ResearchEntry } from "@/data/siteContent";

type ResearchItemProps = {
  item: ResearchEntry;
  interests: string;
};

export function ResearchItem({ item, interests }: ResearchItemProps) {
  return (
    <div className="space-y-5">
      <article className="space-y-2 border-l border-accent-soft pl-4 sm:pl-5">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-base font-semibold text-text">{item.title}</h3>
          <p className="text-sm text-accent">{item.dates}</p>
        </div>
        <ul className="list-disc space-y-1 pl-5 text-muted marker:text-accent">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </article>
      <p className="leading-7 text-muted">
        <span className="font-medium text-accent-strong">Research interests:</span> {interests}
      </p>
    </div>
  );
}
