const express = require("express");
const app = express();
const port = 3000;
// const router = require("./router.js");

const AccountModel = require("./models/account");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use("/api/v1/", router);

app.post("/register", (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  AccountModel.create({
    username: username,
    password: password,
  })
    .then((data) => {
      console.log("data",data);
    })
    .catch((err) => {
      res.status(500).json("tao tai khoan that bai");
    });
});

app.get("/", (req, res, next) => {
  res.json("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
