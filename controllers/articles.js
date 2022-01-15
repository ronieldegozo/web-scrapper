//packages
const cheerio = require('cheerio');
const axios = require('axios');

let url = 'https://www.inquirer.net/';
let url2 = axios(url);

exports.getArticles = (req, res) => {
    url2
        .then((result) => {
            const html = result.data; //DATA FROM URL
            const datas = cheerio.load(html); //LOAD DATA INTO CHEERIO

            const articles = [];
            datas('#tr_boxs3', html).each(function(){
                const title = datas(this).find('a').text();
                const link = datas(this).find('a').attr('href');
                const date = datas(this).find('h6 span').text();
                const category = datas(this).find('h6').text();

                // datas('#tr_boxs3').find(datas('h6')).text();
                // const category = datas(this).find('h6').text();

                console.log(category);

                articles.push({
                    title,
                    link,
                    date,
                    category
                });
        
            })
            res.json(articles);
        })
        .catch((err) => {
            console.log(err)
        })     
};
