import Shape from "openfl/display/Shape";
var assert = chai.assert;


describe ("ES6 | Shape", function () {
	
	
	it ("graphics", function () {
		
		// TODO: Confirm functionality
		
		var shape = new Shape ();
		var exists = shape.graphics;
		
		assert.notEqual (exists, null);
		
	});
	
	
	it ("new", function () {
		
		// TODO: Confirm functionality
		
		var shape = new Shape ();
		
		assert.notEqual (shape, null);
		
	});
	
	
});