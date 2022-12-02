/*
 * Copyright 2022 Flowable AG.
 * 	This license is based on the software license agreement and other terms and conditions in effect between the parties at the time of purchase of the Flowable software product. Your agreement to these terms is required to install or use the Flowable software product and/or this file.
 * 	Flowable is a trademark of Flowable AG registered in several countries.
 */
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import external from 'rollup-plugin-peer-deps-external';
import filesize from 'rollup-plugin-filesize';
import nodeResolve from '@rollup/plugin-node-resolve';

const globals = {
  react: 'React',
  moment: 'moment'
};

const baseConfig = format => ({
  input: 'src/index.tsx',
  plugins: [
    replace({
      // this will be the default behaviour on next versions, so..
      preventAssignment: true,
      ENVIRONMENT: JSON.stringify('production'),
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    nodeResolve(),
    external(),
    postcss({
      modules: false,
      extract: true
    }),
    url(),
    svgr(),
    resolve({
      browser: true,
      dedupe: ['react', 'react-dom']
    }),
    commonjs({
      include: ['node_modules/**'],
      exclude: ['node_modules/process-es6/**'],
      namedExports: {
        'node_modules/react/index.js': [
          'Children',
          'Component',
          'PropTypes',
          'createElement'
        ],
        'node_modules/react-dom/index.js': ['render']
      }
    }),
    typescript(),
    json(),
    filesize()
  ]
});

const configs = [
  {
    output: [
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'default',
        sourcemap: true
      }
    ]
  },
  {
    output: [
      {
        format: 'umd',
        sourcemap: true,
        file: 'dist/index.js',
        inlineDynamicImports: true,
        name: 'flwCustomFormsComponents',
        globals
      }
    ]
  }
];

const res = configs.map(config => ({
  ...baseConfig(config.output[0].format),
  ...config
}));
export default res;
