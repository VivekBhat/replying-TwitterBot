console.log("replier bot is starting..")
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);


var stream = T.stream('user');

stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {
	
	var replyto = eventMsg.in_reply_to_screen_name;
	var text = eventMsg.text;
	var from = eventMsg.user.screen_name;
	
	console.log(replyto + ' ' + from);
	
	if (replyto == 'frieza175') {

		var newtweet = '@' + from + ' thanks';
		console.log(newtweet)

	}

}