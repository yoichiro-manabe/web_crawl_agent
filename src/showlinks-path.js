/**
 * Created by ymanabe on 2016/04/08.
 */

var client = require('cheerio-httpcli');
var URL = require('url');

var url = "http://www.aozora.gr.jp/index_pages/person81.html";
var param = {};
client.fetch(url, param, function (err, $, res) {
    if(err){
        console.log("error");
        return;
    }

    $("a").each(function (idx){
        var text = $(this).text();
        var href = $(this).attr('href');

        if(!href) return;

        var href2 = URL.resolve(url, href);

        console.log(text+":"+href);
        console.log(" => "+href2 + "\n");
    });
});