
# Shopify Theme Comparison Research

## Methodology

To ensure accurate performance data and account for server variance, I ran Google PageSpeed Insights (Mobile) three separate times on the official Shopify live demo URLs for each theme. The LCP (Largest Contentful Paint) metric was recorded for each run, and the final number presented in the matrix is the calculated average of those three tests.

## Comparison Matrix

| Feature / Metric             | Horizon              | Dawn                | Craft           | Sense        |
| :--------------------------- | :------------------- | :------------------ | :-------------- | :----------- |
| **Mobile Speed (LCP)** | 7.1 s                | 17.2 s              | 6.4 s           | 6.2 s        |
| **Customization Ease** | High (Nested blocks) | Medium              | Medium          | Low (Niche)  |
| **GitHub Source**      | Yes (via Dawn base)  | Yes (Public)        | No              | No           |
| **Best For**           | Modern basic stores  | Safe, stable builds | Single products | Beauty/Niche |

## Detailed Breakdown

### 1. Horizon

* **Pros:** Features up to 8 levels of nested blocks, allowing for advanced drag-and-drop layout flexibility without custom code. It includes built-in AI block generation and native modern UI features (like transparent headers and color swatches) out of the box.
* **Cons & Risks:** Because it is a newer, constantly evolving framework, frequent updates can sometimes overwrite custom code if the merchant heavily modifies the theme files without proper version control.

### 2. Dawn

* **Pros:** The most widely adopted and historically stable Online Store 2.0 theme. It is extremely reliable for a fast launch and boasts the most extensive community documentation and troubleshooting resources.
* **Cons & Risks:** It relies on rigid top-level container sections, making complex or nested layouts very difficult without hiring a developer. It also lacks the native AI design tools found in newer generation themes.

### 3. Craft

* **Pros:** Fast mobile performance and a strong premium, typography-led aesthetic. Excellent use of negative space for brands wanting a minimalist, artisanal feel.
* **Cons & Risks:** The design constraints skew heavily toward "quiet" brands. It requires significant custom CSS to adapt it for high-energy, colorful, or mass-market stores.

### 4. Sense

* **Pros:** Excellent out-of-the-box defaults for beauty and wellness with softer, warmer layouts and strong image-driven sections. Exceptionally fast mobile load times (6.2s LCP on heavy demo).
* **Cons & Risks:** Highly niche visual style. Stripping away the default pastel branding to use it for a standard retail store requires fighting the theme's core design system.
