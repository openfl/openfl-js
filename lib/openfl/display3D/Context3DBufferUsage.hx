package openfl.display3D;

#if (haxe_ver >= 4.0) enum #else @:enum #end abstract Context3DBufferUsage(String) from String to String
{
	public var DYNAMIC_DRAW = "dynamicDraw";
	public var STATIC_DRAW = "staticDraw";
}
