import Sprite from "openfl/display/Sprite";
import EventPhase from "openfl/events/EventPhase";
import FocusEvent from "openfl/events/FocusEvent";
import Lib from "openfl/Lib";
var assert = chai.assert;


describe ("ES6 | FocusEvent", function () {
	
	
	it ("keyCode", function () {
		
		var focusEvent = new FocusEvent (FocusEvent.FOCUS_IN);
		var exists = focusEvent.keyCode;
		
		assert.notEqual (exists, null);
		
	});
	
	
	it ("relatedObject", function () {
		
		var focusEvent = new FocusEvent (FocusEvent.FOCUS_IN);
		var exists = focusEvent.relatedObject;
		
		assert.equal (exists, null);
		
	});
	
	
	it ("shiftKey", function () {
		
		var focusEvent = new FocusEvent (FocusEvent.FOCUS_IN);
		var exists = focusEvent.shiftKey;
		
		assert.notEqual (exists, null);
		
	});
	
	
	it ("new", function () {
		
		var sprite = new Sprite ();
		sprite.name = "Sprite";
		var sprite2 = new Sprite ();
		sprite2.name = "Sprite2";
		sprite2.addChild (sprite);
		
		// Native currently requires objects to be on stage
		Lib.current.stage.addChild (sprite2);
		
		var called = false;
		var called2 = false;
		
		var spriteListener = function (e) {
			
			assert.equal (e.target, sprite);
			assert.equal (e.currentTarget, sprite);
			assert.equal (e.relatedObject, null);
			
			called = true;
			
		}
		
		var sprite2Listener = function (e) {
			
			called2 = true;
			//assert.fail ("Should not call parent");
			
		}
		
		sprite.addEventListener (FocusEvent.FOCUS_IN, spriteListener);
		sprite2.addEventListener (FocusEvent.FOCUS_IN, sprite2Listener);
		
		Lib.current.stage.focus = sprite;
		assert (called);
		assert (called2);
		
		sprite.removeEventListener (FocusEvent.FOCUS_IN, spriteListener);
		sprite2.removeEventListener (FocusEvent.FOCUS_IN, sprite2Listener);
		
		var called = false;
		var called2 = false;
		
		spriteListener = function (e) {
			
			called = true;
			
			assert.equal (e.target, sprite);
			assert.equal (e.currentTarget, sprite);
			assert.equal (e.relatedObject, sprite2);
			
		}
		
		sprite2Listener = function (e) {
			
			called2 = true;
			
			assert.equal (e.target, sprite2);
			assert.equal (e.currentTarget, sprite2);
			assert.equal (e.relatedObject, sprite);
			
		}
		
		sprite.addEventListener (FocusEvent.FOCUS_OUT, spriteListener);
		sprite2.addEventListener (FocusEvent.FOCUS_IN, sprite2Listener);
		
		Lib.current.stage.focus = sprite2;
		
		assert (called);
		assert (called2);
		
		sprite.removeEventListener (FocusEvent.FOCUS_OUT, spriteListener);
		sprite2.removeEventListener (FocusEvent.FOCUS_IN, sprite2Listener);
		called2 = false;
		
		spriteListener = function (e) {
			
			assert.ok (false);
			//assert.fail ("Should not be called");
			
		}
		
		sprite2Listener = function (e) {
			
			called2 = true;
			
			assert.equal (e.target, sprite2);
			assert.equal (e.currentTarget, sprite2);
			assert.equal (e.relatedObject, null);
			
		}
		
		sprite.addEventListener (FocusEvent.FOCUS_OUT, spriteListener);
		sprite2.addEventListener (FocusEvent.FOCUS_OUT, sprite2Listener);
		
		Lib.current.stage.focus = null;
		assert (called2);
		
		Lib.current.stage.removeChild (sprite2);
		
		// Our checker...
		var expect = [];
		var checkEvent = function (e) {
			var nextEvt = expect.shift();
			assert.notEqual (nextEvt, null);
			assert.equal (e.type, nextEvt.type);
			assert.equal (e.eventPhase, nextEvt.phase);
			assert.equal (e.currentTarget, nextEvt.cur);
			assert.equal (e.target, nextEvt.tgt);
			assert.equal (e.relatedObject, nextEvt.rel);
		}
		
		// Build this scene graph...
		//
		//	  /--> old1 ---> old2
		// root-
		//	  \--> new1 ---> new2
		//
		// And move the focus from old2 to new2.
		
		// Set up the scene graph...
		var root = new Sprite();
		var old1 = new Sprite();
		var old2 = new Sprite();
		var new1 = new Sprite();
		var new2 = new Sprite();
		root.addChild(old1);
		old1.addChild(old2);
		root.addChild(new1);
		new1.addChild(new2);
		
		// Native currently requires objects to be on stage
		Lib.current.stage.addChild (root);
		
		// Here's our expected event sequence for this test...
		var OUT = FocusEvent.FOCUS_OUT;
		var  IN = FocusEvent.FOCUS_IN;
		var CAP = EventPhase.CAPTURING_PHASE;
		var TGT = EventPhase.AT_TARGET;
		var BUB = EventPhase.BUBBLING_PHASE;
		var expectedSeq = [
			{ type: OUT, phase: CAP, cur: root, tgt: old2, rel: new2 },
			{ type: OUT, phase: CAP, cur: old1, tgt: old2, rel: new2 },
			{ type: OUT, phase: TGT, cur: old2, tgt: old2, rel: new2 },
			{ type: OUT, phase: BUB, cur: old1, tgt: old2, rel: new2 },
			{ type: OUT, phase: BUB, cur: root, tgt: old2, rel: new2 },
			{ type:  IN, phase: CAP, cur: root, tgt: new2, rel: old2 },
			{ type:  IN, phase: CAP, cur: new1, tgt: new2, rel: old2 },
			{ type:  IN, phase: TGT, cur: new2, tgt: new2, rel: old2 },
			{ type:  IN, phase: BUB, cur: new1, tgt: new2, rel: old2 },
			{ type:  IN, phase: BUB, cur: root, tgt: new2, rel: old2 }
		];
		
		// First put focus on the old...
		Lib.current.stage.focus = old2;
		
		// Now register our listeners...
		//
		// We should be able to reuse listener; see addEventListener:
		// "subsequent calls to addEventListener() with a different type
		// or useCapture value result in the creation of a separate
		// listener registration."
		for (var s of [ root, old1, old2, new1, new2 ]) {
			s.addEventListener(FocusEvent.FOCUS_IN, checkEvent );
			s.addEventListener(FocusEvent.FOCUS_IN, checkEvent, true );
			s.addEventListener(FocusEvent.FOCUS_OUT, checkEvent );
			s.addEventListener(FocusEvent.FOCUS_OUT, checkEvent, true );
		}
		
		// Set up the expected sequence for the checker...
		expect = expectedSeq;
		
		// Now move the focus and see if it conforms...
		Lib.current.stage.focus = new2;
		
		// Ensure that all events were actually delivered...
		assert.equal (expect.length, 0);
		
		Lib.current.stage.removeChild (root);
		
		for (var s of [ root, old1, old2, new1, new2 ]) {
			s.removeEventListener(FocusEvent.FOCUS_IN, checkEvent );
			s.removeEventListener(FocusEvent.FOCUS_IN, checkEvent, true );
			s.removeEventListener(FocusEvent.FOCUS_OUT, checkEvent );
			s.removeEventListener(FocusEvent.FOCUS_OUT, checkEvent, true );
		}
		
	});
	
	
});