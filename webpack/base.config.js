const webpack = require('webpack');
const path = require('path');

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
    module: {
        rules
    },
    plugins,
    resolve,
    stats: {
        assets: true
    },
}
