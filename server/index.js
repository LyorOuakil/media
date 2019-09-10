const cheerio = require('cheerio');
const request = require('request');
const newIp = require('./luminati')

/*Ce fichier a pour but de lancer request et cheerio avec la page demandé*/

module.exports.requestWebsite = function (page, callback) {
    request(page, function (err, response, html) {
        if (err) {
            console.log(err);
        } else {
            if (response.statusCode === 200) {
                const $ = cheerio.load(html)
                callback(null, $)
            } else {
                callback(err, null)
            }
        }
    })
}
