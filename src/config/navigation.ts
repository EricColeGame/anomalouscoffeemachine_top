export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "codes", path: "/codes", isContentType: true },
  { key: "platforms", path: "/platforms", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter(
  (item) => item.isContentType,
).map((item) => item.key);
