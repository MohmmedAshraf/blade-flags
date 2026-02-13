# @blade-flags/react

React flag components powered by [`@blade-flags/core`](https://www.npmjs.com/package/@blade-flags/core). 1,759 SVG country and language flags across three styles.

Part of [blade-flags](https://github.com/MohmmedAshraf/blade-flags). See also [`@blade-flags/vue`](https://www.npmjs.com/package/@blade-flags/vue).

## Installation

```bash
npm install @blade-flags/core @blade-flags/react
```

## Usage

```tsx
import { Flag } from '@blade-flags/react'
import { circleFlags } from '@blade-flags/core/flags/circle'

function UserProfile({ user }) {
  return (
    <>
      <Flag code={user.country} flags={circleFlags} />
      <Flag code="ar-sa" type="language" flags={circleFlags} />
    </>
  )
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | `string` | required | Country or language code (e.g. `us`, `ar-sa`) |
| `flags` | `FlagMap` | required | Flag variant map to resolve from |
| `type` | `'country' \| 'language'` | `'country'` | Whether the code is a country or language |

The component also accepts all standard `<span>` HTML attributes and forwards refs.

### AutoFlag

Convenience component that accepts a `variant` string prop (bundles all variants):

```tsx
import { AutoFlag } from '@blade-flags/react'

<AutoFlag code="us" variant="circle" />
<AutoFlag code="ar" type="language" variant="flat" />
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
