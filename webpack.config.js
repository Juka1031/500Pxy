const path = require("path");

module.exports = {
    entry: "./frontend/500pxy.jsx",
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", "*"],
        alias: {
            Images: path.resolve(__dirname, 'app', 'assets', 'images'),
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env", "@babel/react"],
                    },
                },
            },
        ],
    },
};