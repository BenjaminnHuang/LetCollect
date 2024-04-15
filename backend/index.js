require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const PORT = process.env.PORT || 5000;
tasksRoutes = require("./Controllers/taskController");

// middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/solution", tasksRoutes);

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
