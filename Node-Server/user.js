const { log } = require('console');
const http=require('http');
const fs=require('fs');

const requestHandler = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    
    if(req.url==='/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');

        res.write('<head><title>Arpit Verma</title></head>');
        res.write('<body><h1>Play Chess</h1>');

        res.write('<form action="/submit-details"method="POST">');

        res.write('<input type="text" name="Username" placeholder="Enter Your Name"<br>');

        res.write('<label for="male">Male</label>')
        res.write('<input type="radio"id="male" name="Gender" value="Male"<br>');

        res.write('<label for="female">Female</label>')
        res.write('<input type="radio"id="female" name="Gender" value="Female"<br>');
 
        res.write('<input type="submit"value="submit">');
        res.write('</form>');


        res.write('</body>');
        res.write('</head>');
        return res.end();
    }

else if (req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {
//new changes--> Topic : Parsing.
    const body=[];

    req.on('data', chunk => {
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end', () => {
        const fullBody = Buffer.concat(body).toString();
        // console.log(fullBody); 

        // const bodyObj={};
        const params = new URLSearchParams(fullBody);
        // for(const [key, val] of params.entries()){
        //     bodyObj[key]=val;
        // }
        const bodyObj=Object.fromEntries(params);
        console.log(bodyObj);

        fs.writeFileSync('user.txt', JSON.stringify
            (bodyObj)
        );
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
}

});
module.exports = requestHandler;