import Preloader from "openfl/display/Preloader";
var assert = chai.assert;


describe ("ES6 | Preloader", function () {
	
	
	it ("new", function () {
		
		// TODO: Confirm functionality
		
		var preloader = new Preloader ();
		var exists = preloader;
		
		assert.notEqual (exists, null);
		
	});
	
	
});