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
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://anomalouscoffeemachine.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/3173560/Anomalous_Coffee_Machine/",
  heroVideoId: "8Kpy8NXgh38", // Anomalous Coffee Machine - Gameplay
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
