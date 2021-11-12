const http = require('http');

const server = http.createServer( (request,response) => {

    response.setHeader('Content-Type', 'Text/Plain',)
    response.end('Hello Server World')
}

);

server.listen(1000);