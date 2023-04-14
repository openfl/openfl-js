import SecurityErrorEvent from "openfl/events/SecurityErrorEvent";
var assert = chai.assert;


describe ("TypeScript | SecurityErrorEvent", function () {
	
	
	it ("new", function () {
		
		// TODO: Confirm functionality
		
		var securityErrorEvent = new SecurityErrorEvent (SecurityErrorEvent.SECURITY_ERROR);
		assert.notEqual (securityErrorEvent, null);
		
	});
	
	
});