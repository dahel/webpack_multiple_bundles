var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: '#inline-source-map',
    cache: true,
    entry: {
        primaryBundle: [
            './src/config/primary.js'
        ],
        secondaryBundle: [
            './src/config/secondary.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: [
                    path.join(__dirname, './src')
                ],
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
            // {
            //     test: /translates.*\.json?$/,
            //     include: [
            //         path.join(__dirname, './src')
            //     ],
            //     exclude: /node_modules/,
            //     loader: 'lang-file-loader'
            // },
            // { test: /\.hbs/, loader: "handlebars-loader" }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8080,
        stats: 'errors-only',
        open: true
    }
};