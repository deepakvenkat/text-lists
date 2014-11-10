var express = require('express'),
	domain = require("domain").create(),
	nconf = require("nconf"),
	app = express(),
	connect = require("connect"),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override"),
	util = require("util"), 
	config = require("./config"),
	routes = require("./routes"),
	appConfig;


nconf.argv().env();

domain.on("error", function (err) {
	console.log(util.inspect(err));
});


function startApp () {
	appConfig = config[nconf.get("NODE_ENV")] || config["dev"];
	app.set("view options", {layout: false});
	app.use(bodyParser());
	app.use(methodOverride());
	app.use(app.router);
	routes(app);
	var server = app.listen(appConfig.port, function() {
		console.log("Listening on port %d", server.address().port);
	});
}

domain.run(startApp);