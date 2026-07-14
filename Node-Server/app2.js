const { log } = require('console');
const http=require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    
    if(req.url==='/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');

        res.write('<head><title>Arpit Verma</title></head>');
        res.write('<body><h1>Play Chess</h1></body>');
        
        res.write('</head>');
        return res.end();
    }
    else if(req.url==='/products'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');

        res.write('<head><title>Arpit Verma</title></head>');
        res.write('<body><h1>Choose The Format</h1></body>');
        
        res.write('</head>');
        return res.end();
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');

        res.write('<head><title>Arpit Verma</title></head>');
        res.write('<body><h1>Go Play Ludo</h1></body>');

        res.write('</head>');
        return res.end();
    }

});
const PORT=3003;

server.listen(PORT, ()=>{
    console.log(`server running on adrs http://localhost:$(PORT)`);
});