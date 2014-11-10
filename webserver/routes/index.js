var NexmoHandler = require('./NexmoHandler');
module.exports = function (app) {

	var nexmoHandler = new NexmoHandler();
	//Ping to check the application
	app.get('/ping', function (req, res, next) {
		res.send("pong");
	});

	//Nexmo callback
	app.get("/api/nexmo/inbound", nexmoHandler.handleIncomingMessage);

	app.post('/api/nexmo/inbound', nexmoHandler.handleIncomingMessage);
};

