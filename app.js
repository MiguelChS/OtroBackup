/**
 * Created by Miguel on 30/9/2016.
 */
var express = require('express');
var app = express();

app.get('/backup', function (req, res) {
    res.download("./backUpHeroku");
});

app.listen(8080, function () {
    console.log('Example app listening on port 3000!');
});