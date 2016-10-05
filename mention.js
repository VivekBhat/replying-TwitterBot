console.log("replier bot is starting..")
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

	var query ={
		 q: '@frieza175  ', count: 100 
		}


	T.get('search/tweets', query, searched) ;
	
	function searched(err,data,response){

	// var fs = require('fs');
	// var json = JSON.stringify(data, null, 2);
	// fs.writeFile("myData.json", json);
	
	console.log(data)
	
	
	}

	// T.post('direct_messages/new', {user_id:})

// function tweetIt(screenname, txt){

// 	var tweet = {
// 		screen_name : data.screenname , 
// 		text: txt
// 	}

// // setTimeout(function() {T.post('statuses/update', tweet, tweeted)}, 1000*20);

//    setTimeout(function() {T.post('direct_messages/new', tweet , callback)}, 1000*25);

	
	

// function callback(err, data, response) {
// 	if (err) {
// 		console.log(err.message);
// 	} else {
// 		console.log("It Worked!");
// 		}

// 	}