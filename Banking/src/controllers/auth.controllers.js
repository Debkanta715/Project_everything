const usermodel = require("../models/user.model");
// const emaiservices = require("../servives/email.service");
const emaiservices = require("../servives/email.service");
/* user registration controller 
and the api is POST /api/auth/register
*/
const jwt = require("jsonwebtoken");
async function userregistration(req, res) {
  const { email, password, name } = req.body;

  const isemailalreadyexits = await usermodel.findOne({
    email: email,
  });

  if (isemailalreadyexits) {
    return res.status(422).json({
      message: "user already exists with email",
      status: "failed",
    });
  }

  // if user are not exaits then we create a new account
  const user = await usermodel.create({
    email,
    password,
    name,
  });

  const token = jwt.sign(
    {
      userId: user._id, // for check any think token need , like we have a normal user an we have a prime user so by this way here we can give user information tat th user is prime or user is normal for this here we have give the user token also,
    },
    process.env.JWT_URI, // a secrect key for the hash  our token
    { expiresIn: "3d" }, // expire date
  );

  res.cookie("token", token);

  //final response when all the work done or after send the data from the api

  res.status(201).json({
    message: "user created sucessfully ",
    user: {
      _id: user._id,
      email: user._email,
      name: user.name,
    },
  });

  // email send after create a account

  await emaiservices.sendRegistrationEmail(user.email, user.name);
}

/*
login api 
api is:- /api/auth/login
*/
async function login(req, res) {
  const { email, password } = req.body;

  const user = await usermodel
    .findOne({
      // find the is alredey register or not
      email,
    })
    .select("+password"); // in the model we said password are not show for this password are not came here and for this we use .select("+password")

  if (!user) {
    // if not register then return this massegae
    res.status(401).json({
      message: "Email ans password is invalid",
    });
  }

  // if user registerd then compare the password to database password to given password
  const isvalidpassword = await user.comparePassword(password);

  if (!isvalidpassword) {
    return res.status(401).json({
      message: "emai and password is invalid ",
    });
  }

  const token = jwt.sign(
    {
      userId: user._id, // for check any think token need , like we have a normal user an we have a prime user so by this way here we can give user information tat th user is prime or user is normal for this here we have give the user token also,
    },
    process.env.JWT_URI, // a secrect key for the hash  our token
    { expiresIn: "3d" }, // expire date
  );

  res.cookie("token", token); // sent to it in the cookie

  res.status(200).json({
    message: "user created sucessfully ",
    user: {
      _id: user._id,
      email: user._email,
      name: user.name,
    },
  });

  // final massage
}

// now user get a jwt token for future  verify

module.exports = { userregistration, login };
