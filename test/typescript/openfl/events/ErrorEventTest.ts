import ErrorEvent from "openfl/events/ErrorEvent";
var assert = chai.assert;


describe ("TypeScript | ErrorEvent", function () {
	
	
	it ("errorID", function () {
		
		// TODO: Confirm functionality
		
		var errorEvent = new ErrorEvent (ErrorEvent.ERROR);
		var exists = errorEvent.errorID;
		
		assert.notEqual (exists, null);
		
	});
	
	
	it ("new", function () {
		
		// TODO: Confirm functionality
		
		var errorEvent = new ErrorEvent (ErrorEvent.ERROR);
		assert.notEqual (errorEvent, null);
		
	});
	
	
});