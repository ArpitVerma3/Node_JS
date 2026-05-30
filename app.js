const { log } = require('console');
const userReqHandler = require('./user');

const fs=require('fs');
const http=require('http');

const server = http.createServer(userReqHandler);

const PORT=3002;
server.listen(PORT, ()=>{
    console.log(`server running on adrs http://localhost:$(PORT)`);
});