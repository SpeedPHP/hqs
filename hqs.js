#! /usr/bin/env node

var fpm = require("js-fpm")
var options = {
    "mode" : "fastcgi",
    "port" : "3000",
    "ip" : "localhost",
    "main" : require("path").resolve("./main.js")
}
fpm.run(options);