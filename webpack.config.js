/**
 * Created by lcssos on 2017/7/1.
 * webpack 主配置文件
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 打包的源文件 目标文件
    entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
    // output: {
    //     path: __dirname + "/public",//打包后的文件存放的地方
    //     filename: "bundle.js"//打包后输出文件的文件名
    // },
    output: {
        path: __dirname + "/public",
        filename: '[name]-[hash].min.js',
    },

    //配置生成Source Maps，选择合适的选项(效率依次提高，安全依次降低)
    //source-map cheap-module-source-map eval-source-map cheap-module-eval-source-map
    devtool: 'eval-source-map',

    //webpack-dev-server 服务器配置
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        colors: true,// 设置为true，使终端输出的文件为彩色的
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, // 设置为true，当源文件改变时会自动刷新页面
        port: 8080  //设置默认监听端口，如果省略，默认为”8080“
    },

    module: {
        //在配置文件里添加JSON loader
        //test 一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
        //loader loader的名称（必须） 注意：：必须是全名，带-loader结尾
        //include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）
        //query：为loaders提供额外的设置选项（可选）

        //babel
        rules: [
            {
                test: /\.json$/,
                use: "json-loader"
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
                // query: {
                //     presets: ['es2015','react']
                // }
                // options : {
                //     presets: 'react'
                // }
            },

            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader'],
                }),
            },
            // {
            //     test: /(\.css|\.scss)$/,
            //     use: [
            //         {
            //             loader: ExtractTextPlugin.extract({
            //                 fallbackLoader: 'style-loader',
            //                 loader: loaders
            //             })
            //         }]
            // }
        ]
    },


    plugins:[
        new ExtractTextPlugin('[name]-[hash].min.css'),
        new HtmlWebpackPlugin({
            template: 'index.tpl.html',
            inject: 'body',
            filename: 'index.html',
        }),
    ]

    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: [ 'style-loader', 'css-loader' ]
    //         }
    //     ]

}