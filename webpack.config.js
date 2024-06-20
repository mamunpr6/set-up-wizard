const path = require('./dist/bundle');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output bundle filename
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  // Add loaders or other webpack configurations as needed
};
