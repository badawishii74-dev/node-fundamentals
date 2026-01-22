let users = [
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Mahmoud" },
];

const getUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res, next) => {
  const { id } = req.params;

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    return next(error);
  }

  res.json(user);
};

const createUser = (req, res, next) => {
  const { name, age } = req.body;

  if (!name || !age) {
    const error = new Error("name and age are required");
    error.statusCode = 400;
    return next(error);
  }

  const newUser = {
    id: users.length + 1,
    name,
    age,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created",
    user: newUser,
  });
};

const updateUser = (req, res, next) => {
  const userId = Number(req.params.id);
  const { name, age } = req.body;

  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    const error = new Error("User not found");
    error.statusCode = 404;
    return next(error);
  }

  if (!name || !age) {
    const error = new Error("name and age are required");
    error.statusCode = 400;
    return next(error);
  }

  users[userIndex] = {
    id: userId,
    name,
    age
  };

  res.status(200).json({
    message: "User updated",
    user: users[userIndex]
  });
};

const patchUser = (req, res, next) => {
  const userId = Number(req.params.id);
  const { name, age } = req.body;

  const user = users.find(u => u.id === userId);

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    return next(error);
  }

  if (name !== undefined) user.name = name;
  if (age !== undefined) user.age = age;

  res.status(200).json({
    message: "User updated",
    user
  });
};

const deleteUser = (req, res, next) => {
  const userId = Number(req.params.id);

  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex === -1) {
    const error = new Error("User not found");
    error.statusCode = 404;
    return next(error);
  }
  users.splice(userIndex, 1);
  res.status(204).send();
};





module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  deleteUser
};
