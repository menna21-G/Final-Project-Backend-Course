const Course = require("../models/course-model");

const createCourse = async (req, res) => {
  try {
    const course = await Course.create({
    ...req.body,
    instructor: req.user.userId,
    image: req.file ? req.file.path : null,
});

    res.status(201).json({
      status: "success",
      data: {
        course,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate(
  "instructor",
  "name email role"
);

    res.status(200).json({
      status: "success",
      count: courses.length,
      data: {
        courses,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate(
  "instructor",
  "name email role"
);
    if (!course) {
      return res.status(404).json({
        status: "fail",
        message: "Course not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        course,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Invalid course ID",
    });
  }
};

const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!course) {
      return res.status(404).json({
        status: "fail",
        message: "Course not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        course,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({
        status: "fail",
        message: "Course not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Course deleted successfully",
      data: {
        course,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Invalid course ID",
    });
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};