# @blade-flags/core

1,759 SVG country and language flags as tree-shakeable JavaScript modules. Three flag styles (default, circle, flat) with full support for regional variants like `ar-sa`, `en-us`, and `fr-ca`.

Part of [blade-flags](https://github.com/MohmmedAshraf/blade-flags). See also [`@blade-flags/vue`](https://www.npmjs.com/package/@blade-flags/vue) and [`@blade-flags/react`](https://www.npmjs.com/package/@blade-flags/react).

## Installation

```bash
npm install @blade-flags/core
```

## Usage

### Tree-Shakeable Imports

Import only the flags you need — your bundler drops the rest:

```js
import { countryUs, countryGb, languageAr } from '@blade-flags/core/flags/circle'
```

### Dynamic Lookup

For runtime resolution (e.g. from a database or API), import the full variant map:

```js
import { circleFlags } from '@blade-flags/core/flags/circle'
import { resolveFlag } from '@blade-flags/core'

const svg = resolveFlag(circleFlags, 'us')                    // country flag
const langSvg = resolveFlag(circleFlags, 'ar-sa', 'language') // language flag
```

### Variants

```js
import { defaultFlags } from '@blade-flags/core/flags/default'  // 264 country + 281 language
import { circleFlags } from '@blade-flags/core/flags/circle'    // 405 country + 275 language
import { flatFlags } from '@blade-flags/core/flags/flat'        // 270 country + 264 language
```

## Naming Convention

| SVG key | Named export | Type |
|---|---|---|
| `country-us` | `countryUs` | Country |
| `country-gb-eng` | `countryGbEng` | Country (region) |
| `language-ar` | `languageAr` | Language |
| `language-ar-sa` | `languageArSa` | Language (regional) |

## License

[MIT](https://github.com/MohmmedAshraf/blade-flags/blob/main/LICENSE.md)
