const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const userRouter = require("./controllers/user");
const postRouter = require("./controllers/post");

// Create the Express app for the 'user' function
const userApp = express();
userApp.use(cors({ origin: true }));
userApp.use(express.json());
userApp.use("/", userRouter);
exports.users = functions.https.onRequest(userApp);

// Create the Express app for the 'post' function
const postApp = express();
postApp.use(cors({ origin: true }));
postApp.use(express.json());
postApp.use("/", postRouter);
exports.posts = functions.https.onRequest(postApp);
