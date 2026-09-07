import { LucideIcon } from "lucide-react";

export interface StatItem {
  id: string;
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  logo: string;
}

export interface GrowthStage {
  id: string;
  phase: string;
  whatYouDo: string;
  whyItWorks: string;
  estimate: string;
}

export interface Advantage {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: string;
}
