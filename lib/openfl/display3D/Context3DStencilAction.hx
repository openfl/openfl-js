package openfl.display3D;

#if (haxe_ver >= 4.0) enum #else @:enum #end abstract Context3DStencilAction(String) from String to String
{
	public var DECREMENT_SATURATE = "decrementSaturate";
	public var DECREMENT_WRAP = "decrementWrap";
	public var INCREMENT_SATURATE = "incrementSaturate";
	public var INCREMENT_WRAP = "incrementWrap";
	public var INVERT = "invert";
	public var KEEP = "keep";
	public var SET = "set";
	public var ZERO = "zero";
}
