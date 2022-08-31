const express = require("express");
const app = express();
const port = 3000;
const router = require("./router.js");
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use("/api/v1/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
