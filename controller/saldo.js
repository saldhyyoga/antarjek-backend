const db = require("../models");
const response = require("../res");

exports.updateSaldo = async (req, res) => {
  try {
    const { id } = req.params;
    const { saldo } = req.body;
    const user = await db.user.findByPk(id);
    console.log(user);
    const result = await db.user.update(
      {
        saldo: parseInt(saldo) + user.saldo,
      },
      {
        where: { id },
      }
    );

    return response.ok(result, res);
  } catch (error) {
    console.log(error);
    response.error(`${error}`, res, 500);
  }
};
