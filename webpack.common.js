const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (env = {}) => {
  const config = {
    entry: {},
    devtool: false,
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, env.distFolder || 'dist'),
      chunkFilename: 'flwforms-chunk[name].js',
      library: 'flwCustomFormsComponents',
      libraryTarget: 'umd'
    },
    stats: {
      assets: true,
      excludeAssets: [/pdfjs/, /scss/],
      children: false
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        react: require.resolve('react')
      },
      fallback: {
        'react/jsx-dev-runtime': require.resolve('react/jsx-dev-runtime.js'),
        'react/jsx-runtime': require.resolve('react/jsx-runtime.js')
      }
    },
    module: {
      rules: [
        {
          test: /\.(t|j)sx?$/,
          use: [
            {
              loader: 'babel-loader'
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: !env.production
              }
            }
          ],
          exclude: [/node_modules/, /\.(test|spec|e2e)\.ts$/, /src\/vendor/]
        },
        {
          test: /\.js$/,
          exclude: [/node_modules/, /\.(test|spec|e2e)\.ts$/, /src\/vendor/],
          use: ['source-map-loader']
        }
      ]
    },
    plugins: [new ForkTsCheckerWebpackPlugin()]
  };

  return config;
};
