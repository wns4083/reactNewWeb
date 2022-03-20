const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(_dirname + "/build")
    },
    devServer:{
        contentBase: path.resolve("./build"),
        index: "index.html",
        port: 3000,
        proxy:{
            '/user_inform':{
                target: 'http://localhost:3001/',
                changeOrigin:true,
            }
        }
    },
    mode: "development",
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                use: ['babel-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        option: {minimize:true}
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};
/*
entry는 build가 처음 시작되는 파일을 설정
react에서는 js기준으로 보기 때문에 index.js파일로 넣어준다.
output은 빌드 된 파일을 설정하는 곳
동일 디렉토리에 build 디렉토리를 생성하고 빌드된 번들을 bundle.js라는 이름으로 저장할 수 있도록 한다.
index.js파일은 babel-loader을 이용하여 가져와서 처리한다.

*/