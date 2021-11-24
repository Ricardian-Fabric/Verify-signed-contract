import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

export default [
    // ES Modules
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.es.js', format: 'es',
        },
        plugins: [
            typescript(),
        ],
    },

    // UMD
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.umd.min.js',
            format: 'umd',
            name: 'verifySignedContract',
            indent: false,
        },
        plugins: [
            typescript(),
            terser(),
        ],
    }
]
