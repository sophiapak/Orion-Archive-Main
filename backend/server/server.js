const express = require('express');
const app = express();
const PORT = 3333;
const path = require('path');

app.use(express.json());

app.get('/', (req, res) => {
  console.log('Main route');
});

// global error handler
app.use((err, req, res, next) => {
  const defaultError = {
    status: 500,
    message: { error: `An Error Occured ${err}` },
  };
  const finalError = Object.assign(defaultError, err);
  res.status(finalError.status).json(finalError.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
