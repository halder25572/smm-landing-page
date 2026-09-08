import { PlatformTab, FeaturedService } from "@/types/service";

export const PLATFORM_TABS: PlatformTab[] = [
  { id: "facebook", label: "Facebook", iconImage: "/images/social/facebook.png" },
  { id: "instagram", label: "Instagram", iconImage: "/images/social/instagram.png" },
  { id: "twitter", label: "X (Twitter)", iconImage: "/images/social/twitter.png" },
  { id: "youtube", label: "YouTube", iconImage: "/images/social/youtube.png" },
  { id: "tiktok", label: "TikTok", iconImage: "/images/social/tiktok.png" },
  { id: "linkedin", label: "LinkedIn", iconImage: "/images/social/linkedin.png" },
  { id: "telegram", label: "Telegram", iconImage: "/images/social/telegram.png" },
  { id: "discord", label: "Discord", iconImage: "/images/social/discord.png" },
  { id: "spotify", label: "Spotify", iconImage: "/images/social/spotify.png" },
  { id: "soundcloud", label: "SoundCloud", iconImage: "/images/social/soundcloud.png" },
  { id: "snapchat", label: "Snapchat", iconImage: "/images/social/snapchat.png" },
  { id: "website", label: "Website Traffic", iconImage: "/images/social/website.png" },
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
