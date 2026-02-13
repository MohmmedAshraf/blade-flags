import type { FlagMap, FlagType } from './types'

export function resolveFlag(
    flags: FlagMap,
    code: string,
    type: FlagType = 'country',
): string | undefined {
    const key = `${type}-${code}`
    return flags[key]
}
