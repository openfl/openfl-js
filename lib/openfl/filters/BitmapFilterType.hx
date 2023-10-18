package openfl.filters;

/**
	The BitmapFilterType class contains values to set the type of a
	BitmapFilter.
**/
#if (haxe_ver >= 4.0) enum #else @:enum #end abstract BitmapFilterType(String) from String to String
{
	/**
		Defines the setting that applies a filter to the entire area of an object.
	**/
	public var FULL = "full";

	/**
		Defines the setting that applies a filter to the inner area of an object.
	**/
	public var INNER = "inner";

	/**
		Defines the setting that applies a filter to the outer area of an object.
	**/
	public var OUTER = "outer";
}
