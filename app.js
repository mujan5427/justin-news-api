var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 8080;
var router = require("./router/router.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('static'))

router(app);

app.listen(port, function () {

  console.log('App listening on port ' + port);
})
