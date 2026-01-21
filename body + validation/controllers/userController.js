const getUsers = (req, res) => {
  res.send("Get all users");
};

// const createUser = (req, res) => {
//   console.log(req.body);
//   res.send("User created");
// };
const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "name and email are required",
    });
  }

  res.status(201).json({
    message: "User created",
    data: { name, email },
  });
};


module.exports = {
  getUsers,
  createUser,
};
