var jsw = require("jsonwebtoken");

exports.check_token = async (req, res, next) => {
  jsw.verify(req.headers.authorization, "bhume", next);
};
