import type { LeadershipTimelineStep, TimelineEntry } from "@/data/siteContent";

type LeadershipBlockProps = {
  main: TimelineEntry;
  steps: LeadershipTimelineStep[];
};

export function LeadershipBlock({ main, steps }: LeadershipBlockProps) {
  return (
    <div className="space-y-7">
      <article className="space-y-2 border-l border-accent-soft pl-4 sm:pl-5">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-base font-semibold text-text">
            {main.organization} <span className="font-normal text-accent">— {main.role}</span>
          </h3>
          <p className="text-sm text-accent">{main.dates}</p>
        </div>
        <ul className="list-disc space-y-1 pl-5 text-muted marker:text-accent">
          {main.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </article>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">Involvement Over Time</h3>
        <ol className="mt-3 space-y-3">
          {steps.map((step, index) => (
            <li key={step.label} className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent-strong" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-accent-strong">
                  {index + 1}. {step.label}
                </p>
                <p className="text-sm leading-6 text-muted">{step.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
