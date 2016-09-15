var webpack = require('webpack');

module.exports = {
    entry: 'src/index.js',
    debug: false,
    production: true,
    output: {
        path: __dirname + '/',
        filename: 'ractive-stepper.js',
        library: 'RactiveStepper',
        libraryTarget: 'umd'
    },
    resolve: {
        root: process.cwd(),
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js', '.styl', '.html'],
    },
    module: {
        loaders: [
            {test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
            {test: /\.html/,  loader: 'ractive-loader'}
        ],
    },
}
