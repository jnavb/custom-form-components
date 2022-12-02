const base_ = require('./webpack.common.js');
const path = require('path');

module.exports = (env = {}) => {
  env.distFolder = 'dist';
  env.mainFile = 'index';
  const base = base_(env);
  base.entry['index'] = './src/index.tsx';
  base.output.chunkFilename = 'flwcustomcomponents-chunk[name].js';

  expose(base, 'react', 'React');
  expose(base, 'react-dom', 'ReactDom');
  expose(base, 'moment', 'moment');
  return base;
};

function expose(config, name, global) {
  config.module.rules.push({
    test: require.resolve(name),
    loader: 'expose-loader',
    options: { exposes: [global] }
  });
}
