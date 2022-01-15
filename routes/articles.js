const express = require('express');
const router = express.Router();

const { getArticles, getCategoryData } = require('../controllers/articles');

router.get('/', getArticles);

router.get('/category', getCategoryData);

module.exports = router;