const express = require("express");
const app = express();
const port = 3003; // <- 3000에서 다른 숫자로 변경
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send(`
  <form action="/" method="post">
    <input type="submit" name="position" value="문과생">
    <input type="submit" name="position" value="이과생">
  </form>
  `);
});

// app.post("/asdf", (req, res) => {
//데이터 받는 곳
//   res.redirect("/index.html");
//   app.use(express.static(__dirname + "/"));
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
