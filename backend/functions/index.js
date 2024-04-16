const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./controllers/user");

app.use(cors({ origin: true }));
app.use(express.json());

app.use("/", userRouter);

exports.user = functions.https.onRequest(app);
