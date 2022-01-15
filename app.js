const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');

//routes
const articlesRoute = require('./routes/articles');

//middlewares
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

//application routes
app.use(articlesRoute);

//ports
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});