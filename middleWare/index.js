const express = require("express");
const app = express();

app.use(express.json());

//middleware to log request details
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
//   next(); // important to continue to the next middleware/route handler
// });


// app.get("/users", (req, res) => {
//   res.json([{ id: 1, name: "Ahmed" }]);
// });

// app.get("/users/:id", (req, res) => {
//   res.json({ id: req.params.id });
// });
// app.post("/users", (req, res) => {
//   res.json({
//     message: "User created",
//     user: req.body
//   });
// });

// ===============================================

// app.use((req, res, next) => {
//   console.log("Middleware 1");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Middleware 2");
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Hello");
// });


// =================================================

// app.use((req, res, next) => {
//   if (!req.headers.authorization) {
//     return res.status(401).send("Unauthorized"); // Stop further processing if no auth header
//   }
//   next();
// });

//==================================================

//middleware to certain routes
// app.get(
//   "/profile",
//   (req, res, next) => {
//     console.log("Profile middleware");
//     next();
//   },
//   (req, res) => {
//     res.send("Profile page");
//   }
// );


const morgan = require("morgan");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello");
});








app.listen(3000, () => {
  console.log("Server running on port 3000");
});
