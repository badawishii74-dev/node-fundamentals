const express = require("express");
const app = express();

app.use(express.json());

const userRoutes = require("./routes/userRoutes");

app.use("/users", userRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  
  res.status(status).json({
    message: error.message
  });
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
