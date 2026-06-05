import type { Dictionary } from "@/types/i18n";

interface AboutSectionProps {
  dictionary: Dictionary;
}

export function AboutSection({ dictionary }: AboutSectionProps) {
  return (
    <section id="story" className="section-shell scroll-mt-28 py-18 md:py-24">
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="section-card rounded-[2.2rem] p-8 sm:p-10">
          <p className="eyebrow">{dictionary.story.eyebrow}</p>
          <h2 className="mt-4 balanced-text font-serif text-5xl text-foreground sm:text-6xl lg:text-7xl">
            {dictionary.story.title}
          </h2>
        </div>

        <div className="section-card grid gap-8 rounded-[2.2rem] p-8 sm:p-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5 text-lg leading-8 text-muted-foreground">
            {dictionary.story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="grid gap-4">
            {dictionary.story.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[1.8rem] border border-border/65 bg-background/55 p-5 dark:bg-background/25"
              >
                <p className="font-serif text-2xl text-foreground">
                  {feature.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
