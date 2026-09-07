import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { GROWTH_STAGES } from "@/data/pricing";

const ROWS: { key: keyof (typeof GROWTH_STAGES)[number]; label: string }[] = [
  { key: "whatYouDo", label: "What You Do" },
  { key: "whyItWorks", label: "Why It Works" },
  { key: "estimate", label: "Estimated Cost / Time" },
];

export function PricingSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow="Growth"
          title={
            <>
              Growing on Social Media in{" "}
              <span className="text-brand-600">Bangladesh</span>
            </>
          }
          subtitle="The smartest way to grow is by combining SMM support with real content. You use SMM at the beginning for momentum, then let organic growth take over."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GROWTH_STAGES.map((stage) => (
            <div
              key={stage.id}
              className="overflow-hidden rounded-2xl ring-1 ring-slate-100"
            >
              <div className="bg-brand-600 py-3 text-center text-sm font-semibold text-white">
                {stage.phase}
              </div>
              <div className="space-y-5 bg-white p-5">
                {ROWS.map((row, i) => (
                  <div key={row.key}>
                    <span className="text-xs font-semibold text-brand-600">
                      {String(i + 1).padStart(2, "0")} {row.label}
                    </span>
                    <p className="mt-1 text-sm text-slate-600">
                      {stage[row.key]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
