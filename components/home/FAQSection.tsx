import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Accordion } from "@/components/ui/Accordion";
import { FAQS } from "@/data/faq";

export function FAQSection() {
  const mid = Math.ceil(FAQS.length / 2);
  const left = FAQS.slice(0, mid);
  const right = FAQS.slice(mid);

  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow="FAQ"
          title={
            <>
              Frequently Asked <span className="text-brand-600">Questions</span>
            </>
          }
          subtitle="Find clear and simple explanations to the most common questions about our services, payments, orders, and account management."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Accordion items={left} defaultOpenId={left[0]?.id} />
          <Accordion items={right} />
        </div>
      </Container>
    </section>
  );
}
