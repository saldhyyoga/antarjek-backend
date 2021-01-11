const jwtConfig = require("./config/jwt.json");

exports.ok = function (values, res, token = false) {
  var data = {
    status: "OK",
    data: values,
  };

  if (token) {
    var jwt = require("jsonwebtoken");
    var token = jwt.sign(
      { id: values.id, group: values.group },
      jwtConfig.secret
    );

    data = { ...data, token: token };
  }
  res.status(200).json(data);
  res.end();
};

exports.error = function (values, res, status) {
  var data = {
    status: "ERROR",
    messages: values,
  };
  res.json(data).status(status);
  res.end();
};
