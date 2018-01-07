const ExtractTextPlugin = require('extract-text-webpack-plugin');

const jsRule = {
    test: /\.jsx?$/,
    include: [ /node_modules\/dom7/, /src/ ],
    use: [
        {
            loader: 'babel-loader',
            options: {
                presets: [
                    [
                        'env',
                        {
                            'targets': {
                                'browsers': [ 'last 5 versions' ]
                            }
                        }
                    ],
                    'react'
                ],
                plugins: [ 'transform-runtime' ]
            }
        }
    ]
};

const cssRule = {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            },
            {
                loader: 'resolve-url-loader',
                options: {
                    sourceMap: true
                }
            }
        ]
    })
};

const sassRule = {
    test: /\.(sass|scss)$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            },
            {
                loader: 'resolve-url-loader',
                options: {
                    sourceMap: true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }
        ]
    })
};

const fontRule = {
    test: /\.(woff2|ttf|eot|otf)$/,
    loader: 'file-loader',
    options: {
        hash: 'sha512',
        digest: 'hex',
        name: 'fonts/[name].[ext]?[hash]'
    }
};

const imgRule = {
    test: /\.(png|jp(e*)g|svg)$/,
    loader: 'url-loader',
    options: {
        limit: 8000,
        hash: 'sha512',
        digest: 'hex',
        name: 'images/[name].[ext]?[hash]'
    }
};

module.exports = [
    jsRule,
    cssRule,
    sassRule,
    fontRule,
    imgRule
];
