const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Configure CORS to allow requests from your frontend URL without trailing slash
const corsOptions = {
  origin: 'https://frontend-seven-mauve-63.vercel.app/', // URL frontend tanpa trailing slash
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
