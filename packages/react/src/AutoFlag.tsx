import { forwardRef } from 'react'
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

export interface AutoFlagProps extends React.HTMLAttributes<HTMLSpanElement> {
    code: string
    type?: FlagType
    variant?: FlagVariant
}

export const AutoFlag = forwardRef<HTMLSpanElement, AutoFlagProps>(
    ({ code, type = 'country', variant = 'default', ...rest }, ref) => {
        const flags = variantMap[variant]
        const svg = resolveFlag(flags, code, type)
        if (!svg) return null
        return (
            <span
                ref={ref}
                style={{ display: 'inline-flex' }}
                {...rest}
                dangerouslySetInnerHTML={{ __html: svg }}
            />
        )
    },
)

AutoFlag.displayName = 'AutoFlag'
