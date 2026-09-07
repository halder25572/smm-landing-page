import {
  Send,
  MessageCircle,
  Music2,
  Ghost,
  Globe,
} from "lucide-react";
import { PlatformTab, FeaturedService } from "@/types/service";

export const PLATFORM_TABS: PlatformTab[] = [
  { id: "telegram", label: "Telegram", icon: Send, iconColor: "#26A5E4" },
  { id: "discord", label: "Discord", icon: MessageCircle, iconColor: "#5865F2" },
  { id: "spotify", label: "Spotify", icon: Music2, iconColor: "#1DB954" },
  { id: "soundcloud", label: "SoundCloud", icon: Music2, iconColor: "#FF5500" },
  { id: "snapchat", label: "Snapchat", icon: Ghost, iconColor: "#FFFC00" },
  { id: "website", label: "Website Traffic", icon: Globe, iconColor: "#F97316" },
];

export const FEATURED_SERVICE: FeaturedService = {
  platform: "facebook",
  heading: "Facebook Marketing Services",
  description:
    "Boost your brand visibility, connect with your ideal audience, and drive more traffic, engagement, and sales through strategic Facebook marketing campaigns.",
  image: "/images/services/facebook.png",
  ctaLabel: "View Facebook Services",
  features: [
    {
      id: "post-likes",
      title: "Facebook Post Likes",
      description: "Boost post engagement and credibility with real likes.",
    },
    {
      id: "page-likes",
      title: "Facebook Likes",
      description: "Grow your page popularity with high-quality likes.",
    },
    {
      id: "comments",
      title: "Facebook Comments",
      description: "Increase interaction with engaging comments.",
    },
    {
      id: "shares",
      title: "Facebook Shares",
      description: "Expand your reach with powerful shares.",
    },
    {
      id: "video-views",
      title: "Facebook Video Views",
      description: "Get more visibility with high-retention video views.",
    },
    {
      id: "reactions",
      title: "Facebook Reactions",
      description: "Make your posts more engaging with diverse reactions.",
    },
  ],
};
