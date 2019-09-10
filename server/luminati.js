let request = require('request');

let super_proxy = 'http://' + username + '-session-' + session_id + ':' + password + '@zproxy.lum-superproxy.io:' + port;
let options = {
    url: 'http://lumtest.com/myip.json',
    proxy: super_proxy,
};
console.log('Performing request');

exports.getNewIp = function (callback) {
    request(options, function (err, data) {
        if (err) {
            console.log(err)
        } else {
            callback(data.body)
        }
    })
}