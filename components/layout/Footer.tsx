import Link from "next/link";
import { Mail, Phone, Send } from "lucide-react";
import { Container } from "./Container";
import { SocialIcon } from "@/components/common/SocialIcon";
import { FOOTER_QUICK_LINKS, FOOTER_SERVICE_LINKS } from "@/constants/navigation";
import { SITE } from "@/constants/site";

export function Footer() {
  return (
    <footer className="bg-[#7A2E12] text-brand-50/80">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="inline-block rounded-md bg-white px-3 py-1 text-sm font-semibold text-slate-900">
            TrendOrder
          </span>
          <p className="mt-4 text-sm leading-relaxed text-brand-50/70">
            SMM to Bangladesh&apos;s most trusted SMM panel. We offer fast, affordable
            social media growth services for every platform, with full support the
            local payments link support.
          </p>
          <div className="mt-5 flex gap-3">
            <SocialIcon icon={Send} label="Telegram" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {FOOTER_QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Services Pages</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {FOOTER_SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Contact Info</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={15} /> {SITE.supportEmail}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} /> {SITE.supportPhone}
            </li>
            <li className="text-brand-50/60">{SITE.supportNote}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-5 text-center text-xs text-brand-50/50">
        © {new Date().getFullYear()} TrendOrder Limited. All rights reserved. | Operated under
        the Bangladesh ICT framework.
      </div>
    </footer>
  );
}
