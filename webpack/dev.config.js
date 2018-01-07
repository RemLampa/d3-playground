const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./base.config');

const devDir = path.resolve(__dirname, '..', 'dev');

const plugins = [
    new webpack.NodeEnvironmentPlugin({
        NODE_ENV: 'development',
        DEBUG: true
    }),
    new CleanWebpackPlugin([devDir]),
    new HtmlWebpackPlugin({
        title: 'D3 Playground Development',
        template: './html-template/index.ejs',
        minify: false
    })
];

module.exports = merge(baseConfig, {
    output: {
        path: devDir
    },
    plugins: plugins,
    devtool: 'source-map'
});
