const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {
  const cssLoader = { loader: 'css-loader', options: { sourceMap: true } };
  const sassLoader = {
    loader: 'sass-loader',
    options: {
      implementation: require('sass'),
      sourceMap: true,
      sassOptions: { outputStyle: 'compressed' },
    },
  };
  const use = [MiniCssExtractPlugin.loader, cssLoader];
  const config = {
    entry: {},
    devtool: false,
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, env.distFolder || 'dist'),
      chunkFilename: 'flwforms-chunk[name].js',
      library: 'flwCustomFormsComponents',
      libraryTarget: 'umd',
      publicPath: '',
    },
    stats: {
      assets: true,
      excludeAssets: [/pdfjs/, /scss/],
      children: false,
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        react: require.resolve('react'),
      },
      fallback: {
        'react/jsx-dev-runtime': require.resolve('react/jsx-dev-runtime.js'),
        'react/jsx-runtime': require.resolve('react/jsx-runtime.js'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(s*)css$/,
          exclude: /node_modules/,
          use: [...use, sassLoader],
        },
        { test: /\.(eot|ttf|woff|woff2)$/, use: ['file-loader'] },
        {
          test: /\.(t|j)sx?$/,
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: !env.production,
              },
            },
          ],
          exclude: [/node_modules/, /\.(test|spec|e2e)\.ts$/, /src\/vendor/],
        },
        {
          test: /\.js$/,
          exclude: [/node_modules/, /\.(test|spec|e2e)\.ts$/, /src\/vendor/],
          use: ['source-map-loader'],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'index.min.css',
        chunkFilename: '[id].css',
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
  };

  return config;
};
