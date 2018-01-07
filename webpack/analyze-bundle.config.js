const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const devConfig = require('./dev.config');

module.exports = merge(devConfig, {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
});
