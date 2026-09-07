import { Package, Layers, Users, Trophy } from "lucide-react";
import { StatItem } from "@/types/common";

export const STATS: StatItem[] = [
  {
    id: "orders",
    icon: Package,
    value: 321879,
    label: "Orders Processed",
  },
  {
    id: "services",
    icon: Layers,
    value: 6245,
    label: "Available Services",
  },
  {
    id: "users",
    icon: Users,
    value: 8552,
    label: "Registered User",
  },
  {
    id: "rank",
    icon: Trophy,
    value: 1,
    suffix: "st",
    label: "Regional Rank",
  },
];
