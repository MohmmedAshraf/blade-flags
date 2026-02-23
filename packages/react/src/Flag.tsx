import { forwardRef } from 'react'
import type { FlagMap, FlagType } from '@blade-flags/core'
import { resolveFlag } from '@blade-flags/core'

export interface FlagProps extends React.HTMLAttributes<HTMLSpanElement> {
    code: string
    type?: FlagType
    flags: FlagMap
}

export const Flag = forwardRef<HTMLSpanElement, FlagProps>(
    ({ code, type = 'country', flags, ...rest }, ref) => {
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

Flag.displayName = 'Flag'
