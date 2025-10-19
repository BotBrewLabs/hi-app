// index.js
console.log("what's up?!");
const http = require('http' );

const hostname = '0.0.0.0'; // Listen on all available network interfaces
const port = 3000;         // The port your app will listen on inside the container

const server = http.createServer((req, res ) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from my Node.js App!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/` );
});
