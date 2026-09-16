const Enrollment = require("../models/enrollment-model");

const createEnrollment = async (req, res) => {
  try {
    const { courseId } = req.body;

    const existingEnrollment = await Enrollment.findOne({
      student: req.user.userId,
      course: courseId,
    });

    if (existingEnrollment) {
      return res.status(400).json({
        status: "fail",
        message: "You are already enrolled in this course",
      });
    }

    const enrollment = await Enrollment.create({
      student: req.user.userId,
      course: courseId,
    });

    const populatedEnrollment = await Enrollment.findById(
      enrollment._id
    ).populate("course");

    res.status(201).json({
      status: "success",
      data: {
        enrollment: populatedEnrollment,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const getMyCourses = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({
      student: req.user.userId,
    }).populate("course");

    res.status(200).json({
      status: "success",
      count: enrollments.length,
      data: {
        enrollments,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

module.exports = {
  createEnrollment,
  getMyCourses,
};