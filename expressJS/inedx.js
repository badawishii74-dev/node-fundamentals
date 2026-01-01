// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
// //  res.send({ name: "Node" });
//  res.json({ name: "Boda" });

// });


// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });



// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//   const movies = [
//     { title: "The Dark Knight", category: "Action" },
//     { title: "Interstellar", category: "Sci-Fi" },
//     { title: "The Godfather", category: "Crime" },
//   ];

//   res.send(movies);
// });

// app.get("/users/:id", (req, res) => {
//   console.log(req.params);
// });


// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });



const express = require("express");
const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Ahmed" }]);
});

app.get("/users/:id", (req, res) => {
  res.json({ id: req.params.id });
});

app.post("/users", (req, res) => {
  res.json({
    message: "User created",
    user: req.body
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
