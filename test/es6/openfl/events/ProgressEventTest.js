import ProgressEvent from "openfl/events/ProgressEvent";
var assert = chai.assert;


describe ("ES6 | ProgressEvent", function () {
	
	
	it ("bytesLoaded", function () {
		
		// TODO: Confirm functionality
		
		var progressEvent = new ProgressEvent (ProgressEvent.PROGRESS);
		var exists = progressEvent.bytesLoaded;
		
		assert.notEqual (exists, null);
		
	});
	
	
	it ("bytesTotal", function () {
		
		// TODO: Confirm functionality
		
		var progressEvent = new ProgressEvent (ProgressEvent.PROGRESS);
		var exists = progressEvent.bytesTotal;
		
		assert.notEqual (exists, null);
		
	});
	
	
	it ("new", function () {
		
		// TODO: Confirm functionality
		
		var progressEvent = new ProgressEvent (ProgressEvent.PROGRESS);
		assert.notEqual (progressEvent, null);
		
	});
	
	
});