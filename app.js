const express = require('express');
const app = express();
require('dotenv').config();
const { jokeRouter } = require('./src/routes/router');
const port = process.env.PORT || 3000


app.use(express.json());
app.use('/joke', jokeRouter);
  

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

