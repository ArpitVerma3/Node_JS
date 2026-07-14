const fs = require("fs");
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

const requestHandler = http.createServer(userReqHandler);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`server running on adrs http://localhost:$(PORT)`);
});
