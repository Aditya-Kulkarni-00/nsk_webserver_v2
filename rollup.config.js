import typescript from '@rollup/plugin-typescript'
import esbuild from 'rollup-plugin-esbuild'

export default [
    {
        input : "./src/index.ts",
        plugins : [
            typescript(),
            esbuild()
        ],
        output : [
            {
                file : "dist/bundle.js",
                format : "es",
                sourcemap : true,
                exports : "auto"
            }
        ]
    }
]