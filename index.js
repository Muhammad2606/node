const http = require('http')

const server = http.createServer((request, response) =>{
    console.log(request.url);
    response.write('<h1>hello world 1</h1>')
    response.write('<h1>hello world 18</h1>')
    response.end()
})

server.listen(3000, () =>{
    console.log('server has been started port on 3000');
})