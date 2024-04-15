const pool = require("../db");
const express = require("express");
const router = express.Router();
const {
  addTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../Models/taskModel");

router.post("/add", async (req, res) => {
  try {
    const { question_title, language_used, code_snippet, explanation } =
      req.body;
    const data = await addTask(
      question_title,
      language_used,
      code_snippet,
      explanation
    );
    res.json(data.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message }); // Send an error response
  }
});

// get all tasks
router.get("/", async (req, res) => {
  try {
    const allTasks = await getAllTasks();
    res.json(allTasks.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message }); // Send an error response
  }
});

// get one tasks
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await getTaskById(id);
    res.json(task.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message }); // Send an error response
  }
});

// update a task
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { question_title, language_used, code_snippet, explanation } =
      req.body;
    const data = await updateTask(
      id,
      question_title,
      language_used,
      code_snippet,
      explanation
    );
    res.json("Task was updated");
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message }); // Send an error response
  }
});

// delete a task
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteTask(id);
    res.json("Task was deleted");
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message }); // Send an error response
  }
});

module.exports = router;
