const express = require("express");
const router = express.Router();
const admin = require("../firebase.js");
const db = admin.firestore();

// get all posts
router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("posts").get();

    const posts = [];
    snapshot.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();
      posts.push({ id, ...data });
    });

    res.status(200).send(JSON.stringify(posts));
  } catch (error) {
    res.status(500).send(error);
  }
});

// add a post
router.post("/", async (req, res) => {
  const post = req.body;
  try {
    await db.collection("posts").add(post);
    res.status(201).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

// get a post
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const post = await db.collection("posts").doc(id).get();
    if (post.exists) {
      const postData = post.data();
      const postId = post.id;
      res.status(200).send(JSON.stringify({ id: postId, ...postData }));
    } else {
      res.status(404).send("Post not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// update a post
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const post = req.body;
  try {
    await db.collection("posts").doc(id).update(post);
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete a post
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await db.collection("posts").doc(id).delete();
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
