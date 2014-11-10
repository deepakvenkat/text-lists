var url = require("url");

function NexmoHandler () {
	"use strict";

	this.handleIncomingMessage = function (req, res, next) {
		//Handle Incoming SMS
		console.log(req.query);
		res.send(200);
	};
}

module.exports = NexmoHandler;