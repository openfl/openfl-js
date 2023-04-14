import JPEGEncoderOptions from "openfl/display/JPEGEncoderOptions";
var assert = chai.assert;


describe ("ES6 | JPEGEncoderOptions", function () {
	
	
	it ("quality", function () {
		
		var jpegEncoderOptions = new JPEGEncoderOptions ();
		var exists = jpegEncoderOptions;
		
		assert.notEqual (exists, null);
		assert.equal (jpegEncoderOptions.quality, 80);
		
		var jpegEncoderOptions = new JPEGEncoderOptions (100);
		assert.equal (jpegEncoderOptions.quality, 100);
		
	});
	
	
});