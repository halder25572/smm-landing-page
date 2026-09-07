import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Card } from "@/components/ui/Card";
import { ADVANTAGES } from "@/data/advantages";

export function AdvantagesSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <SectionTitle
          eyebrow="Advantages"
          title={
            <>
              Advantages of using <span className="text-brand-600">our panel services</span>
            </>
          }
          subtitle="Find clear and simple explanations to the most common questions about our services, payments, orders, and account management."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {ADVANTAGES.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.id} className="flex gap-4 p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                  {item.highlight && (
                    <span className="mt-2 inline-block text-sm font-medium text-emerald-600">
                      {item.highlight}
                    </span>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
