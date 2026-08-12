const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    instructor: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true,
},

    category: {
      type: String,
      required: true,
      enum: [
        "frontend",
        "backend",
        "database",
        "programming",
        "devops",
        "mobile",
      ],
    },

    level: {
      type: String,
      required: true,
      enum: ["beginner", "intermediate", "advanced"],
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    duration: {
      type: Number,
      required: true,
      min: 1,
    },

    image: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  });

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;