const express = require("express");
const app = express();
const port = 3000;
const router = require("./router.js");
const bodyParser = require("body-parser");
const path = require("path");
// parse application/x-www-form-urlencoded
app.use('/public', express.static(path.join(__dirname, '/public')))
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use("/api/v1/", router);

app.get('/', (req, res) => {
  const duongdanfile = path.join(__dirname, 'home.html')
  res.sendfile(duongdanfile)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
