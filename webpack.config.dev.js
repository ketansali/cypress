const path = require('path');

const server = {
    entry: 'src/app.js',
    mode: "production",
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[mock-aws-s3].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
};

module.exports = [server];