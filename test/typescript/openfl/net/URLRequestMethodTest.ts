import URLRequestMethod from "openfl/net/URLRequestMethod";
var assert = chai.assert;


describe ("TypeScript | URLRequestMethod", function () {
	
	
	it ("test", function () {
		
		switch (URLRequestMethod.DELETE + "") {
			
			case URLRequestMethod.DELETE:
			case URLRequestMethod.GET:
			case URLRequestMethod.HEAD:
			case URLRequestMethod.OPTIONS:
			case URLRequestMethod.POST:
			case URLRequestMethod.PUT:
				break;
			
		}
		
	});
	
	
});