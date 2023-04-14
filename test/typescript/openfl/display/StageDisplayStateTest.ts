import StageDisplayState from "openfl/display/StageDisplayState";
var assert = chai.assert;


describe ("TypeScript | StageDisplayState", function () {
	
	
	it ("test", function () {
		
		switch (""+StageDisplayState.NORMAL) {
			
			case StageDisplayState.FULL_SCREEN:
			case StageDisplayState.FULL_SCREEN_INTERACTIVE:
			case StageDisplayState.NORMAL:
				break;
			
		}
		
	});
	
	
});