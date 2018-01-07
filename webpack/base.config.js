const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');

const rules = require('./rules.config');

const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        minChunks: 2  
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity
    }),
    new ExtractTextPlugin({
        filename: 'css/[name].css?[chunkhash]',
        allChunks: true
    }),
    new WebpackChunkHash()
]

const resolve = {
    extensions: ['.js', '.jsx'],
    modules: [
        'src',
        'node_modules'
    ]
}

module.exports = {
    context: path.resolve(__dirname, '..', 'src'),
    entry: {
        app: './index.jsx'
    },
    output: {
        filename: path.join('js', '[name].js?[chunkhash]')
    },
    module: {
        rules
    },
    plugins,
    resolve,
    stats: {
        assets: true
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    }
}
