const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const userRouter = require("./controllers/user");

// Create the Express app for the 'user' function
const userApp = express();
userApp.use(cors({ origin: true }));
userApp.use(express.json());
userApp.use("/", userRouter);
exports.user = functions.https.onRequest(userApp);
