const AUTOPREFIXER_BROWSERS = [
  'last 3 version',
  'ie >= 10',
];

module.exports = {
  plugins: [
    require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS })
  ]
}