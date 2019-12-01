#!/usr/bin/env node

const http = require('http')

const server = http.createServer();

const argv = process.argv.slice(2);

let port=8080;

const {version}=require('./package.json')

if(argv[0]==='-v'){
    console.log('版本号'+version);
}else{
    if(argv[0]==='-p' && argv[1]){
        console.log(process.argv);
        port=argv[1];
    }
    server.listen(port,()=>{
        console.log('端口号是'+port);
        
    })
}