import IOErrorEvent from "openfl/events/IOErrorEvent";
var assert = chai.assert;


describe ("TypeScript | IOErrorEvent", function () {
	
	
	it ("new", function () {
		
		// TODO: Confirm functionality
		
		var ioErrorEvent = new IOErrorEvent (IOErrorEvent.IO_ERROR);
		assert.notEqual (ioErrorEvent, null);
		
	});
	
	
});