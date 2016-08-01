var express = require('express');
var TinyURL = require('tinyurl');
var app = express();

app.get('/', function (req, res) {
    TinyURL.shorten(decodeURIComponent((req.query.url)), function(result) {
        res.send(result);
    });
});

app.listen(3002);
