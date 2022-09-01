const { response } = require("express");
const express = require("express");
const router = express.Router();
const app = express();

const AccountModel = require("../models/account");

// lay du lieu tu db
router.get("/", (req, res, next) => {
  AccountModel.find({})
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  AccountModel.findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});

// them moi
router.post("/", (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  AccountModel.findOne({ username: username })
    .then((data) => {
      if (data) {
        res.json("user da ton tai");
      } else {
        AccountModel.create({ username: username, password: password }).then(
          (data) => res.json(data)
        );
      }
    })
    .catch((e) => res.status(500).json("tao that bai"));
});

// update db
router.put("/:id", (req, res, next) => {
  let id = req.params.id;
  let newpassword = req.body.newpassword;

  AccountModel.findByIdAndUpdate(id, {
    password: newpassword,
  })
    .then((data) => res.json("thanh cong"))
    .catch((e) => res.status(500).json("that bai"));
});

//xoa
router.delete("/:id", (req, res, next) => {
  let id = req.params.id;
  AccountModel.deleteOne({
    _id: id,
  })
    .then((data) => res.json("xoa thanh cong"))
    .catch((e) => res.status(500).json("xoa that bai"));
});

module.exports = router;
