"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { FaqItem } from "@/types/faq";

interface AccordionProps {
  items: FaqItem[];
  defaultOpenId?: string;
}

export function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={cn(
              "rounded-2xl border transition-colors",
              isOpen
                ? "border-brand-600 bg-brand-600 text-white"
                : "border-slate-200 bg-slate-50 text-slate-800"
            )}
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium"
            >
              {item.question}
              <ChevronDown
                size={18}
                className={cn(
                  "shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            {isOpen && (
              <p className="px-5 pb-4 text-sm leading-relaxed text-brand-50">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
