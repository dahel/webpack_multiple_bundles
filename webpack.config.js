var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: '#inline-source-map',
    cache: true,
    entry: {
        bundle: [
            './src2/js/app/config/bundles/primary/main.js',
            './src/translates/pl_PL'
            //'./amdToEs6/temporary/app'
        ],
        secondaryBundle: [
            './src2/js/app/config/bundles/secondary/main.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'platforms/browser/www'),
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
            },
            {
                test: /translates.*\.json?$/,
                include: [
                    path.join(__dirname, './src')
                ],
                exclude: /node_modules/,
                loader: 'lang-file-loader'
            },
            { test: /\.hbs/, loader: "handlebars-loader" }
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