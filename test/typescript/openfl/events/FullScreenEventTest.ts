import FullScreenEvent from "openfl/events/FullScreenEvent";
var assert = chai.assert;


describe ("TypeScript | FullScreenEvent", function () {
	
	
	it ("fullscreen", function () {
		
		// TODO: Confirm functionality
		
		var fullScreenEvent = new FullScreenEvent (FullScreenEvent.FULL_SCREEN);
		var exists = fullScreenEvent.fullScreen;
		
		assert (!exists);
		
	});
	
	
	it ("interactive", function () {
		
		// TODO: Confirm functionality
		
		var fullScreenEvent = new FullScreenEvent (FullScreenEvent.FULL_SCREEN);
		var exists = fullScreenEvent.interactive;
		
		assert (!exists);
		
	});
	
	
	it ("new", function () {
		
		// TODO: Confirm functionality
		
		var fullScreenEvent = new FullScreenEvent (FullScreenEvent.FULL_SCREEN);
		
		assert.notEqual (fullScreenEvent, null);
		
	});
	
	
});