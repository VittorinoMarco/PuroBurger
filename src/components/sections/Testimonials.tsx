import { SectionLabel } from "@/components/ui/SectionLabel";
import { StarRating } from "@/components/ui/StarRating";
import { GOOGLE_RATING, TESTIMONIALS } from "@/lib/testimonials";

export function Testimonials() {
  return (
    <section className="section-y bg-puro-black">
      <div className="container mx-auto">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(280px,340px)_1fr] lg:gap-14 xl:gap-16">
          <div className="space-y-5">
            <SectionLabel>Cosa dicono di noi</SectionLabel>
            <h2 className="font-display text-4xl font-black uppercase leading-[1.02] text-balance sm:text-5xl">
              Recensioni vere. <br />
              <span className="italic text-puro-green">Carne di scottona vera.</span>
            </h2>
            <p className="max-w-xs text-sm text-white/55 text-pretty">
              {GOOGLE_RATING.score} stelle · {GOOGLE_RATING.label} su Google
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.id}
                className="card-dark space-y-4 p-6 transition-colors hover:border-puro-green/40 sm:p-7"
              >
                <StarRating value={t.rating} />
                <p className="text-sm leading-relaxed text-white/80 text-pretty">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-white/5 pt-4">
                  <p className="text-sm font-semibold">{t.name}</p>
                  {t.role ? (
                    <p className="text-xs text-white/50">{t.role}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
