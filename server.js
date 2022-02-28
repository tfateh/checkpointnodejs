const http = require ("http");
const port= 9000;

const server = http.createServer((req,res) =>{
res.writeHead(200,{"content-type":"application/json"});
res.end('hello man');
});

server.listen(port,(error)=>{
    error? console.log('connect failed'): console.log('connect success');
});

