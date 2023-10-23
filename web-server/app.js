// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });

//   const url = req.url;
//   if (url === "/about") {
//     res.write("<h1>About</h1>");
//   } else if (url === "/contact") {
//     res.write("<h1>Contact</h1>");
//   }

//   res.end();
// });

// server.listen(3000, () => {
//   console.log("Server is running...");
// });

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(port, () => {
  console.log("Example app listening on port 3000!");
});
