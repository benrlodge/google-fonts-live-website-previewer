var path = require("path");

module.exports = {
  entry: "./src/main.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "GFLP.js"
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
         presets: ['react', 'es2015']
       }
    }]
  }
};
