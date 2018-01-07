const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const baseConfig = require('./base.config');

const rootDir = path.resolve(__dirname, '..');

const plugins = [
    new webpack.EnvironmentPlugin({
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
        minify: false,
        alwaysWriteToDisk: true,
    }),
    new ExtractTextPlugin({
        filename: 'css/[name].css',
        allChunks: true
    }),
    new HtmlWebpackHarddiskPlugin({
        outputPath: path.join(rootDir, 'dev')
    }),
    new webpack.HotModuleReplacementPlugin()
];

const devServer = {
    contentBase: path.join(rootDir, 'dev'),
    hot: true,
    open: true,
    overlay: true,
    port: 7000
};

module.exports = merge(baseConfig, {
    output: {
        path: path.join(rootDir, 'dev'),
        filename: path.join('js', '[name].js')
    },
    plugins: plugins,
    devtool: 'source-map',
    devServer: devServer
});
