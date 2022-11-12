const http = require('http');
console.log(http.createServer)

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//헬로월드라는 텍스트를 전송.
//그 결과, 우리의 웹 브라우저는 화면에 헬로월드를 출력 할수 있게 된다.