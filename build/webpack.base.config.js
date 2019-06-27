const {setFilepath} = require('./utils.js');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    output: {
        path: setFilepath('dist'),
        filename: "[name].[hash].js",
        publicPath: "/"
    },
    mode:'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                include: setFilepath('src')
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader'
                    },
                    {
                        loader:'sass-resources-loader',
                        options:{
                            resources:[setFilepath('src/style/variable.scss')]
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            '@src': setFilepath('src')
        }
    }
};
