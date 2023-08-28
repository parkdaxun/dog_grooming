const express = require('express');
const app = express()

app.use('/', function(req, res) {
    res.send("Hello Cesium");
});

app.listen(8080, function() {
    console.log("Hello Cesium");
});
