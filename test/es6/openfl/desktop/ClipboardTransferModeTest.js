import ClipboardTransferMode from "openfl/desktop/ClipboardTransferMode";
var assert = chai.assert;


describe ("ES6 | ClipboardTransferMode", function () {
	
	
	it ("test", function () {
		
		switch (""+ClipboardTransferMode.CLONE_ONLY) {
			
			case ClipboardTransferMode.CLONE_ONLY:
			case ClipboardTransferMode.CLONE_PREFERRED:
			case ClipboardTransferMode.ORIGINAL_ONLY:
			case ClipboardTransferMode.ORIGINAL_PREFERRED:
				break;
			
			default:
				assert.ok (false);
			
		}
		
	});
	
	
});