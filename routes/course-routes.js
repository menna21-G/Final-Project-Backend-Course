const express = require("express");
const router = express.Router();
const protect = require("../middlewares/auth-middleware");
const authorize = require("../middlewares/role-middleware");
const checkCourseOwner = require("../middlewares/course-owner-middleware");
const upload = require("../middlewares/upload-middleware");

const {
     createCourse,
     getAllCourses,
     getCourseById,
     updateCourse,
     deleteCourse,
     } = require("../controllers/course-controller");

router.post("/", protect, authorize("instructor", "admin"), upload.single("image"), createCourse);
router.get("/", protect, getAllCourses);
router.get("/:id", getCourseById);
router.patch(
  "/:id",
  protect,
  authorize("instructor", "admin"),
  checkCourseOwner,
  updateCourse
);
router.delete(
  "/:id",
  protect,
  authorize("instructor", "admin"),
  checkCourseOwner,
  deleteCourse
);
module.exports = router;