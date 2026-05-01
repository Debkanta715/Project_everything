// middle ware are those parts which have the common code for and we use it simply in the other file we dont need to write again

const usermodel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function authmiddleware(req, res, next) {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1]; // check token in the two parts in the  cookies also in the headers authorization part
  if (!token) {
    return res.status(401).json({
      message: "unauthorized access, toekn is missing",
    });
  }

  // now token verify
  try {
    const decoded = jwt.verify(token, process.env.JWT_URI); // inside the decoded the user id are come and its is verify and then
    const user = await usermodel.findById(decoded.userId); // it is store in here in the user
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({
      message: "unauthorized access, toekn is invalid",
    });
  }
}

module.exports = { authmiddleware };
