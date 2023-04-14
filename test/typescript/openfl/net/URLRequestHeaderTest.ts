import URLRequestHeader from "openfl/net/URLRequestHeader";
var assert = chai.assert;


describe ("TypeScript | URLRequestHeader", function () {
	
	
	it ("name", function () {
		
		// TODO: Confirm functionality
		
		var urlRequestHeader = new URLRequestHeader ();
		var exists = urlRequestHeader.name;
		
		assert.notEqual (exists, null);
		
	});
	
	
	it ("value", function () {
		
		// TODO: Confirm functionality
		
		var urlRequestHeader = new URLRequestHeader ();
		var exists = urlRequestHeader.value;
		
		assert.notEqual (exists, null);
		
	});
	
	
	it ("new", function () {
		
		// TODO: Confirm functionality
		
		var urlRequestHeader = new URLRequestHeader ();
		assert.notEqual (urlRequestHeader, null);
		
	});
	
	
});