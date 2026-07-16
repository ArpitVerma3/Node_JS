const fs = require("fs");
const express = require("express");
const http = require("http");

const app = express();

app.use((req, res, next) => {
  console.log("Came in first middlewear", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Came in second middlewear", req.url, req.method);
  next();
});

const server = http.createServer(app);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`server running on adrs http://localhost:${PORT}`);
});
