const sumReq = (req, res) => {
    console.log("In sum req handler", req.url);
    const body = [];

    req.on('data', chunk => {
        body.push(chunk);
    });

    req.on('end', () => {
        const fullBody = Buffer.concat(body).toString();
        const params = new URLSearchParams(fullBody);

        const bodyObj = Object.fromEntries(params);
        const sum = Number(bodyObj.first) + Number(bodyObj.second);

        console.log(sum);

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Sum is: ${sum}`);
    });
};
