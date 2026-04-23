import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StarRating } from "@/components/ui/StarRating";
import { TESTIMONIALS } from "@/lib/testimonials";

export function Testimonials() {
  return (
    <section className="section-y bg-puro-black">
      <div className="container mx-auto">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(280px,340px)_1fr] lg:gap-14 xl:gap-16">
          <div className="space-y-5">
            <SectionLabel>Cosa dicono di noi</SectionLabel>
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-[1.02] uppercase text-balance">
              Recensioni vere. <br />
              <span className="italic">Scottona vera.</span>
            </h2>
            <p className="text-white/55 text-sm text-pretty max-w-xs">
              +1.200 recensioni verificate su Google & TripAdvisor. Media 4,9/5.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <article
                key={t.id}
                className="card-dark space-y-4 p-6 transition-colors hover:border-puro-green/40 sm:p-7"
              >
                <StarRating value={t.rating} />
                <p className="text-sm text-white/80 leading-relaxed text-pretty">
                  “{t.text}”
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden bg-puro-panel">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    {t.role && (
                      <p className="text-xs text-white/50">{t.role}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
