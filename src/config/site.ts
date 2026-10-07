export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Anomalous Coffee Machine Wiki",
  shortName: "ACM Wiki",
  logoText: "A",
  tagline: "Words, Transformations, Endings & Secrets Guide",
  description: "Your ultimate guide to Anomalous Coffee Machine! Explore keyword lists, transformations, endings, secrets, characters, and gameplay tips for every strange cup.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://anomalouscoffeemachine.top",
  supportEmail: "support@anomalouscoffeemachine.top",
  gameUrl: "https://store.steampowered.com/app/3173560/Anomalous_Coffee_Machine/",
  heroVideoId: "8Kpy8NXgh38", // Anomalous Coffee Machine - Gameplay
  social: {
    discord: "https://steamcommunity.com/app/3173560",
    youtube: "https://www.youtube.com/watch?v=8Kpy8NXgh38",
  },
  locales: ["en", "ja", "ko", "ru"],
  defaultLocale: "en",
};
