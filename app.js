const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');

//routes
const articlesRoute = require('./routes/articles'); //articles route
const error404 = require('./controllers/404'); //page not found

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

//PAGE NOT FOUND
app.use(error404.get404);

//ports
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}); 