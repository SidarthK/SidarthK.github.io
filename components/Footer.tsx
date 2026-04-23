type FooterProps = {
  name: string;
  note: string;
};

export function Footer({ name, note }: FooterProps) {
  return (
    <footer className="py-8 text-sm text-muted">
      <div className="mx-auto flex max-w-4xl flex-col gap-1 px-6 sm:px-10">
        <p className="text-text">{name}</p>
        <p>{note}</p>
      </div>
    </footer>
  );
}
