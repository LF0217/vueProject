'use strict'
require('./check-versions')()

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
var connect = require('connect')
var serveStatic = require('serve-static')

var exists=function(src,dst,callback){
    //测试某个路径下文件是否存在
    fs.exists(dst,function(exists){
        if(exists){//不存在
            callback(src,dst);
        }else{//存在
            fs.mkdir(dst,function(){//创建目录
                callback(src,dst)
            })
        }
    })
}

var copy=function(src,dst){
    //读取目录
    fs.readdir(src,function(err,paths){
        console.log(paths)
        if(err){
            throw err;
        }
        paths.forEach(function(path){
            var _src=src+'/'+path;
            var _dst=dst+'/'+path;
            var readable;
            var writable;
            fs.stat(_src,function(err,st){
                if(err){
                    throw err;
                }
                
                if(st.isFile()){
                    readable=fs.createReadStream(_src);//创建读取流
                    writable=fs.createWriteStream(_dst);//创建写入流
                    readable.pipe(writable);
                }else if(st.isDirectory()){
                    exists(_src,_dst,copy);
                }
            });
        });
    });
}


const spinner = ora(
    'building for ' + process.env.env_config + ' environment...'
)
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
    if (err) throw err
    webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(
        stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n'
    )

    if (stats.hasErrors()) {
        console.log(chalk.red(' Build failed with errors.\n'))
        process.exit(1)
    }

    console.log(chalk.cyan(' Build complete.\n'))
    console.log(
        chalk.yellow(
            ' Tip: built files are meant to be served over an HTTP server.\n' +
            " Opening index.html over file:// won't work.\n"
        )
    )
    console.log('------------',path.join(__dirname, '../static'))
    copy(path.join(__dirname, '../static'),'dist/static/')
    if (process.env.npm_config_preview) {
        const port = 9526
        const host = 'http://localhost:' + port
        const basePath = config.build.assetsPublicPath
        const app = connect()

        app.use(
            basePath,
            serveStatic('./dist', {
                index: ['index.html', '/']
            })
        )

        app.listen(port, function() {
            console.log(
                chalk.green(`> Listening at  http://localhost:${port}${basePath}`)
            )
        })
    }
})
})
