const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  deleteUser
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.patch("/:id", patchUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);
module.exports = router;
