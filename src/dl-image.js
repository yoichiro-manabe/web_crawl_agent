/**
 * Created by ymanabe on 2016/04/08.
 */

var client = require('cheerio-httpcli');
var request = require('request');
var fs = require('fs');
var URL = require('url');

var savedir = __dirname + "/output/img";

if(!fs.existsSync(savedir)){
    fs.mkdirSync(savedir);
}

var url = "https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%8C";
var param = {};
client.fetch(url, param, function (err, $, res) {
    if(err){
        console.log("error");
        return;
    }

    $("img").each(function (idx){
        var src = $(this).attr('src');
        src = URL.resolve(url, src);

        var fname = URL.parse(src).pathname;
        fname = savedir + "/" + fname.replace(/[^a-zA-Z0-9\.]+/g,'_');
        request(src).pipe(fs.createWriteStream(fname));
        
    });
});