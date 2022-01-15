//packages
const cheerio = require('cheerio');
const axios = require('axios');

let url = 'https://www.inquirer.net/';
let url2 = axios(url);

exports.getArticles = async (req, res) => {

    try {
        const url1 = await url2;
        const html = url1.data;
        const datas = cheerio.load(html); //LOAD DATA FROM CHEERIO
        const articles = [];
        datas('#tr_boxs3', html).each(function(){
            const title = datas(this).find('a').text();
            const link = datas(this).find('a').attr('href');
            const date = datas(this).find('h6 span').text();
            const category = datas(this).find('h6').text();

            articles.push({
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
