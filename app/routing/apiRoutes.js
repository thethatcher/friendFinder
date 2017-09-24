var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app){

	app.get("/api/friends", function(req,res){
		res.json(friends);
	});

	app.post("/api/friends", (req,res)=>{
		var bestFriend = findBestFriend(req.body);
		console.log("best Friend: ", bestFriend);
		friends.push(req.body);
		res.json(bestFriend);
	});
}

function checkDiff(newFriend,friend){
	var difference = 0;
	for (var i = 0; i < 10; i++) {
		difference += Math.abs(newFriend.answers[i] - friend.answers[i])
	}
	return difference;
}

function findBestFriend(newFriend){
	var bestFriendIndex = 0;
	var bestFriendDiff = 100;
	for (var i = 0; i < friends.length; i++) {
		var diff = checkDiff(newFriend,friends[i])
		if(diff < bestFriendDiff){
			bestFriendDiff = diff;
			bestFriendIndex = i;
		}
	}
	console.log("difference: " + diff);
	return friends[bestFriendIndex];
}