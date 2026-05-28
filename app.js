const { log } = require('console');
const http=require('http');

const server = http.createServer((req, reply)=>{
    console.log(req);
    process.exit(); //stops event loop
});
const PORT=3002;

server.listen(PORT, ()=>{
    console.log(`server running on adrs http://localhost:$(PORT)`);
});