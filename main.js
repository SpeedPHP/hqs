response.writeHead("200", {'Content-Type': 'text/plain'})
var logger = require('tracer').console({
    format : "[{{title}}] {{timestamp}} {{message}}",
    dateformat : "yyyy-mm-dd HH:MM:ss",
    preprocess :  function(data){
        data.title = data.title.toUpperCase();
    }
});
var url = String($get.do);
if (url !== "undefined") {
    (function (url) {
        setTimeout(function () {
            require("http").get("http://" + url, function (res) {
                logger.info(url + " return " + res.statusCode)
            }).on("error", function (err) {
                logger.error(err.message);
            });
        }, 1000)
    })(url);
}