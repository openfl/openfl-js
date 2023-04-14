import UncaughtErrorEvent from "openfl/events/UncaughtErrorEvent";
var assert = chai.assert;


describe ("ES6 | UncaughtErrorEvent", function () {
	
	
	it ("info", function () {
		
		// TODO: Confirm functionality
		
		var uncaughtErrorEvent = new UncaughtErrorEvent (UncaughtErrorEvent.UNCAUGHT_ERROR);
		var exists = uncaughtErrorEvent.error;
		
		assert.equal (exists, null);
		
	});
	
	
	it ("new", function () {
		
		// TODO: Confirm functionality
		
		var uncaughtErrorEvent = new UncaughtErrorEvent (UncaughtErrorEvent.UNCAUGHT_ERROR);
		
		assert.notEqual (uncaughtErrorEvent, null);
		
	});
	
	
});