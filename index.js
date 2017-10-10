// Initialize dotenv.
const dotenv = require('dotenv');
dotenv.config();

const ConversationV1 = require('watson-developer-cloud/conversation/v1');

// Create new instance of the Conversation service.
const conversation = new ConversationV1({
    username: process.env.USERNAME,
	password: process.env.PASSWORD,
	version_date: ConversationV1.VERSION_DATE_2016_09_20
});

// Make a request using the message API.
conversation.message({
	input: {
		text: ' '
    }, 
    workspace_id: process.env.WORKSPACE_ID
}, function(err, response) { 
    if (err) 
        console.error(err);
    else
        console.log(JSON.stringify(response, null, 2));
});