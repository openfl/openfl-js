import SecurityDomain from "openfl/system/SecurityDomain";
var assert = chai.assert;


describe ("ES6 | SecurityDomain", function () {
	
	
	it ("currentDomain", function () {
		
		// TODO: Confirm functionality
		
		var exists = SecurityDomain.currentDomain;
		
		assert.notEqual (exists, null);
		
	});
	
	
});