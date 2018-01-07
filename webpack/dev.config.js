const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./base.config');

const rootDir = path.resolve(__dirname, '..');

const plugins = [
    new webpack.NodeEnvironmentPlugin({
        NODE_ENV: 'development',
        DEBUG: true
    }),
    new CleanWebpackPlugin(
        [ 'dev' ],
        { root: rootDir }
    ),
    new HtmlWebpackPlugin({
        title: 'D3 Playground Development',
        template: './html-template/index.ejs',
        minify: false
    })
];

module.exports = merge(baseConfig, {
    output: {
        path: path.join(rootDir, 'dev')
    },
    plugins: plugins,
    devtool: 'source-map'
});
