const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
  <form action="/" method="post">
    <input type="submit" name="position" value="문과생">
    <input type="submit" name="position" value="이과생">
  </form>
  `);
});

app.post("/", (req, res) => {
  const {
    body: { position },
  } = req;

  res.send(
    `<script>alert("${position}"); window.location.href = "/"; </script>`
    //알림창이 뜨면서 확인 클릭 시 "localhost:3000/"으로 이동
  );
});
app.listen(3003, () => {
  console.log("3003 포트에서 서버 시작");
});
