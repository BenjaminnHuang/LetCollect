const pool = require("../db");

// POST
const addTask = async (
  question_title,
  language_used,
  code_snippet,
  explanation
) => {
  return await pool.query(
    "INSERT INTO solution_card (question_title, language_used, code_snippet, explanation) VALUES($1, $2, $3, $4) RETURNING *",
    [question_title, language_used, code_snippet, explanation]
  );
};

// GET ALL
const getAllTasks = async () => {
  return await pool.query(
    "SELECT * FROM solution_card ORDER BY solution_id ASC"
  );
};

// GET ONE
const getTaskById = async (solution_id) => {
  return await pool.query(
    "SELECT * FROM solution_card WHERE solution_id = $1",
    [solution_id]
  );
};

// PUT
const updateTask = async (
  solution_id,
  question_title,
  language_used,
  code_snippet,
  explanation
) => {
  return await pool.query(
    "UPDATE solution_card SET question_title = $1, language_used = $2, code_snippet = $3, explanation = $4 WHERE solution_id = $5",
    [question_title, language_used, code_snippet, explanation, solution_id]
  );
};

// DELETE
const deleteTask = async (solution_id) => {
  return await pool.query("DELETE FROM solution_card WHERE solution_id = $1", [
    solution_id,
  ]);
};

module.exports = { addTask, getAllTasks, getTaskById, updateTask, deleteTask };
