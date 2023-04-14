import SharedObjectFlushStatus from "openfl/net/SharedObjectFlushStatus";
var assert = chai.assert;


describe ("TypeScript | SharedObjectFlushStatus", function () {
	
	
	it ("test", function () {
		
		switch (""+SharedObjectFlushStatus.FLUSHED) {
			
			case SharedObjectFlushStatus.FLUSHED:
			case SharedObjectFlushStatus.PENDING:
				break;
			
		}
		
	});
	
	
});