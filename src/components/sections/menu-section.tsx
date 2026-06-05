import type { Dictionary } from "@/types/i18n";

interface MenuSectionProps {
  dictionary: Dictionary;
}

export function MenuSection({ dictionary }: MenuSectionProps) {
  return (
    <section id="menu" className="section-shell scroll-mt-28 py-18 md:py-24">
      <div className="mb-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="space-y-3">
          <p className="eyebrow">{dictionary.menu.eyebrow}</p>
          <h2 className="balanced-text max-w-3xl font-serif text-5xl text-foreground sm:text-6xl lg:text-7xl">
            {dictionary.menu.title}
          </h2>
        </div>
        <div className="section-card rounded-[2rem] p-6">
          <p className="text-base leading-7 text-muted-foreground">
            {dictionary.menu.description}
          </p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="section-card rounded-[2.2rem] p-6 sm:p-8">
          <div className="mb-6 flex flex-wrap gap-2">
            {dictionary.menu.categories.map((category) => (
              <span
                key={category}
                className="rounded-full bg-primary/12 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-primary uppercase"
              >
                {category}
              </span>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {dictionary.menu.items.map((item) => (
              <article
                key={item.name}
                className="rounded-[1.8rem] border border-border/65 bg-background/55 p-5 dark:bg-background/25"
              >
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl sm:text-3xl text-foreground">
                    {item.name}
                  </h3>
                  <span className="rounded-full bg-secondary/15 px-3 py-1 text-sm font-semibold text-secondary">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          {dictionary.menu.sideNotes.map((note) => (
            <div
              key={note.title}
              className="section-card rounded-[2rem] p-6 sm:p-7"
            >
              <p className="eyebrow">{note.eyebrow}</p>
              <h3 className="mt-4 font-serif text-2xl sm:text-3xl text-foreground">
                {note.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {note.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
