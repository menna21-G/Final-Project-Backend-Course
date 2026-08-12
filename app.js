
require("dotenv").config();

const express = require("express");

const courseRouter = require("./routes/course-routes");
const userRouter = require("./routes/user-routes");

const app = express();

app.use(express.json());
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/users", userRouter);

const connectDB = require("./config/db");

connectDB();

app.get("/", (req, res) => {
    res.send("Smart Course Management System API");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});