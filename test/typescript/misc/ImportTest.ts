import * as openfl from "openfl";
import * as geom from "openfl/geom";
import { Rectangle as Rectangle2 } from "openfl/geom";
import Rectangle from "openfl/geom/Rectangle";
var assert = chai.assert;


describe ("TypeScript | Imports", function () {
	
	
	it ("test", function () {
		
		// console.log (openfl);
		// console.log (geom);
		// console.log (Rectangle);
		
		assert (Rectangle);
		assert.equal (openfl.geom.Rectangle, Rectangle);
		assert.equal (geom.Rectangle, Rectangle);
		assert.equal (Rectangle2, Rectangle);
		
	});
	
	
});