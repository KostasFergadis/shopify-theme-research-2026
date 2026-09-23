# Shopify Theme Comparison Research

## Performance Methodology & Benchmark Links

To evaluate baseline mobile performance, each theme's official Shopify demo store was tested using **Google PageSpeed Insights (Mobile)**. To account for network and server latency variations, three consecutive test runs were conducted on September 23, 2026, and the Largest Contentful Paint (LCP) was calculated as the arithmetic mean.

> **Important Benchmark Disclaimer:**
> Because official demo stores feature varying assets (such as high-resolution imagery, video banners, custom fonts, and pre-installed demo apps), these performance metrics must be treated as **indicative comparative benchmarks** and **not as absolute proof** that one theme is universally faster than another in production. Real-world performance will heavily depend on actual store assets, merchant app stack, and image optimization.

### Tested URLs & Direct PageSpeed Audit Links

* **Horizon:**
  * Tested Demo URL: `https://themes.shopify.com/themes/horizon/presets/horizon`
  * [Run PageSpeed Insights Audit (Horizon)](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fthemes.shopify.com%2Fthemes%2Fhorizon%2Fpresets%2Fhorizon)
  * Recorded Mobile LCP Runs: 7.0s, 7.3s, 7.0s (Average: **7.1s**)
* **Dawn:**
  * Tested Demo URL: `https://themes.shopify.com/themes/dawn/presets/default`
  * [Run PageSpeed Insights Audit (Dawn)](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fthemes.shopify.com%2Fthemes%2Fdawn%2Fpresets%2Fdefault)
  * Recorded Mobile LCP Runs: 17.0s, 17.5s, 17.1s (Average: **17.2s**)
* **Craft:**
  * Tested Demo URL: `https://themes.shopify.com/themes/craft/presets/default`
  * [Run PageSpeed Insights Audit (Craft)](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fthemes.shopify.com%2Fthemes%2Fcraft%2Fpresets%2Fdefault)
  * Recorded Mobile LCP Runs: 6.3s, 6.5s, 6.4s (Average: **6.4s**)
* **Sense:**
  * Tested Demo URL: `https://themes.shopify.com/themes/sense/presets/default`
  * [Run PageSpeed Insights Audit (Sense)](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fthemes.shopify.com%2Fthemes%2Fsense%2Fpresets%2Fdefault)
  * Recorded Mobile LCP Runs: 6.1s, 6.3s, 6.2s (Average: **6.2s**)

## Comparison Matrix

| Feature / Metric             | Horizon                                                  | Dawn                                                | Craft             | Sense             |
| :--------------------------- | :------------------------------------------------------- | :-------------------------------------------------- | :---------------- | :---------------- |
| **Mobile Speed (LCP)** | 7.1 s                                                    | 17.2 s                                              | 6.4 s             | 6.2 s             |
| **Customization Ease** | High (Nested blocks)                                     | Medium                                              | Medium            | Low (Niche)       |
| **GitHub Source**      | [Yes (Official Repo)](https://github.com/Shopify/horizon) | [Yes (Public Repo)](https://github.com/Shopify/dawn) | No Dedicated Repo | No Dedicated Repo |
| **Best For**           | Modern basic stores                                      | Safe, stable builds                                 | Single products   | Beauty/Niche      |

## Detailed Breakdown

### 1. Horizon

* **Pros:** Features up to 8 levels of nested blocks, allowing for advanced drag-and-drop layout flexibility without custom code.
* **Cons & Risks:** Because it is a newer, constantly evolving framework, frequent updates can sometimes overwrite custom code if the merchant heavily modifies the theme files without proper version control.
* **Updates & Support:** **Actively maintained & highly frequent.** The official repository demonstrates a consistent update cadence with multiple recent merges (e.g., September 21, September 18, 2026) directly addressing core Shopify OS 2.0 rollouts, RTL layouts, and mobile cart stability. Supported directly via the official Shopify Help Center.

### 2. Dawn

* **Pros:** The most widely adopted and historically stable Online Store 2.0 theme. It is extremely reliable for a fast launch and boasts the most extensive community documentation and troubleshooting resources.
* **Cons & Risks:** It relies on rigid top-level container sections, making complex or nested layouts very difficult without hiring a developer. It also lacks the native AI design tools found in newer generation themes.
* **Updates & Support:** **Mature maintenance cycle.** Updates are spaced out across several months rather than rapid continuous releases. Official GitHub commits show Dawn 16.0.0 released on August 10, 2026 (commit `258f00f`) and Dawn 15.5.0 on June 19, 2026 (commit `83d5e6b`). Supported by the largest third-party community ecosystem, forums, and official Shopify documentation.

### 3. Craft

* **Pros:** Fast mobile performance and a strong premium, typography-led aesthetic. Excellent use of negative space for brands wanting a minimalist, artisanal feel.
* **Cons & Risks:** The design constraints skew heavily toward "quiet" brands. It requires significant custom CSS to adapt it for high-energy, colorful, or mass-market stores.
* **Updates & Support:** **Moderate update frequency.** It receives core OS 2.0 stability and security patches. Support is limited to the standard official Shopify Help Center, with fewer third-party community tutorials available compared to Dawn.

### 4. Sense

* **Pros:** Excellent out-of-the-box defaults for beauty and wellness with softer, warmer layouts and strong image-driven sections. Exceptionally fast mobile load times (6.2s LCP on heavy demo).
* **Cons & Risks:** Highly niche visual style. Stripping away the default pastel branding to use it for a standard retail store requires fighting the theme's core design system.
* **Updates & Support:** **Moderate update frequency.** Like Craft, it is updated periodically to align with core Shopify engine upgrades. Supported via the standard official Shopify Help Center.
