import BitmapDataChannel from "openfl/display/BitmapDataChannel";
var assert = chai.assert;


describe ("TypeScript | BitmapDataChannel", function () {
	
	
	it ("test", function () {
		
		switch (+BitmapDataChannel.ALPHA) {
			
			case BitmapDataChannel.ALPHA:
			case BitmapDataChannel.BLUE:
			case BitmapDataChannel.GREEN:
			case BitmapDataChannel.RED:
				break;
			default:
				assert.ok (false);
			
		}
		
	});
	
	
});