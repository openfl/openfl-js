import BlurFilter from "openfl/filters/BlurFilter";
var assert = chai.assert;


describe ("TypeScript | BitmapFilter", function () {
	
	
	it ("new", function () {
		
		// TODO: Confirm functionality
		
		var bitmapFilter = new BlurFilter ();
		assert.notEqual (bitmapFilter, null);
		
	});
	
	
	it ("clone", function () {
		
		// TODO: Confirm functionality
		
		var bitmapFilter = new BlurFilter ();
		var exists = bitmapFilter.clone;
		
		assert.notEqual (exists, null);
		
	});
	
	
});