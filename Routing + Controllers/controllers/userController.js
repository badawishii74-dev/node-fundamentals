const getUsers = (req, res) => {
  res.send("Get all users");
};

const createUser = (req, res) => {
  res.send("Create user");
};

module.exports = {
  getUsers,
  createUser,
};
