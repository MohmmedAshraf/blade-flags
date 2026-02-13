import { defineConfig } from 'tsup'

export default defineConfig({
    entry: {
        index: 'src/index.ts',
        'flags/index': 'src/flags/index.ts',
        'flags/default': 'src/flags/default.ts',
        'flags/circle': 'src/flags/circle.ts',
        'flags/flat': 'src/flags/flat.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    splitting: false,
    clean: true,
})
