package openfl.system;

#if (haxe_ver >= 4.0) enum #else @:enum #end abstract TouchscreenType(String) from String to String
{
	public var FINGER = "finger";
	public var NONE = "none";
	public var STYLUS = "stylus";
}
