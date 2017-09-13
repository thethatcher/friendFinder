var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var PORT = 8080;
var app = express();
var apiRoutes = require("./app/routing/apiRoutes.js")(app);
var htmlRoutes = require("./app/routing/htmlRoutes.js")(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.listen(process.env.PORT || PORT, ()=>{
	console.log("Server is listening on PORT " + PORT);
})