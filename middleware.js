const jwt = require("jsonwebtoken");
const jwtConfig = require("./config/jwt.json");

exports.admin = (req, res, next) => {
  // get header
  const authHeader = req.headers["authorization"];

  // get header and split between token and bearer,ang get index 1
  // if header false return null
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    res.status(401).send({ message: "Unauthorized" });
  }

  // Lalu jika terdapat header kita juga perlu memastikan apakah token yang kita dapatkan valid
  jwt.verify(token, jwtConfig.secret, (err, user) => {
    if (err) {
      return res.status(403).send({ message: "Your Token No Longer Valid" });
    }
    user_id = user.id;
    next();
  });
};
