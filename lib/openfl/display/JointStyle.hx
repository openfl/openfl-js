package openfl.display;

/**
	The JointStyle class is an enumeration of constant values that specify the
	joint style to use in drawing lines. These constants are provided for use
	as values in the `joints` parameter of the
	`openfl.display.Graphics.lineStyle()` method. The method supports
	three types of joints: miter, round, and bevel, as the following example
	shows:
**/
#if (haxe_ver >= 4.0) enum #else @:enum #end abstract JointStyle(String) from String to String
{
	/**
		Specifies beveled joints in the `joints` parameter of the
		`openfl.display.Graphics.lineStyle()` method.
	**/
	public var BEVEL = "bevel";

	/**
		Specifies mitered joints in the `joints` parameter of the
		`openfl.display.Graphics.lineStyle()` method.
	**/
	public var MITER = "miter";

	/**
		Specifies round joints in the `joints` parameter of the
		`openfl.display.Graphics.lineStyle()` method.
	**/
	public var ROUND = "round";
}
