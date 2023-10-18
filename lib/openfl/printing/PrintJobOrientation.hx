package openfl.printing;

#if (haxe_ver >= 4.0) enum #else @:enum #end abstract PrintJobOrientation(String) from String to String
{
	public var LANDSCAPE = "landscape";
	public var PORTRAIT = "portrait";
}
