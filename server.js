const http = require('http');

const server = http.createServer((req, res) => {
    console.log('run request..')
    res.setHeader('Conten-Type', 'text/html');
    res.write('<h1>Hello world</h1>')
    res.end
})

server.listen(3002, 'localhost', () => {
    console.log('Node.JS server is running on port: 3002')
})
