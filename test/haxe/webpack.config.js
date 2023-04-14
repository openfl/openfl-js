var glob = require ("glob");
var path = require ("path");

module.exports = {
	mode: "development",
	entry: {
		bundle: [ "./entry.js" ]
	},
	output: {
		path: __dirname
	},
	resolve: {
		alias: {
			"openfl": path.resolve (__dirname, '../../lib/openfl/')
		}
	}
};