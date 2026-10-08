# @amrabed/brand

Canonical brand identity, vector monograms, app icons, favicons, and design tokens for Amr Abed's digital ecosystem.

Deployed to GitHub Pages at **[amrabed.com/brand](https://amrabed.com/brand)**.

## Assets

| File | Type | Description |
|---|---|---|
| `icon.svg` | SVG | Adaptive vector icon (auto light/dark mode) |
| `icon-light.svg` | SVG | Fixed dark-on-light vector icon |
| `icon-dark.svg` | SVG | Fixed light-on-dark vector icon |
| `apple-touch-icon.png` | PNG (180×180) | iOS Apple touch icon |
| `favicon.ico` | ICO | Legacy browser fallback |

## Usage

### In Next.js (App Router)

```typescript
import { icons } from "@amrabed/brand";
// or re-exported from "@amrabed/ui":
// import { icons } from "@amrabed/ui";

export const metadata: Metadata = {
  title: "Amr Abed",
  icons,
};
```

### In VitePress / HTML

```html
<link rel="icon" type="image/svg+xml" href="https://amrabed.com/brand/icon.svg" />
<link rel="apple-touch-icon" href="https://amrabed.com/brand/apple-touch-icon.png" />
```

## License

MIT © Amr Abed
