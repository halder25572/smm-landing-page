import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/common/SectionTitle";

const STEPS = [
  {
    number: "01",
    title: "Create Account",
    description:
      "Sign up quickly using your email or social login and get instant access to TrendOrder services. Manage your orders easily from a single dashboard.",
  },
  {
    number: "02",
    title: "Add Funds",
    description:
      "Deposit funds securely via credit/debit card, bank transfer, or cryptocurrency. Your wallet is credited instantly so you can start placing orders immediately.",
  },
  {
    number: "03",
    title: "Select Service",
    description:
      "Select from Instagram, TikTok, YouTube, or Facebook services with clear pricing, delivery times, and reliability stats. Pick the package that fits your growth goals.",
  },
  {
    number: "04",
    title: "Place your order",
    description:
      "Enter your account details, select the desired quantity, and submit your order. Real-time validation ensures everything is accurate and ready to process quickly.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-linear-to-b from-white via-[#FFF6ED] to-white py-20">
      <Container>
        <SectionTitle
          eyebrow="Working Process"
          title={
            <>
              Grow Your <span className="text-brand-600">Socials</span> in 4
              Simple Steps
            </>
          }
          subtitle="A simple and efficient process designed to deliver fast and reliable results. Just place your order, and our system will handle the rest to help grow your social media presence smoothly."
        />

        <div className="relative mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-16 md:gap-y-10">
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-600 text-lg font-semibold text-white md:flex">
            H
          </div>

          {STEPS.map((step) => (
            <div key={step.number} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <span className="text-3xl font-bold text-brand-500">{step.number}</span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
