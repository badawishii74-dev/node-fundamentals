// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Hello from Node , Badawishii");
// });


// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// ===========================================================

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Home Page");
//   } else if (req.url === "/about") {
//     res.end("About Page");
//   } else {
//     res.statusCode = 404;
//     res.end("Not Found");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// ==============================================================

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/api") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Hello API" }));
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
