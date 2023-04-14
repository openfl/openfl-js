import Program3D from "openfl/display3D/Program3D";
import Stage3DTest from "./../display/Stage3DTest";
var assert = chai.assert;


describe ("ES6 | Program3D", function () {
	
	
	it ("dispose", function () {
		
		// TODO: Confirm functionality
		
		var context3D = Stage3DTest.__getContext3D ();
		
		if (context3D != null) {
			
			var program = context3D.createProgram ();
			var exists = program.dispose;
			
			assert.notEqual (exists, null);
			
		}
		
	});
	
	
	it ("upload", function () {
		
		// TODO: Confirm functionality
		
		var context3D = Stage3DTest.__getContext3D ();
		
		if (context3D != null) {
			
			var program = context3D.createProgram ();
			var exists = program.upload;
			
			assert.notEqual (exists, null);
			
		}
		
	});
	
	
});