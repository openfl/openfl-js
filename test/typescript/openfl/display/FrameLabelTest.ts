import FrameLabel from "openfl/display/FrameLabel";
var assert = chai.assert;


describe ("TypeScript | FrameLabel", function () {
	
	
	it ("frame", function () {
		
		var frameLabel = new FrameLabel (null, 0);
		assert.equal (frameLabel.frame, 0);
		var frameLabel = new FrameLabel (null, 100);
		assert.equal (frameLabel.frame, 100);
		
	});
	
	
	it ("name", function () {
		
		var frameLabel = new FrameLabel ("abc", 0);
		assert.equal (frameLabel.name, "abc");
		var frameLabel = new FrameLabel (null, 0);
		assert.equal (frameLabel.name, null);
		
	});
	
	
	it ("frameLabel", function () {
		
		var frameLabel = new FrameLabel (null, 0);
		assert.equal (frameLabel.name, null);
		assert.equal (frameLabel.frame, 0);
		
	});
	
	
});