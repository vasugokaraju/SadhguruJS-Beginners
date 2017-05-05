var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var SRC_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    context: SRC_DIR,

    entry: {app: './main.ts'},
    output:{
        path: BUILD_DIR,
        filename: 'app.bundle.js'
    },
    module:{
        loaders:[
            {
                test: /\.html$/,
                use: 'raw-loader',
                exclude: [SRC_DIR + '/index.html']
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                loaders: ['file-loader?name=assets/[name].[hash].[ext]']
            },
            {test: /\.ts$/, loader:'ts-loader'},
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
                //include: [SRC_DIR + "/styles"]
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&minetype=application/octet-stream"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&minetype=image/svg+xml"
            }
//            {
//                test: /\.(jpe?g|gif|png|svg|wav|mp3)$/,
//                loader: "file-loader"
//            }

        ]
    },
    resolve:{
        extensions: ['.ts', '.js', '.json']
    },
    plugins:[

        new HtmlWebpackPlugin({
            template: './index.html'
        }),

        // https://github.com/webpack/webpack-dev-server/issues/206
        // Check daniel-erickson's answer
        new webpack.HotModuleReplacementPlugin(),

        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),

        // This is brute force method as some of the loaders are failing to parse .css and .html files to find assets and copy them to dist folder.
        // Particularly the assets referred in .css file are not being copied to {output} folder.
        new CopyWebpackPlugin([
            // Copies entire 'assets' file to {output} folder which in this case 'dist'
            { from: 'assets/font-awesome/fonts/', to:'fonts' }
        ])
    ]
};