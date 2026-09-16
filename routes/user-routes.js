const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user-controller");

const protect = require("../middlewares/auth-middleware");
const authorize = require("../middlewares/role-middleware");

// Authentication

router.post("/register", registerUser);

router.post("/login", loginUser);

// User CRUD - Admin Only

// Get all users
router.get(
  "/",
  protect,
  authorize("admin"),
  getAllUsers
);

// Get user by ID
router.get(
  "/:id",
  protect,
  authorize("admin"),
  getUserById
);

// Create user
router.post(
  "/",
  protect,
  authorize("admin"),
  createUser
);

// Update user
router.patch(
  "/:id",
  protect,
  authorize("admin"),
  updateUser
);

// Delete user
router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteUser
);


module.exports = router;