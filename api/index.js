
const express = require("express");
const app = express();
const cors = require('cors');


const corsOptions = {
  origin: 'https://frontend-seven-mauve-63.vercel.app/', // Ganti dengan URL frontend yang benar
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});
app.listen(8080, () => {
  console.log("Server started at http://localhost:8080");
});
module.exports = app;
