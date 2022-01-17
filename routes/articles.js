const express = require('express');
const router = express.Router();

const { getArticles, getCategoryData , getArticleId} = require('../controllers/articles');

router.get('/', getArticles);

router.get('/category', getCategoryData);

//get article by id
router.get('/category/:articleId', getArticleId);

module.exports = router;