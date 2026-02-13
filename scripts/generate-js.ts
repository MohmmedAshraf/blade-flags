import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, basename, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUT_DIR = join(ROOT, 'packages/core/src/flags')

const variants = [
    { name: 'default', dir: 'resources/svg', prefix: '' },
    { name: 'circle', dir: 'resources/svg-circle', prefix: 'circle-' },
    { name: 'flat', dir: 'resources/svg-flat', prefix: 'flat-' },
] as const

function stripPrefix(filename: string, prefix: string): string {
    const name = basename(filename, '.svg').toLowerCase()
    return prefix ? name.replace(new RegExp(`^${prefix}`), '') : name
}

/**
 * Convert a flag key like "country-gb-eng" to a camelCase variable name like "countryGbEng".
 * Handles dashes, underscores, and uppercase chars in the original key.
 */
function keyToVarName(key: string): string {
    return key
        .replace(/[-_]+(.)/g, (_, c: string) => c.toUpperCase())
        .replace(/^(.)/, (c) => c.toLowerCase())
}

function escapeSvg(svg: string): string {
    return svg.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$')
}

function generateVariant(variant: (typeof variants)[number]): { count: number } {
    const svgDir = join(ROOT, variant.dir)
    const files = readdirSync(svgDir)
        .filter((f) => f.endsWith('.svg'))
        .sort()

    const entries: { key: string; varName: string; svg: string }[] = []
    const seenVarNames = new Set<string>()

    for (const file of files) {
        const key = stripPrefix(file, variant.prefix)
        const varName = keyToVarName(key)
        const svg = readFileSync(join(svgDir, file), 'utf-8').trim()

        // Guard against collisions (e.g. "country-gb_eng" vs "country-gb-eng")
        if (seenVarNames.has(varName)) {
            console.warn(
                `  Warning: duplicate variable name "${varName}" for key "${key}", skipping`,
            )
            continue
        }
        seenVarNames.add(varName)

        entries.push({ key, varName, svg })
    }

    const mapName = variant.name === 'default' ? 'defaultFlags' : `${variant.name}Flags`

    const lines: string[] = [`import type { FlagMap } from '../types'`, '']

    // Individual named exports
    for (const { varName, svg } of entries) {
        lines.push(`export const ${varName} = \`${escapeSvg(svg)}\``)
    }

    lines.push('')

    // Map built from the individual exports
    lines.push(`export const ${mapName}: FlagMap = {`)
    for (const { key, varName } of entries) {
        lines.push(`    '${key}': ${varName},`)
    }
    lines.push('}')
    lines.push('')

    writeFileSync(join(OUT_DIR, `${variant.name}.ts`), lines.join('\n'))
    return { count: entries.length }
}

function generateBarrel(): void {
    const lines = [
        `export { defaultFlags } from './default'`,
        `export { circleFlags } from './circle'`,
        `export { flatFlags } from './flat'`,
        '',
    ]
    writeFileSync(join(OUT_DIR, 'index.ts'), lines.join('\n'))
}

// Main
mkdirSync(OUT_DIR, { recursive: true })

console.log('Generating JS flag modules...\n')

for (const variant of variants) {
    const { count } = generateVariant(variant)
    console.log(`  ${variant.name}: ${count} flags`)
}

generateBarrel()
console.log('\nDone! Files written to packages/core/src/flags/')
