const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./base.config');

const rootDir = path.resolve(__dirname, '..');

const plugins = [
    new webpack.NodeEnvironmentPlugin({
        NODE_ENV: 'production',
        DEBUG: false
    }),
    new CleanWebpackPlugin(
        [ 'dist' ],
        { root: rootDir }
    ),
    new HtmlWebpackPlugin({
        title: 'D3 Playground Production Build',
        template: './html-template/index.ejs',
        minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
        }
    })
];

module.exports = merge(baseConfig, {
    output: {
        path: path.join(rootDir, 'dist')
    },
    plugins: plugins
});
