import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { PAYMENT_METHODS } from "@/data/paymentMethods";

export function PaymentSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <Container>
        <SectionTitle
          eyebrow="Payment Methods"
          title="Multiple Payment Methods"
          subtitle="We accept Visa, Mastercard, American Express, bKash, Nagad, Rocket, and more, so you're never stuck at checkout. Deposits are instant, and you can start with as little as $1, which means there is no reason to wait before placing your first order."
        />

        <div className="relative mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-6">
          <Image
            src="/images/sections/world-map.png"
            alt=""
            fill
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 object-contain opacity-30"
          />
          {PAYMENT_METHODS.map((method) => (
            <div
              key={method.id}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-100"
            >
              <Image
                src={method.logo}
                alt={method.name}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <p
          aria-hidden
          className="mt-14 select-none text-center text-4xl font-extrabold uppercase tracking-widest text-brand-50 sm:text-6xl"
        >
          Multiple Payments
        </p>
      </Container>
    </section>
  );
}
