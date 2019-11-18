const user = require("../users/userModel");

module.exports = {
  checkUser
};

function checkUser(req, res, next) {
  const username = req.body.username;
  users
    .findBy({ username })
    .first()
    .then(user => {
      if (!user) {
        next();
      } else {
        res.status(401).json({ message: `This user already exists` });
      }
    });
}
