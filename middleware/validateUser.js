const jwt = require("jsonwebtoken");
const secret = require("../config/secret");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret.jwtSecret, (error, decodedToken) => {
      req.user = decodedToken.subject;
      if (error) {
        res.status(401).json({ message: `bad token` });
      } else {
        next();
      }
    });
  } else {
    res.status(400).json({ message: `no credentials provided` });
  }
};
