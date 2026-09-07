"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
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

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {PLATFORM_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-slate-200 text-slate-600 hover:border-brand-300"
                )}
              >
                <Icon size={16} style={{ color: isActive ? "white" : tab.iconColor }} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <Card className="mt-10 grid grid-cols-1 gap-8 p-6 md:grid-cols-2 md:p-8">
          <div className="relative overflow-hidden rounded-2xl bg-slate-900">
            <Image
              src={FEATURED_SERVICE.image}
              alt={FEATURED_SERVICE.heading}
              width={560}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900">
              {FEATURED_SERVICE.heading}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
              {FEATURED_SERVICE.description}
            </p>

            <ul className="mt-6 space-y-3">
              {FEATURED_SERVICE.features.map((feature) => (
                <li key={feature.id} className="flex gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <Check size={12} />
                  </span>
                  <span>
                    <span className="font-medium text-slate-800">
                      {feature.title}
                    </span>{" "}
                    <span className="text-slate-500">— {feature.description}</span>
                  </span>
                </li>
              ))}
            </ul>

            <Button href="/services/facebook" variant="primary" className="mt-7">
              {FEATURED_SERVICE.ctaLabel}
            </Button>
          </div>
        </Card>
      </Container>
    </section>
  );
}
