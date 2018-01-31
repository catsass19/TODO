const path = require('path');
const webpack = require("webpack");

module.exports = {
    entry: './src/index.ts',
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/script')
    }
};