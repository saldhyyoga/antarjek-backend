const db = require("../models");
const response = require("../res");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.user.findOne({
      where: {
        email: email,
      },
    });

    console.log(user);

    if (user === null) {
      return response.error(`User not found`, res);
    }

    bcrypt.compare(password, user.password, function (err, match) {
      if (err) {
        response.error("ERR-COMPARE", res, 500);
        return false;
      }

      if (!match) {
        response.error(`Password does'nt match`, res, 500);
        return false;
      }

      response.ok(
        {
          id: user.id,
          name: user.name,
          group: user.role_id,
        },
        res,
        true
      );
    });
  } catch (error) {
    console.error(error);
    response.error(`${error}`, res);
  }
};

exports.signup = async (req, res) => {
  const { name, email, password, phone, address } = req.body;
  try {
    const checkUser = await db.user.findOne({
      where: {
        email: email,
      },
    });

    if (checkUser) {
      response.error(
        "Email" + email + " sudah terdaftar pada sistem kami.",
        res,
        500
      );
      return false;
    }

    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        console.log(err);
        response.error("ERR-HASH", res, 500);
        return false;
      }
      const user = await db.user.create({
        name,
        email,
        password: hash,
        phone,
        address,
        role_id: 2,
        saldo: 0,
      });

      response.ok(user, res);
    });
  } catch (error) {
    response.error(error, res);
  }
};
