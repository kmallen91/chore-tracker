const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");

const users = require("../users/userModel");
// const validateUser = require("../middleware/validateUser");

router.post("/register", (req, res) => {
  let user = req.body;
  const newUser = { ...user, password: bcrypt.hashSync(user.password) };

  users
    .add(newUser)
    .then(saved => {
      if (saved) {
        res.status(201).json(saved);
      }
    })
    .catch(err => {
      console.log("from register", err);
      res.status(500).json({ message: `error registering user` });
    });
});

router.get("/", (req, res) => {
  users
    .find()
    .then(user => res.status(200).json(user))
    .catch(err => {
      console.log(`error from get`, err);
      res.status(500).json({ message: `error getting users` });
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;
  users
    .findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.username)) {
        const token = getJwtToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}`,
          userId: user.id,
          username: user.username,
          token: token
        });
      } else {
        res.status(401).json({ message: `Invalid credentials` });
      }
    })
    .catch(err => {
      console.log(`error from login`, err);
      res.status(500).json({ error: `error logging in` });
    });
});

function getJwtToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret.jwtSecret, options);
}

module.exports = router;
