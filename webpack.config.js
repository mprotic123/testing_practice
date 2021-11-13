const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports ={
    entry:'util.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'js/bundle.js'
    },
    devServer:{
        static: './dist'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            title: 'Output Management',
            template:'index.html'
        })

    ],
    module: {
        rules: [
          {
            test:/\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
    
}