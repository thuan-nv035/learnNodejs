const express = require("express");
const router = express.Router();
const app = express();

router.get("/", (req, res) => {
  res.json("hihi");
});

router.post("/", (req, res) => {
  console.log(req.headers);
  res.json("afsfb");
});

router.put("/", (req, res) => {
  res.json("asvsad");
});

router.delete("/", (req, res) => {
  res.json("asvdsdv");
});

module.exports = router;
