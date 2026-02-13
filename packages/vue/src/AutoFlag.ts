import { defineComponent, h, computed, type PropType } from 'vue'
import type { FlagMap, FlagType, FlagVariant } from '@blade-flags/core'
import { resolveFlag } from '@blade-flags/core'
import { defaultFlags } from '@blade-flags/core/flags/default'
import { circleFlags } from '@blade-flags/core/flags/circle'
import { flatFlags } from '@blade-flags/core/flags/flat'

const variantMap: Record<FlagVariant, FlagMap> = {
    default: defaultFlags,
    circle: circleFlags,
    flat: flatFlags,
}

export const AutoFlag = defineComponent({
    name: 'AutoFlag',
    props: {
        code: { type: String, required: true },
        type: { type: String as PropType<FlagType>, default: 'country' },
        variant: { type: String as PropType<FlagVariant>, default: 'default' },
    },
    setup(props) {
        const flags = computed(() => variantMap[props.variant])

        return () => {
            const svg = resolveFlag(flags.value, props.code, props.type)
            if (!svg) return null
            return h('span', { innerHTML: svg })
        }
    },
})
