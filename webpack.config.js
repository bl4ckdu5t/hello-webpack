module.exports = {
  entry: "./src",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: "style!css!sass" },
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.html/,
        loader: 'html'
      }
    ]
  }
}
