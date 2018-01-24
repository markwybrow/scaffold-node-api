const http = require('http');

const app = require('./app');

const port = process.env.PORT || 3004;


const server = http.createServer(app).listen(port);

console.log("Loaded on port: ", port)