const http = require('http');

const server = http.createServer( (request,response) => {

    response.setHeader('Content-Type', 'Text/HTML',)
    response.end('<h1>Hello Server World 2</h1>')
}

);

server.listen(1000);