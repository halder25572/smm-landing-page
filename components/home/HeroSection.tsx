import Image from "next/image";
import { Star,  } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
// import { FacebookIcon, InstagramIcon } from "@/components/common/BrandIcons";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-10 lg:pb-24 lg:pt-16">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
        <div className="max-w-xl">
          <Badge>
            <span className="flex gap-0.5 text-brand-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            Excellent 4.8 out of 5
          </Badge>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.12] text-slate-900 sm:text-[40px] lg:text-[42px]">
            <span className="text-brand-500 font-bold">Best SMM Panel</span> <br /> in Bangladesh — <span className="text-brand-500 font-bold">fast, safe</span> & built for growth on
            social media.
          </h1>

          <p className="mt-5 max-w-lg text-[13px] leading-[1.65] text-slate-600 sm:text-[14px]">
            TrendOrder is Bangladesh&apos;s most reliable and affordable SMM panel for
            real social media growth. We build this platform for Bangladeshi
            businesses, creators, and agencies. You get fast delivery, safe
            activity, and no fake locks. No account risks, just real results.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/services" variant="outline" size="lg">
              View Services
            </Button>
            <Button href="/sign-up" variant="primary" size="lg">
              Create an Account
            </Button>
          </div>

          <div className="mt-10 flex gap-3">
            {/* <SocialIcon icon={FacebookIcon} label="Facebook" />
            <SocialIcon icon={InstagramIcon} label="Instagram" />
            <SocialIcon icon={Music2} label="Spotify" />
            <SocialIcon icon={Send} label="Telegram" /> */}
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-158.75">
          <div className="absolute inset-6 rounded-full bg-brand-500/90" />
          <Image
            src="/images/newhero.png"
            alt="TrendOrder team member holding a tablet"
            fill
            className="relative object-contain"
            priority
          />
        </div>
      </Container>
    </section>
  );
}