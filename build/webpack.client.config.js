const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const {setFilepath} = require('./utils.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

const entryClient=setFilepath('src/entry-client.js');

module.exports = merge(base, {
    entry: {
        app: entryClient
    },
    devServer: {
        contentBase: setFilepath('dist')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': process.env.NODE_ENV || '"development"',
            'process.env.VUE_ENV': '"client"'
        }),
        new VueSSRClientPlugin()
    ]
});
