const http = require('http')

const server = http.createServer((request, response) =>{
    console.log(request.url);
    response.write('<h1>hello world</h1>')
    response.end()
})

server.listen(3000, () =>{
    console.log('server has been started port on 3000');
})