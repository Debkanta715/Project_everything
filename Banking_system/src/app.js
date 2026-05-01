const express = require("express");

//route require
const authrouter = require("./routers/auth.routes");
const accountauthrouter = require("./routers/account.routes");

//
const cookieparser = require("cookie-parser");
const app = express(); // call the express and store it in the app for api create

// middleware
app.use(express.json()); // for convert to string or plain text to json format
app.use(cookieparser()); // it is a middelware

//api
app.use("/api/auth", authrouter);
app.use("/api/auth", authrouter);

//api for account

app.use("/api/accounts", accountauthrouter);
// exports the app for the outside use
module.exports = app;
