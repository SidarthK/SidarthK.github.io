import type { PersonalPhotoSlot } from "@/data/siteContent";

type PersonalSectionProps = {
  text: string;
  photoSlots: PersonalPhotoSlot[];
};

export function PersonalSection({ text, photoSlots }: PersonalSectionProps) {
  return (
    <div className="space-y-6">
      <p className="max-w-3xl leading-7 text-muted">{text}</p>
      <div className="grid gap-4 sm:grid-cols-3">
        {photoSlots.map((slot) => (
          <article key={slot.title} className="rounded-xl bg-surface p-3">
            <div className="flex h-36 items-center justify-center rounded-lg bg-background text-center text-sm text-muted">
              Photo Placeholder
            </div>
            <h3 className="mt-3 text-sm font-semibold text-text">{slot.title}</h3>
            <p className="mt-1 text-xs text-muted">{slot.note}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
