import EventPhase from "openfl/events/EventPhase";
var assert = chai.assert;


describe ("ES6 | EventPhase", function () {
	
	
	it ("test", function () {
		
		switch (+EventPhase.CAPTURING_PHASE) {
			
			case EventPhase.CAPTURING_PHASE:
			case EventPhase.AT_TARGET:
			case EventPhase.BUBBLING_PHASE:
				break;
			
		}
		
	});
	
	
});