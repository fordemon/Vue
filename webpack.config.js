const path = require("path")

const HtmlWebpackPlugin = require('html-webpack-plugin')

const { join } = require('path');

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: "production",
    entry: "./src/main.js",
    output: {
        path: path.join(__dirname, "lib"),
        filename: "work.js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(__dirname, "public/index.html"),
        }),
        new VueLoaderPlugin()
        // new VueLoaderPlugin({
        //     template: join(__dirname, "src/app.vue"),
        // })
    ],
    // plugins: [
    //     [
    //         new VueLoaderPlugin({
    //             template: join(__dirname, "src/app.vue"),
    //         })
    //     ]
    // ],
    devServer: {
        open: true,
        port: 8080
    },
    module: {
        rules: [ // loader的规则
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpeg|gif)$/i,
                type: 'asset',
                generator: {
                    filename: 'image/[hash:6][ext]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 2 * 1024
                    },
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'font-[name].[hash:6][ext]'
                }
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //         presets: ['@babel/preset-env'] 
                //     }
                // }
            }
        ]
    }
}
