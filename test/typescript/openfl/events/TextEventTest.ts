import TextEvent from "openfl/events/TextEvent";
var assert = chai.assert;


describe ("TypeScript | TextEvent", function () {
	
	
	it ("text", function () {
		
		// TODO: Confirm functionality
		
		var textEvent = new TextEvent (TextEvent.LINK);
		var exists = textEvent.text;
		
		assert.notEqual (exists, null);
		
	});
	
	
	it ("new", function () {
		
		// TODO: Confirm functionality
		
		var textEvent = new TextEvent (TextEvent.LINK);
		assert.notEqual (textEvent, null);
		
	});
	
	
});