const server = require('../server/index');
const newIp = require('../server/luminati');

function callToServerToGetHtml(callback) {
    newIp.getNewIp((data) => {
        data = JSON.parse(data)
        let options = {
            url: 'https://mrmondialisation.org/category/articles',
            proxy: `http://${data.ip}:22225`,
        }
        server.requestWebsite(options, function (err, data) {
            if (err) {
                console.log('Failed to get data to server -> ', err);
            }
            console.log(data);
            process.exit(0)
            callback(data)
        })
    })
}


callToServerToGetHtml(function ($) {
    getAllArticlesFromPage($);
})


function getAllArticlesFromPage($) {
    let articles = [];

    let selecteur = $('.entry-title.td-module-title a');
    selecteur.map(index => {
        articles.push(selecteur[index].attribs.href)
    })
    console.log(articles)
}