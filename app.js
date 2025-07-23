const http = require('http');
const requestHandler=require('./chap_11.js'); // Import the userRequestHandler from chap_11.js

const server = http.createServer(requestHandler);

const port = 3001; // Change to an unused port
server.listen(port, () => {
  console.log(`Server is running on address http://localhost:${port}`);
});