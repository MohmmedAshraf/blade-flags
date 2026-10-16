import { forwardRef } from 'react'
import type { FlagMap, FlagType } from '@blade-flags/core'
import { prepareFlag, resolveFlag } from '@blade-flags/core'

interface FlagBaseProps extends React.HTMLAttributes<HTMLSpanElement> {
    type?: FlagType
}

interface FlagFromMapProps extends FlagBaseProps {
    code: string
    flags: FlagMap
    svg?: never
}

interface FlagFromSvgProps extends FlagBaseProps {
    svg: string
    code?: never
    flags?: never
}

export type FlagProps = FlagFromMapProps | FlagFromSvgProps

export const Flag = forwardRef<HTMLSpanElement, FlagProps>(
    ({ code, type = 'country', flags, svg, ...rest }, ref) => {
        const html = svg !== undefined ? prepareFlag(svg) : resolveFlag(flags, code, type)
        if (!html) return null
        return (
            <span
                ref={ref}
                style={{ display: 'inline-flex' }}
                {...rest}
                dangerouslySetInnerHTML={{ __html: html }}
            />
        )
    },
)

Flag.displayName = 'Flag'
