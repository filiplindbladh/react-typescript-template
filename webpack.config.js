const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BabelEnginePlugin = require("babel-engine-plugin");

module.exports = {
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    devtool: "inline-source-map",
    cache: true,
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js",
        sourceMapFilename: "[file].map",
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { importLoaders: 1 },
                    },
                    "postcss-loader",
                ],
            },
            {
                test: /\.svg$/,
                loader: "svg-sprite-loader",
                include: path.resolve("./src/assets/icons"),
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            stats: { children: false },
        }),
        new MiniCssExtractPlugin({
            filename: "[name].bundle.css",
            chunkFilename: "[id].bundle.css",
        }),
        new BabelEnginePlugin({
            presets: [
                [
                    "env",
                    {
                        verbose: false,
                    },
                ],
            ],
        }),
    ],
    devServer: {
        hot: true,
        inline: true,
        port: 8080,
        historyApiFallback: true,
    },
};
