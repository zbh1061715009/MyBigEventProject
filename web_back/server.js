const http = require('http'); 　//实例化“http”
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200; 　　//状态值200：OK
res.setHeader('Content-Type', 'text/plain');  //内容类型：text/plain
res.end('Hello World\n'); 　　//响应结果“hello world”
});
 
server.listen(port, hostname, () => {　　//实现监听
  console.log(`Server running at http://${hostname}:${port}/`);
});