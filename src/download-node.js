/**
 * Created by ymanabe on 2016/04/08.
 */
var url = "http://kujirahand.com";
var savepath = "src/output/test.html";

var http = require('http');
var fs = require('fs');

var outfile = fs.createWriteStream(savepath);

http.get(url, function(res){
    res.pipe(outfile);
    res.on('end',function(){
        outfile.close();
        console.log('ok');
    });
});