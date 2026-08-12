const Course = require("../models/course-model");

const checkCourseOwner = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        status: "fail",
        message: "Course not found",
      });
    }

    if (
      course.instructor.toString() !== req.user.userId &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        status: "fail",
        message: "You can only modify your own courses",
      });
    }

    req.course = course;

    next();
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Invalid course ID",
    });
  }
};

module.exports = checkCourseOwner;