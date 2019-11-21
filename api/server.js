const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const validateUser = require("../middleware/validateUser");

const userRouter = require("../users/userRouter");
const choresRouter = require("../chores/choresRouter.js");
const childrenRouter = require("../children/childrenRouter.js");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use("/users", userRouter);
server.use("/chores", choresRouter);
server.use("/children", validateUser, childrenRouter);

server.get("/", (req, res) => {
  res.send("Server running");
});

module.exports = server;
