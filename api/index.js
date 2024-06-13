
const express = require("express");
const app = express();
app.get("/api", (req, res) => {
  res.send(
    res.send({
      msg: "hello world`",
      name: "vercel-app"
    })
  );
});
app.listen(8080, () => {
  console.log("Server started at http://localhost:8080");
});
module.exports = app;
