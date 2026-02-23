import type { FlagMap, FlagType } from './types'

export function resolveFlag(
    flags: FlagMap,
    code: string,
    type: FlagType = 'country',
): string | undefined {
    const key = `${type}-${code}`
    const svg = flags[key]
    if (!svg) return undefined
    return svg.replace(/<svg([^>]*)>/, (match, attrs) => {
        const cleaned = attrs.replace(/\s*width="[^"]*"/g, '').replace(/\s*height="[^"]*"/g, '')
        return `<svg${cleaned} style="width:100%;height:100%">`
    })
}
