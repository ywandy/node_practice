var http = require("http");
//第一个node工程，作用创建一个node服务器
http.createServer(function (request,response){
    //发送头部
    //返回值200
    //内容text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('hello world nodejs\n');
    
}).listen(8888);
console.log("server is running on 127.0.0.1:8888");