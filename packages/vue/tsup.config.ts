import { defineConfig } from 'tsup'

export default defineConfig({
    entry: {
        index: 'src/index.ts',
        flag: 'src/entries/flag.ts',
        auto: 'src/entries/auto.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    splitting: true,
    clean: true,
    external: ['vue', '@blade-flags/core'],
})
