import dts from 'rollup-plugin-dts';

export default {
  input: 'build/index.d.ts',
  output: {
    format: 'cjs',
    file: 'index.d.js',
  },
  plugins: [dts()]
};
