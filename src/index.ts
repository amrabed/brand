export const BRAND_URL = "https://amrabed.com/brand";

export interface IconDefinition {
  url: string;
  type?: string;
  sizes?: string;
  media?: string;
}

export interface BrandIcons {
  icon: IconDefinition[];
  apple: IconDefinition[];
}

export const icons: BrandIcons = {
  icon: [
    { url: `${BRAND_URL}/icon.svg`, type: "image/svg+xml" },
    {
      url: `${BRAND_URL}/icon-light.svg`,
      type: "image/svg+xml",
      media: "(prefers-color-scheme: light)",
    },
    {
      url: `${BRAND_URL}/icon-dark.svg`,
      type: "image/svg+xml",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  apple: [
    { url: `${BRAND_URL}/apple-touch-icon.png`, sizes: "180x180" },
  ],
};

export default icons;
