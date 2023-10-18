package openfl.display;

/**
 * The StageScaleMode class provides values for the
 * `Stage.scaleMode` property.
 */
#if (haxe_ver >= 4.0) enum #else @:enum #end abstract StageScaleMode(String) from String to String
{
	public var EXACT_FIT = "exactFit";
	public var NO_BORDER = "noBorder";
	public var NO_SCALE = "noScale";
	public var SHOW_ALL = "showAll";
}
