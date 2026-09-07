import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#FFF6ED] py-16">
      <Container className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold leading-tight text-slate-900">
            Ready to Grow Your Social Media in{" "}
            <span className="text-brand-600">Bangladesh</span>?
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-500">
            Join over 68,000 users who are already using TrendOrder to grow
            faster on Facebook, Instagram, YouTube, TikTok, and more. Getting
            started is free and takes less than 60 seconds.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Button href="/services" variant="outline" size="lg">
              See All Services
            </Button>
            <Button href="/sign-up" variant="primary" size="lg">
              Create Free Account
            </Button>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-xs">
          <Image
            src="/images/cta/cta-person.png"
            alt="TrendOrder team member"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </Container>
    </section>
  );
}
