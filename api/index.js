
const express = require("express");
const app = express();
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});
app.listen(8080, () => {
  console.log("Server started at http://localhost:8080");
});
module.exports = app;
