package openfl.display3D;

#if (haxe_ver >= 4.0) enum #else @:enum #end abstract Context3DMipFilter(String) from String to String
{
	public var MIPLINEAR = "miplinear";
	public var MIPNEAREST = "mipnearest";
	public var MIPNONE = "mipnone";
}
