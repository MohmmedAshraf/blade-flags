<p align="center">
    <img src="art/cover.png" width="1280" alt="Blade Flags — SVG country and language flags for Laravel, Vue, React, and JavaScript">
</p>

<p align="center">
    <a href="#laravel--blade">Laravel</a> |
    <a href="#vue">Vue</a> |
    <a href="#react">React</a> |
    <a href="#vanilla-js">Vanilla JS</a> |
    <a href="#flag-variants">Variants</a> |
    <a href="#contributing">Contributing</a>
</p>

<p align="center">
<a href="https://packagist.org/packages/outhebox/blade-flags"><img src="https://img.shields.io/packagist/v/outhebox/blade-flags" alt="Latest Stable Version"></a>
<a href="https://www.npmjs.com/package/@blade-flags/core"><img src="https://img.shields.io/npm/v/@blade-flags/core" alt="npm version"></a>
<a href="https://packagist.org/packages/outhebox/blade-flags"><img src="https://img.shields.io/packagist/dt/outhebox/blade-flags" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/outhebox/blade-flags"><img src="https://img.shields.io/packagist/php-v/outhebox/blade-flags.svg" alt="PHP from Packagist"></a>
<a href="https://packagist.org/packages/outhebox/blade-flags"><img src="https://img.shields.io/badge/Laravel-9.x%20|%2010.x%20|%2011.x%20|%2012.x-brightgreen.svg" alt="Laravel Version"></a>
</p>

## Introduction

1,759 SVG country and language flags for Laravel Blade, Vue, React, and vanilla JavaScript. Three flag styles, 128 language mappings, and full support for regional variants like `ar-sa`, `en-us`, and `fr-ca`. Works great with Inertia.js.

Use them anywhere — locale switchers, address forms, dashboards, or admin panels.

