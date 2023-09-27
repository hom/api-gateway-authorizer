import { resolve } from 'path';

export default (options, webpack) => {
  const lazyImports = [
    '@nestjs/microservices/microservices-module',
    '@nestjs/websockets/socket-module',
  ];

  return {
    ...options,
    devtool: 'source-map',
    entry: resolve(__dirname, 'src/lambda.ts'),
    output: {
      filename: 'lambda.js',
      path: resolve(__dirname, 'dist'),
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
