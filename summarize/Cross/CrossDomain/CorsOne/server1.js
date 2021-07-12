const http = require("http")

const fs = require("fs")

const post = 8888;
http.createServer((request, response) => {
  response.writeHead(200, {
    "Content-Type" : "text/html"
  })

  fs.readFile("./index.html", 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    // 发送响应数据
    response.write(data);
    // 结束
    response.end();
  })
}).listen(post)

console.log("Server running at http://127.0.0.1:"+post+"/");