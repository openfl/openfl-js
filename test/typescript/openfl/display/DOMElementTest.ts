import DOMElement from "openfl/display/DOMElement";
var assert = chai.assert;


describe ("TypeScript | DOMElement", function () {
	
	
	it ("new", function () {
		
		// TODO: Confirm functionality
		
		var domElement = new DOMElement (null);
		var exists = domElement;
		
		assert.notEqual (exists, null);
		
	});
	
	
});