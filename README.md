
# E-Commerce Theme Recommendation: Horizon

## Executive Summary

After a thorough evaluation of four free Shopify 2026 Online Store 2.0 themes (Horizon, Dawn, Craft, and Sense), **Horizon** is the primary recommendation for this new e-commerce build.

* **Upstream Version:** Horizon v4.2.0 (Official upstream release featuring enhanced RTL layout support and mobile cart stability fixes—see `release-notes.md` for details).

**1. Primary Recommendation: Horizon**
Horizon’s modern component-driven architecture provides significant structural benefits for long-term scalability. It features up to 8 levels of nested blocks and native AI-assisted design tools, offering extensive layout flexibility without requiring a developer.

**2. Alternative Recommendation: Dawn**
If historical stability and access to the largest pool of community documentation are prioritized over modern design flexibility, **Dawn (v16.0.0)** is the strongest alternative.

**3. Trade-offs & Justification**
While alternative themes like Craft and Sense offered marginal speed advantages in mobile demo testing (6.4s and 6.2s LCP vs Horizon's 7.1s), their niche design constraints (typography-heavy or pastel aesthetics) require heavy custom CSS to adapt to a standard store. Dawn, while flexible, suffers from rigid top-level sections and performed slower in demo testing (17.2s LCP). Horizon is chosen as the primary recommendation because its architectural flexibility outweighs the sub-second baseline speed advantage of the niche themes.

## Customization & Upgrade Safety Guidelines

**Important:** Because Horizon receives frequent upstream updates, **do not modify core theme files directly** (such as `base.css`, `global.js`, or core `sections/*.liquid` files). Modifying these files will cause your changes to be overwritten or create merge conflicts during the next theme update.

To safely customize the theme:

1. **Custom CSS:** Use the native "Custom CSS" input box in the Theme Editor for minor tweaks. For extensive styling, create a `custom.css` file in the `assets/` folder and link it before the `</head>` tag in `layout/theme.liquid`.
2. **Custom JavaScript:** Create a `custom.js` file in the `assets/` folder and link it just before the closing `</body>` tag in `layout/theme.liquid`.
3. **HTML / Liquid Changes:** Instead of editing existing sections, create entirely new sections or snippets, or use the native "Custom Liquid" block directly inside the Shopify Theme Editor.

## Repository Contents

* **Root Directory (`/`)** - The extracted source code for the recommended Horizon theme.
* **`RESEARCH.md`** - Complete testing methodology, performance data matrix, and technical pros/cons for all evaluated themes.
* **`SOURCES.md`** - Bibliography, testing dates, and official documentation references.
* **`AI_USAGE.md`** - Disclosure of AI tools and Shopify agent skills utilized during the research and documentation phase.
* **`LICENSE.md`** - Licensing information (MIT License) defining how the codebase can be used and distributed.
* **`RELEASE-NOTES.md`** - Official upstream release notes detailing bug fixes and feature additions (e.g., RTL support).

## Code Quality Verification

Inspected using **Shopify CLI v4.8.0**. The theme code successfully passes Shopify's structural best practices with 6 minor, non-blocking configuration warnings and 0 critical errors.

**Theme Check Summary:**

* **Files inspected:** 358
* **Total offenses:** 6 warnings (0 critical errors)
* **Details:** Minor non-blocking configuration warnings (one `ExcessiveSettingsCount` in `sections/header.liquid`, and five `UnusedDocParam` in `snippets/divider.liquid`).
  *(Note: These warnings do not affect runtime performance or functionality.)*

<details>
<summary><strong>Click to view full Theme Check log</strong></summary>

```text
info ───────────────────────────────────────────────────────────────────────╮
│                                                                           │
│  sections/header.liquid                                                   │
│                                                                           │
│                                                                           │
│  [warning]: ExcessiveSettingsCount                                        │
│  This schema declares 42 settings, which exceeds the maximum of 40.       │
│  Consider splitting this section or block into smaller pieces, or grouping│
│  related options with a header.                                           │
│                                                                           │
│  1246  {% schema %}                                                       │
│                                                                           │
╰───────────────────────────────────────────────────────────────────────────╯

╭─ info ────────────────────────────────────────────────────────────────────╮
│                                                                           │
│  snippets/divider.liquid                                                  │
│                                                                           │
│                                                                           │
│  [warning]: UnusedDocParam                                                │
│  The parameter 'settings.alignment_horizontal' is defined but not used in │
│  this file.                                                               │
│                                                                           │
│  7    @param {string} [settings.alignment_horizontal] - The horizontal    │
│  alignment of the divider ('left', 'center', or                           │
│  8    'right'). Defaults to 'center'.                                     │
│                                                                           │
│                                                                           │
│  [warning]: UnusedDocParam                                                │
│  The parameter 'settings.thickness' is defined but not used in this file. │
│                                                                           │
│  9  @param {number} [settings.thickness] - The thickness of the divider   │
│  line in pixels.                                                          │
│                                                                           │
│                                                                           │
│  [warning]: UnusedDocParam                                                │
│  The parameter 'settings.corner_radius' is defined but not used in this   │
│  file.                                                                    │
│                                                                           │
│  10  @param {string} [settings.corner_radius] - The corner radius of the  │
│  divider, e.g., 'rounded'.                                                │
│                                                                           │
│                                                                           │
│  [warning]: UnusedDocParam                                                │
│  The parameter 'settings.width_percent' is defined but not used in this   │
│  file.                                                                    │
│                                                                           │
│  11  @param {number} [settings.width_percent] - The width of the divider  │
│   as a percentage of its container.                                       │
│                                                                           │
│                                                                           │
│  [warning]: UnusedDocParam                                                │
│  The parameter 'settings.divider_color' is defined but not used in this   │
│  file.                                                                    │
│                                                                           │
│  12  @param {string} [settings.divider_color] - The color of the divider  │
│  line. Falls back to `--color-border` when blank.                         │
│                                                                           │
╰───────────────────────────────────────────────────────────────────────────╯

╭─ info ────────────────────────────────────────────────────────────────────╮
│                                                                           │
│  Theme Check Summary.                                                     │
│                                                                           │
│  358 files inspected with 6 total offenses found across 2 files.          │
│  6 warnings.                                                              │
│                                                                           │
╰───────────────────────────────────────────────────────────────────────────╯
```
