import type { FlagMap, FlagType } from './types'

export function prepareFlag(svg: string): string {
    return svg.replace(/<svg([^>]*)>/, (match, attrs) => {
        const cleaned = attrs.replace(/\s*width="[^"]*"/g, '').replace(/\s*height="[^"]*"/g, '')
        return `<svg${cleaned} style="width:100%;height:100%">`
    })
}

export function resolveFlag(
    flags: FlagMap,
    code: string,
    type: FlagType = 'country',
): string | undefined {
    const svg = flags[`${type}-${code}`]
    return svg ? prepareFlag(svg) : undefined
}
