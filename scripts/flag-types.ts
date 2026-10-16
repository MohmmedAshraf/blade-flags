import { readdirSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '../packages/core/dist/flags')

let count = 0
for (const variant of ['default', 'circle', 'flat']) {
    const dir = join(DIST, variant)
    for (const file of readdirSync(dir)) {
        if (!file.endsWith('.js')) continue
        writeFileSync(join(dir, file.replace(/\.js$/, '.d.ts')), 'export declare const svg: string\n')
        count += 1
    }
}
console.log(`Wrote ${count} flag module declarations`)
