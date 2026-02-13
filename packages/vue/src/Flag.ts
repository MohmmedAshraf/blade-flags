import { defineComponent, h, type PropType } from 'vue'
import type { FlagMap, FlagType } from '@blade-flags/core'
import { resolveFlag } from '@blade-flags/core'

export const Flag = defineComponent({
    name: 'Flag',
    props: {
        code: { type: String, required: true },
        type: { type: String as PropType<FlagType>, default: 'country' },
        flags: { type: Object as PropType<FlagMap>, required: true },
    },
    setup(props) {
        return () => {
            const svg = resolveFlag(props.flags, props.code, props.type)
            if (!svg) return null
            return h('span', { innerHTML: svg })
        }
    },
})
