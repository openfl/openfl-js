import BlurFilter from "openfl/filters/BlurFilter";
var assert = chai.assert;


describe ("ES6 | BlurFilter", function () {
	
	
	it ("blurX", function () {
		
		// TODO: Confirm functionality
		
		var blurFilter = new BlurFilter ();
		var exists = blurFilter.blurX;
		
		assert.notEqual (exists, null);
		
	});
	
	
	it ("blurY", function () {
		
		// TODO: Confirm functionality
		
		var blurFilter = new BlurFilter ();
		var exists = blurFilter.blurY;
		
		assert.notEqual (exists, null);
		
	});
	
	
	it ("quality", function () {
		
		// TODO: Confirm functionality
		
		var blurFilter = new BlurFilter ();
		var exists = blurFilter.quality;
		
		assert.notEqual (exists, null);
		
	});
	
	
	it ("new", function () {
		
		// TODO: Confirm functionality
		
		var blurFilter = new BlurFilter ();
		assert.notEqual (blurFilter, null);
		
	});
	
	
});