require('dotenv').config();
import express from 'express';

const app = express();
app.use((req, res, next) => {
  res.send('Server running');
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${process.env.PORT}.`);
});
