"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { Button } from "@/components/common/Button";
import { NAV_LINKS } from "@/constants/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 py-5">
      <Container className="flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          TrendOrder
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/sign-in" variant="outline" size="sm">
            Sign In
          </Button>
          <Button href="/sign-up" variant="primary" size="sm">
            Sign Up
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-slate-200 lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {open && (
        <Container>
          <div className="mt-4 flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-100 lg:hidden">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-2">
              <Button href="/sign-in" variant="outline" size="sm" className="flex-1">
                Sign In
              </Button>
              <Button href="/sign-up" variant="primary" size="sm" className="flex-1">
                Sign Up
              </Button>
            </div>
          </div>
        </Container>
      )}
    </header>
  );
}
