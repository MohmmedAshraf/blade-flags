# @blade-flags/vue

Vue 3 flag components powered by [`@blade-flags/core`](https://www.npmjs.com/package/@blade-flags/core). 1,759 SVG country and language flags across three styles. Works great with Inertia.js.

Part of [blade-flags](https://github.com/MohmmedAshraf/blade-flags). See also [`@blade-flags/react`](https://www.npmjs.com/package/@blade-flags/react).

## Installation

```bash
npm install @blade-flags/core @blade-flags/vue
```

## Usage

```vue
<script setup>
import { Flag } from '@blade-flags/vue'
import { circleFlags } from '@blade-flags/core/flags/circle'
</script>

<template>
  <Flag :code="user.country" :flags="circleFlags" />
  <Flag code="ar-sa" type="language" :flags="circleFlags" />
</template>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | `string` | required | Country or language code (e.g. `us`, `ar-sa`) |
| `flags` | `FlagMap` | required | Flag variant map to resolve from |
| `type` | `'country' \| 'language'` | `'country'` | Whether the code is a country or language |

### AutoFlag

Convenience component that accepts a `variant` string prop (bundles all variants):

```vue
<script setup>
import { AutoFlag } from '@blade-flags/vue'
</script>

<template>
  <AutoFlag code="us" variant="circle" />
  <AutoFlag code="ar" type="language" variant="flat" />
</template>
```

### Variants

Import only the variant you need to keep your bundle small:

```js
import { defaultFlags } from '@blade-flags/core/flags/default'
import { circleFlags } from '@blade-flags/core/flags/circle'
import { flatFlags } from '@blade-flags/core/flags/flat'
```

## License

[MIT](https://github.com/MohmmedAshraf/blade-flags/blob/main/LICENSE.md)
