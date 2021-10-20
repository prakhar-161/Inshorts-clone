const router = require('express').Router();
const getNews = require('../controller/news-controller.js');

router.get('/news',getNews);
// data from getNews news controller goes to api.js 

module.exports = router;