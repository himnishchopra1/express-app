const http = require('http');

const server = http.createServer( (request,response) => {

    response.setHeader('Content-Type', 'Text/Plain',)
    response.end('Hello Server World 2')
}

);

server.listen(1000);