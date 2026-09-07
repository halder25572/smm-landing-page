import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { STATS } from "@/data/stats";

export function StatsSection() {
  return (
    <section className="bg-slate-50 py-10">
      <Container className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card
              key={stat.id}
              className="flex flex-col items-center gap-3 px-4 py-8 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon size={22} />
              </span>
              <span className="text-2xl font-semibold text-slate-900">
                {stat.value.toLocaleString()}
                {stat.suffix}
              </span>
              <span className="text-sm text-slate-500">{stat.label}</span>
            </Card>
          );
        })}
      </Container>
    </section>
  );
}
