var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app){

	app.get("/api/friends", function(req,res){
		res.json(friends);
	});

	app.post("/api/friends", (req,res)=>{
		// friends.push(req.body);
		console.log("post request received.")
		console.log("req",req.body);
		res.json(true);
	});
}

