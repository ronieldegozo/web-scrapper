//packages
const cheerio = require('cheerio');
const axios = require('axios');

let url = 'https://www.inquirer.net/';
let url2 = axios(url);
let articles = [];

exports.getArticles = async (req, res) => {

    try {
        const url1 = await url2;
        const html = url1.data;
        const datas = cheerio.load(html); //LOAD DATA FROM CHEERIO
  
        datas('#tr_boxs3', html).each(function(){
            const title = datas(this).find('a').text();
            const link = datas(this).find('a').attr('href');
            const date = datas(this).find('h6 span').text();
            const category = datas(this).find('h6').text();
 
            const articlesLength = articles.length;
      
            articles.push({
                id: articlesLength + 1,
                title,
                link,
                date,
                category
            });
        })
        res.status(201).json({
            status: 'Articles fetched',
            articles
        })

    }catch(err){
        console.log(err)
    }
};

exports.getCategoryData = async (req, res) => {
    res.status(201).json({
        status: 'Category data fetched',
    });
};

exports.getArticleId = async (req, res) => {
    // const articleId = req.params.articleId;
    const articleId = articles;
    console.log(articleId);
};