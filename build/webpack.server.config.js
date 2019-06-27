const webpack=require('webpack');
const merge=require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const base=require('./webpack.base.config');
const {setFilepath} = require('./utils.js');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports=merge(base,{
    devtool: "source-map",
    entry:setFilepath('src/entry-server.js'),
    output:{
      libraryTarget:'commonjs2'
    },
    target:'node',
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':process.env.NODE_ENV||'"development"',
            'process.env.VUE_ENV':'"server"'
        }),
        new VueSSRServerPlugin()
    ],
    externals:nodeExternals({
        whitelist:/\.css$/
    })
});
