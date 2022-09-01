const express = require("express");
const app = express();
const port = 3000;
const accountRouter = require("./routers/account");
const bodyParser = require("body-parser");
const AccountModel = require("./models/account");
const { response } = require("express");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/register", (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  AccountModel.findOne({ username: username })
    .then((data) => {
      if (data) {
        res.json("user da ton tai");
      } else {
        AccountModel.create({ username: username, password: password }).then(
          (data) => res.json("tao thanh cong")
        );
      }
    })

    .catch((e) => res.status(500).json("tao that bai"));
});

app.post("/login", (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  AccountModel.findOne({ username: username, password: password })
    .then((data) => {
      if(data) {
        res.json("dang nhap thanh cong");
      }else {
        res.status(400).json("dang nhap that bai")
      }
    })
    .catch((err) => {
      res.status(500).json("co loi server");
    });
});

app.use('/api/account', accountRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
