// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('node:path');

module.exports = (options, webpack) => {
  const lazyImports = [
    '@nestjs/microservices/microservices-module',
    '@nestjs/websockets/socket-module',
  ];

  return {
    ...options,
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src/lambda.ts'),
    output: {
      filename: 'lambda.js',
      path: path.resolve(__dirname, 'dist'),
      sourceMapFilename: 'lambda.js.map',
      libraryTarget: 'commonjs2',
    },
    externals: [],
    plugins: [
      ...options.plugins,
      new webpack.IgnorePlugin({
        checkResource(resource) {
          if (lazyImports.includes(resource)) {
            try {
              require.resolve(resource);
            } catch (err) {
              return true;
            }
          }
          return false;
        },
      }),
    ],
  };
};
