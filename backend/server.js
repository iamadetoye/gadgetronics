import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/categories', (req, res) => {
  res.send(data.Categories);
});

app.get('/', (req, res) => {
  res.send('Server is ready ');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
