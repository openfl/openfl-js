package openfl.text;

/**
 * The TextFieldAutoSize class is an enumeration of constant values used in
 * setting the `autoSize` property of the TextField class.
 */
#if (haxe_ver >= 4.0) enum #else @:enum #end abstract TextFieldAutoSize(String) from String to String
{
	/**
	 * Specifies that the text is to be treated as center-justified text. Any
	 * resizing of a single line of a text field is equally distributed to both
	 * the right and left sides.
	 */
	public var CENTER = "center";

	/**
	 * Specifies that the text is to be treated as left-justified text, meaning
	 * that the left side of the text field remains fixed and any resizing of a
	 * single line is on the right side.
	 */
	public var LEFT = "left";

	/**
	 * Specifies that no resizing is to occur.
	 */
	public var NONE = "none";

	/**
	 * Specifies that the text is to be treated as right-justified text, meaning
	 * that the right side of the text field remains fixed and any resizing of a
	 * single line is on the left side.
	 */
	public var RIGHT = "right";
}
