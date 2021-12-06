import {terser} from 'rollup-plugin-terser'
import {main, peerDependencies} from './package.json'


export default {
  input: 'src/index.js',
  output: {
    file: main,
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
  },
  plugins: [terser()],
  external: Object.keys(peerDependencies),
}
