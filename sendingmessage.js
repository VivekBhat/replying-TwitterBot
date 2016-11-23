console.log("replier bot is starting..")
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);


var stream = T.stream('user');

stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {
	
	var replyto = eventMsg.in_reply_to_screen_name;
	var text = eventMsg.text;
	var screenname = eventMsg.user.screen_name;
	var name = eventMsg.user.name;
	
	console.log( 'from: ' + eventMsg.user.name);
	
	if (replyto == 'botifulbot') {

		var newtweet = 'Thanks a lot for mentioning us ' + name + ' you are so awesome..' ;
		console.log("Waiting for 25 seconds")
		tweetIt(screenname,newtweet);
	}
}
function tweetIt(screenname, txt){

	var tweet = {
		screen_name : screenname , 
		text: txt
	}

// setTimeout(function() {T.post('statuses/update', tweet, tweeted)}, 1000*20);

   setTimeout(function() {T.post('direct_messages/new', tweet , callback)}, 1000*25);

	
	

function callback(err, data, response) {
	if (err) {
		console.log(err.message);
	} else {
		console.log("It Worked!");
		}

	}
}
