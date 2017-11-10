const http = require('http');

xxxxxxxxxxxxxxxxxxxxxo

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('222222222222222222222');
});
