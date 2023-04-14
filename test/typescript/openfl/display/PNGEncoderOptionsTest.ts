import PNGEncoderOptions from "openfl/display/PNGEncoderOptions";
var assert = chai.assert;


describe ("TypeScript | PNGEncoderOptions", function () {
	
	
	it ("fastCompression", function () {
		
		var pngEncoderOptions = new PNGEncoderOptions ();
		var exists = pngEncoderOptions;
		
		assert.notEqual (exists, null);
		assert (!pngEncoderOptions.fastCompression);
		
		var pngEncoderOptions = new PNGEncoderOptions (true);
		assert (pngEncoderOptions.fastCompression);
		
	});
	
	
});