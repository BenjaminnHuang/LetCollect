const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

// get all users
router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("users").get();

    const users = [];
    snapshot.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();
      users.push({ id, ...data });
    });

    res.status(200).send(JSON.stringify(users));
  } catch (error) {
    res.status(500).send(error);
  }
});

// add an user
router.post("/", async (req, res) => {
  const user = req.body;
  try {
    await db.collection("users").add(user);
    res.status(201).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

// get an user
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await db.collection("users").doc(id).get();
    if (user.exists) {
      const userData = user.data();
      const userId = user.id;
      res.status(200).send(JSON.stringify({ id: userId, ...userData }));
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// update an user
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const user = req.body;
  try {
    await db.collection("users").doc(id).update(user);
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete an user
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await db.collection("users").doc(id).delete();
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
