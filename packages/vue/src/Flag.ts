import { defineComponent, h, type PropType } from 'vue'
import type { FlagMap, FlagType } from '@blade-flags/core'
import { prepareFlag, resolveFlag } from '@blade-flags/core'

export const Flag = defineComponent({
    name: 'Flag',
    props: {
        code: { type: String, default: '' },
        type: { type: String as PropType<FlagType>, default: 'country' },
        flags: { type: Object as PropType<FlagMap>, default: undefined },
        svg: { type: String, default: undefined },
    },
    setup(props) {
        return () => {
            const html =
                props.svg !== undefined
                    ? prepareFlag(props.svg)
                    : props.flags
                      ? resolveFlag(props.flags, props.code, props.type)
                      : undefined
            if (!html) return null
            return h('span', { innerHTML: html, style: 'display:inline-flex' })
        }
    },
})
