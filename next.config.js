const path = require('path')
const withProgressBar = require('next-progressbar')
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

module.exports = withProgressBar(withBundleAnalyzer({
  // progressBar: {
  //   profile: false
  // },
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Enable absolute import path
    config.resolve.modules.push(path.resolve('./'))

    return config;
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config
  },
}))