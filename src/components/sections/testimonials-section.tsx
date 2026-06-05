import type { Dictionary } from "@/types/i18n";

interface TestimonialsSectionProps {
  dictionary: Dictionary;
}

export function TestimonialsSection({ dictionary }: TestimonialsSectionProps) {
  return (
    <section
      id="testimonials"
      className="section-shell scroll-mt-28 py-18 md:py-24"
    >
      <div className="mb-10 space-y-3">
        <p className="eyebrow">{dictionary.testimonials.eyebrow}</p>
        <h2 className="balanced-text max-w-3xl font-serif text-5xl text-foreground sm:text-6xl lg:text-7xl">
          {dictionary.testimonials.title}
        </h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {dictionary.testimonials.items.map((testimonial, index) => (
          <figure
            key={testimonial.name}
            className={`section-card rounded-[2rem] p-7 ${index === 1 ? "lg:translate-y-8" : ""}`}
          >
            <blockquote className="text-lg leading-8 text-foreground">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              <span className="block font-semibold text-primary">
                {testimonial.name}
              </span>
              {testimonial.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
