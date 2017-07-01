/**
 * Created by lcssos on 2017/7/1.
 * webpack 主配置文件
 */
module.exports = {
    // 打包的源文件 目标文件
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
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
    }
}