| Variant           | Blade                          | JS import      | Countries | Languages | Source                                                     |
|-------------------|--------------------------------|----------------|:---------:|:---------:|------------------------------------------------------------|
| Default (rounded) | `<x-flag-country-us />`        | `defaultFlags` |    264    |    281    | [TwEmoji](https://github.com/twitter/twemoji)              |
| Circle            | `<x-flag-circle-country-us />` | `circleFlags`  |    405    |    275    | [circle-flags](https://github.com/HatScripts/circle-flags) |
| Flat (4:3)        | `<x-flag-flat-country-us />`   | `flatFlags`    |    270    |    264    | [flag-icons](https://github.com/lipis/flag-icons)          |

For a full list of available icons see the SVG directories: [default](resources/svg), [circle](resources/svg-circle), [flat](resources/svg-flat).

## Installation

```bash
# Laravel / PHP
composer require outhebox/blade-flags

# Vue
npm install @blade-flags/core @blade-flags/vue

# React
npm install @blade-flags/core @blade-flags/react

# Vanilla JS / Node
npm install @blade-flags/core
```

## Laravel / Blade

> Requires PHP 8.0+ and Laravel 9+. Uses [Blade Icons](https://github.com/blade-ui-kit/blade-icons) under the hood — see their readme for caching and additional features.
>
> **[Watch a 3-minute video by Povilas Korop](https://www.youtube.com/watch?v=XTnKU-VCOB8)** showcasing the package.

Icons can be used as self-closing Blade components which will be compiled to SVG icons.

#### Default (Rounded Rectangle)

```blade
<x-flag-country-us />
<x-flag-country-gb />
<x-flag-country-br />
<x-flag-country-cn />
<x-flag-country-ru />
```

...produces this:<br/><br/>
<img src="resources/svg/country-us.svg" width="48" alt="US flag (default variant)">
<img src="resources/svg/country-gb.svg" width="48" alt="GB flag (default variant)">
<img src="resources/svg/country-br.svg" width="48" alt="BR flag (default variant)">
<img src="resources/svg/country-cn.svg" width="48" alt="CN flag (default variant)">
<img src="resources/svg/country-ru.svg" width="48" alt="RU flag (default variant)">

```blade
<x-flag-language-en />
<x-flag-language-ar />
<x-flag-language-es />
```

...produces this:<br/><br/>
<img src="resources/svg/language-en.svg" width="48" alt="English language flag">
<img src="resources/svg/language-ar.svg" width="48" alt="Arabic language flag">
<img src="resources/svg/language-es.svg" width="48" alt="Spanish language flag">

#### Circle

```blade
<x-flag-circle-country-us />
<x-flag-circle-country-gb />
<x-flag-circle-country-br />
<x-flag-circle-country-cn />
<x-flag-circle-country-ru />
```

...produces this:<br/><br/>
<img src="resources/svg-circle/circle-country-us.svg" width="48" alt="US flag (circle variant)">
<img src="resources/svg-circle/circle-country-gb.svg" width="48" alt="GB flag (circle variant)">
<img src="resources/svg-circle/circle-country-br.svg" width="48" alt="BR flag (circle variant)">
<img src="resources/svg-circle/circle-country-cn.svg" width="48" alt="CN flag (circle variant)">
<img src="resources/svg-circle/circle-country-ru.svg" width="48" alt="RU flag (circle variant)">

```blade
<x-flag-circle-language-en />
<x-flag-circle-language-ar />
<x-flag-circle-language-ar-sa />
<x-flag-circle-language-ar-eg />
```

...produces this:<br/><br/>
<img src="resources/svg-circle/circle-language-en.svg" width="48" alt="English language flag (circle)">
<img src="resources/svg-circle/circle-language-ar.svg" width="48" alt="Arabic language flag (circle)">
<img src="resources/svg-circle/circle-language-ar-sa.svg" width="48" alt="Arabic (Saudi Arabia) language flag (circle)">
<img src="resources/svg-circle/circle-language-ar-eg.svg" width="48" alt="Arabic (Egypt) language flag (circle)">

#### Flat (4:3 Rectangle)

```blade
<x-flag-flat-country-us />
<x-flag-flat-country-gb />
<x-flag-flat-country-br />
<x-flag-flat-country-cn />
<x-flag-flat-country-ru />
```

...produces this:<br/><br/>
<img src="resources/svg-flat/flat-country-us.svg" width="48" alt="US flag (flat variant)">
<img src="resources/svg-flat/flat-country-gb.svg" width="48" alt="GB flag (flat variant)">
<img src="resources/svg-flat/flat-country-br.svg" width="48" alt="BR flag (flat variant)">
<img src="resources/svg-flat/flat-country-cn.svg" width="48" alt="CN flag (flat variant)">
<img src="resources/svg-flat/flat-country-ru.svg" width="48" alt="RU flag (flat variant)">

```blade
<x-flag-flat-language-en />
<x-flag-flat-language-ar />
<x-flag-flat-language-fr />
```

...produces this:<br/><br/>
<img src="resources/svg-flat/flat-language-en.svg" width="48" alt="English language flag (flat)">
<img src="resources/svg-flat/flat-language-ar.svg" width="48" alt="Arabic language flag (flat)">
<img src="resources/svg-flat/flat-language-fr.svg" width="48" alt="French language flag (flat)">

#### Classes & Attributes

You can pass classes to any variant:

```blade
<x-flag-country-us class="w-6 h-6"/>
<x-flag-circle-country-us class="w-6 h-6"/>
<x-flag-flat-country-us class="w-6 h-6"/>
```

### Dynamic Icons

For dynamic icon names (e.g. from a database or variable), use the `@svg` Blade directive:

```blade
@svg('flag-country-'.$country->iso2_code)
@svg('flag-circle-country-'.$country->iso2_code, 'w-6 h-6')
@svg('flag-flat-country-'.$country->iso2_code)

@svg('flag-language-'.$language->code)
@svg('flag-circle-language-'.$language->code, 'w-6 h-6')
@svg('flag-flat-language-'.$language->code)
```

Or the `svg()` helper in PHP:

```php
svg('flag-country-us')->toHtml()
svg('flag-circle-country-us', 'w-6 h-6')->toHtml()
```

### Raw SVG Icons

Publish the raw SVG files as public assets:

```bash
php artisan vendor:publish --tag=blade-flags --force
php artisan vendor:publish --tag=blade-flags-circle --force
php artisan vendor:publish --tag=blade-flags-flat --force
```

Then use them in your views:

```blade
<img src="{{ asset('vendor/blade-flags/country-us.svg') }}" width="32" height="32"/>
<img src="{{ asset('vendor/blade-flags-circle/circle-country-us.svg') }}" width="32" height="32"/>
<img src="{{ asset('vendor/blade-flags-flat/flat-country-us.svg') }}" width="32" height="32"/>
```

### Configuration

Blade Flags also offers the ability to use features from Blade Icons like default classes, default attributes, etc. If you'd like to configure these, publish the `blade-flags.php` config file:

```bash
php artisan vendor:publish --tag=blade-flags-config
```

### Language Flag Overrides

By default, language flags use the country mappings defined in [`config/language-countries.json`](config/language-countries.json) (e.g. `ar` → UAE, `en` → UK). You can override these defaults per-language:

1. Publish the config file:
   ```bash
   php artisan vendor:publish --tag=blade-flags-config
   ```

2. Edit `config/blade-flags.php` to set your preferred mappings:
   ```php
   'language_overrides' => [
       'ar' => ['default' => 'sa'],  // Arabic → Saudi Arabia
       'en' => ['default' => 'us'],  // English → United States
   ],
   ```

3. Publish the SVG assets and apply your overrides:
   ```bash
   php artisan vendor:publish --tag=blade-flags --force
   php artisan vendor:publish --tag=blade-flags-circle --force
   php artisan vendor:publish --tag=blade-flags-flat --force
   php artisan blade-flags:generate
   ```

The `blade-flags:generate` command reads the package defaults, merges your overrides, and regenerates the language flag SVGs in the published vendor directories.

## Vue

Works with Vue 3.3+. Ideal for Inertia.js apps.

```vue
<script setup>
import { Flag } from '@blade-flags/vue'
import { circleFlags } from '@blade-flags/core/flags/circle'
</script>

<template>
  <!-- Dynamic: pass the full map, resolve by code at runtime -->
  <Flag :code="user.country" :flags="circleFlags" />
  <Flag code="ar-sa" type="language" :flags="circleFlags" />
</template>
```

## React

Works with React 18+.

```tsx
import { Flag } from '@blade-flags/react'
import { circleFlags } from '@blade-flags/core/flags/circle'

// Dynamic: pass the full map, resolve by code at runtime
<Flag code={user.country} flags={circleFlags} />
<Flag code="ar-sa" type="language" flags={circleFlags} />
```

## Vanilla JS

Use `@blade-flags/core` directly in any JavaScript or TypeScript project:

```js
import { resolveFlag } from '@blade-flags/core'
import { circleFlags } from '@blade-flags/core/flags/circle'

// Dynamic: resolve by code at runtime (loads all flags in the variant)
const svg = resolveFlag(circleFlags, user.country)
document.getElementById('flag').innerHTML = svg
```

## Tree-Shaking & Bundle Size

Every flag is a **named export**. If you know which flags you need at build time, import them directly — your bundler will tree-shake the rest:

```js
// Only the flags you import end up in your bundle
import { countryUs, countryGb, languageAr, languageArSa } from '@blade-flags/core/flags/circle'
```

Flag names follow the pattern `country{Code}` and `language{Code}` in camelCase:

| SVG key | Named export | Type |
|---|---|---|
| `country-us` | `countryUs` | Country |
| `country-gb-eng` | `countryGbEng` | Country (region) |
| `language-ar` | `languageAr` | Language |
| `language-ar-sa` | `languageArSa` | Language (regional) |

For **dynamic** use (code comes from a database or API), import the full variant map. The `Flag` component uses this approach:

```js
// Loads all flags in the variant — use when the code isn't known at build time
import { circleFlags } from '@blade-flags/core/flags/circle'
import { resolveFlag } from '@blade-flags/core'

const countrySvg = resolveFlag(circleFlags, 'us')              // country flag
const languageSvg = resolveFlag(circleFlags, 'ar-sa', 'language') // language flag
```

| Import style | When to use | Bundle impact |
|---|---|---|
| `import { countryUs } from '.../circle'` | You know the flags at build time | Only the flags you import |
| `import { circleFlags } from '.../circle'` | Code is dynamic (from data/API) | All flags in the variant |

## Flag Variants

Import only the variant you need:

```js
import { defaultFlags } from '@blade-flags/core/flags/default'  // 264 country + 281 language
import { circleFlags } from '@blade-flags/core/flags/circle'    // 405 country + 275 language
import { flatFlags } from '@blade-flags/core/flags/flat'        // 270 country + 264 language
```

| Package | Description |
|---------|-------------|
| `@blade-flags/core` | SVG strings as JS modules + `resolveFlag()` helper |
| `@blade-flags/vue` | `<Flag>` component for Vue 3 (peer dep: `vue ^3.3`) |
| `@blade-flags/react` | `<Flag>` component for React 18+ (peer dep: `react ^18 \| ^19`) |

The `AutoFlag` convenience component accepts a `variant` string prop but bundles all variants:

```vue
<script setup>
import { AutoFlag } from '@blade-flags/vue'
</script>

<template>
  <AutoFlag code="us" variant="circle" />
</template>
```

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## License

Blade Flags is open-sourced software licensed under [the MIT license](LICENSE.md).
