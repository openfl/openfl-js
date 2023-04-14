import DataEvent from "openfl/events/DataEvent";
var assert = chai.assert;


describe ("ES6 | DataEvent", function () {
	
	
	it ("data", function () {
		
		// TODO: Confirm functionality
		
		var dataEvent = new DataEvent (DataEvent.DATA);
		var exists = dataEvent.data;
		
		assert.notEqual (exists, null);
		
	});
	
	
	it ("new", function () {
		
		// TODO: Confirm functionality
		
		var dataEvent = new DataEvent (DataEvent.DATA);
		
		assert.notEqual (dataEvent, null);
		
	});
	
	
});