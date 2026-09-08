export interface PlatformTab {
  id: string;
  label: string;
  iconImage: string;
}

export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
}

export interface FeaturedService {
  platform: string;
  heading: string;
  description: string;
  features: ServiceFeature[];
  ctaLabel: string;
  image: string;
}
