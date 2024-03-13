

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true // Активация CSS Modules
          }
        }],
        devServer: {
          historyApiFallback: true
        }
      },
    ],
  },
};