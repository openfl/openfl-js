package openfl.filters;

/**
	The BitmapFilterQuality class contains values to set the rendering quality
	of a BitmapFilter object.
**/
#if (haxe_ver >= 4.0) enum #else @:enum #end abstract BitmapFilterQuality(Int) from Int to Int from UInt to UInt
{
	/**
		Defines the high quality filter setting.
	**/
	public var HIGH = 3;

	/**
		Defines the medium quality filter setting.
	**/
	public var MEDIUM = 2;

	/**
		Defines the low quality filter setting.
	**/
	public var LOW = 1;
}
