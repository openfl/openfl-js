import CapsStyle from "openfl/display/CapsStyle";
var assert = chai.assert;


describe ("ES6 | CapsStyle", function () {
	
	
	it ("test", function () {
		
		//assert.equal (0, Type.enumIndex (CapsStyle.ROUND));
		//assert.equal (1, Type.enumIndex (CapsStyle.NONE));
		//assert.equal (2, Type.enumIndex (CapsStyle.SQUARE));
		
		switch (""+CapsStyle.SQUARE) {
			
			case CapsStyle.ROUND:
			case CapsStyle.NONE:
			case CapsStyle.SQUARE:
				break;
			
			default:
				assert.ok (false);
			
		}
		
	});
	
	
});