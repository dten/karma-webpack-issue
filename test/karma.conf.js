const webpackConfig = require('../webpack.config.js')

module.exports = function (config) {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['jasmine', 'webpack'],
    files: ['**/*.js'],
    preprocessors: {
      '**/*.js': ['webpack'],
    },
    webpack: webpackConfig,
    singleRun: true,
  })
}
