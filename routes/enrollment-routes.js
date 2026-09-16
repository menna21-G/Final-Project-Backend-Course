const express = require("express");

const router = express.Router();

const protect = require("../middlewares/auth-middleware");

const {
  createEnrollment,
  getMyCourses,
} = require("../controllers/enrollment-controller");

router.post("/", protect, createEnrollment);

router.get("/my-courses", protect, getMyCourses);

module.exports = router;