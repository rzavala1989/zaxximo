const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // retrieve token from header
  const token = req.header("x-auth-token");

  // if token doesnt exists
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.staff = decoded.staff;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
