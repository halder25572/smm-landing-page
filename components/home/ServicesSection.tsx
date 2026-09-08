"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Button } from "@/components/common/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { PLATFORM_TABS, FEATURED_SERVICE } from "@/data/services";

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(PLATFORM_TABS[0].id);

  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow="Our Services"
          title={
            <>
              Powerful <span className="text-brand-600">SMM Services</span> for
              Fast Growth
            </>
          }
          subtitle="Explore our comprehensive range of social media marketing services designed to help you grow your presence across all major platforms. From Facebook to TikTok, we've got you covered."
        />

        <div className="mx-auto mt-10 grid w-full max-w-[720px] grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {PLATFORM_TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex h-[30px] w-full items-center justify-center gap-2 rounded-md border px-2 text-[11px] font-medium transition-colors",
                  isActive
                    ? "border-brand-500 bg-brand-600 text-white shadow-sm"
                    : "border-brand-100 bg-[#fffaf6] text-slate-600 hover:border-brand-300"
                )}
              >
                <Image
                  src={tab.iconImage}
                  alt=""
                  width={15}
                  height={15}
                  className="h-[15px] w-[15px] object-contain"
                />
                {tab.label}
              </button>
            );
          })}
        </div>

        <Card className="mt-4 grid grid-cols-1 gap-5 rounded-xl bg-white p-3 ring-1 ring-[#ff8a34] shadow-none sm:p-4 md:grid-cols-[1fr_1.08fr] md:gap-8">
          <div className="relative min-h-62.5 overflow-hidden rounded-xl bg-[#fff2e7] md:min-h-[250px]">
            <Image
              src={FEATURED_SERVICE.image}
              alt={FEATURED_SERVICE.heading}
              width={560}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center py-2 pr-2 md:py-3">
            <h3 className="text-xl font-semibold text-brand-600 md:text-2xl">
              {FEATURED_SERVICE.heading}
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 md:text-[13px]">
              {FEATURED_SERVICE.description}
            </p>

            <ul className="mt-5 space-y-2.5">
              {FEATURED_SERVICE.features.map((feature, index) => (
                <li key={feature.id} className="flex gap-2 text-xs leading-5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-600 text-[10px] font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="font-medium text-slate-800">
                      {feature.title}
                    </span>{" "}
                    <span className="text-slate-600">— {feature.description}</span>
                  </span>
                </li>
              ))}
            </ul>

            <Button href="/services/facebook" variant="primary" size="sm" className="mt-5 self-start rounded-md px-3 py-2 text-[11px]">
              {FEATURED_SERVICE.ctaLabel}
            </Button>
          </div>
        </Card>
      </Container>
    </section>
  );
}
