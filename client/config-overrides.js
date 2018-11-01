const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer');

module.exports = function override(config, env) {
  const analyzeBundle = process.argv.indexOf('--analyze-bundle') !== -1;
  config = rewireStyledComponents(config, env);

  if (analyzeBundle) {
    config = rewireWebpackBundleAnalyzer(config, env, {
      analyzerMode: 'static',
      reportFilename: 'report.html',
    });
  }

  return config;
};
