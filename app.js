const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//packages
const cheerio = require('cheerio');
const axios = require('axios');
    
app.get('/', (req, res) => {
    const url = 'https://www.inquirer.net/';
    
    axios(url)
        .then((result) => {
            const html = result.data; //DATA FROM URL
            const datas = cheerio.load(html); //LOAD DATA INTO CHEERIO

            const articles = [];
            datas('#tr_boxs3', html).each(function(){
                const title = datas(this).find('a').text();
                const link = datas(this).find('a').attr('href');
                const date = datas(this).find('span').text();
        
                articles.push({
                    title,
                    link,
                    date
                });
        
            })
            res.json(articles);
        })
        .catch((err) => {
            console.log(err)
        })     
});

    
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});