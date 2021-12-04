import {terser} from 'rollup-plugin-terser'
import {main as packageMain} from './package.json'

export default {
  input: 'src/index.js',
  output: {
    file: packageMain,
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
  },
  plugins: [terser()],
  external: ['react', 'react-dom'],
}
