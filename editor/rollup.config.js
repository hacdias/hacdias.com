import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  input: './editor.js',
  output: {
    file: '../assets/js/editor.js',
    format: 'iife',
    name: ['editor']
  },
  plugins: [nodeResolve()]
}
