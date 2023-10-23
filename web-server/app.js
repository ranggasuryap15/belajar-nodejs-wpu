const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const url = req.url;
  if (url === "/about") {
    res.write("<h1>About</h1>");
  } else if (url === "/contact") {
    res.write("<h1>Contact</h1>");
  }

  res.end();
});

server.listen(3000, () => {
  console.log("Server is running...");
});
