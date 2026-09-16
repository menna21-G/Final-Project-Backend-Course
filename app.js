
const dns = require('dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);


require("dotenv").config();

const express = require("express");

const cors = require("cors");

const courseRouter = require("./routes/course-routes");

const userRouter = require("./routes/user-routes");

const enrollmentRouter = require("./routes/enrollment-routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/v1/courses", courseRouter);

app.use("/api/v1/users", userRouter);

app.use("/api/v1/enrollments", enrollmentRouter);

const connectDB = require("./config/db");

connectDB();

app.get("/", (req, res) => {

  res.send("Smart Course Management System API");

});

app.listen(5000, () => {

  console.log("Server is running on port 5000");

});