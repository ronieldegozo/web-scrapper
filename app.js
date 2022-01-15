const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const articlesRoute = require('./routes/articles');

app.use(articlesRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});