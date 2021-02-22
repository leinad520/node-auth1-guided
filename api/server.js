const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session")

const usersRouter = require("./users/users-router.js");
const authRouter = require("./auth/auth-router.js")

const server = express();

const config = {
  name:"sessionId",
  secret: "keep it secret, keep it safe",
  cookie:{
    maxAge: 1000 * 60 * 60,
    secure:false,
    httpOnly: true
  },
  resave:false,
  saveUnitialized:false
}

server.use(session(config))
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
