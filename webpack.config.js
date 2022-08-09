const path = require("path");

module.exports = {
    mode: "development",
    devtool: false,
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    target: 'node',
    externals: {
        express: 'express',
    }
};