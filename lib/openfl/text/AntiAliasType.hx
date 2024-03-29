package openfl.text;

/**
 * The AntiAliasType class provides values for anti-aliasing in the
 * flash.text.TextField class.
 */
#if (haxe_ver >= 4.0) enum #else @:enum #end abstract AntiAliasType(String) from String to String
{
	/**
	 * Sets anti-aliasing to advanced anti-aliasing. Advanced anti-aliasing
	 * allows font faces to be rendered at very high quality at small sizes. It
	 * is best used with applications that have a lot of small text. Advanced
	 * anti-aliasing is not recommended for very large fonts(larger than 48
	 * points). This constant is used for the `antiAliasType` property
	 * in the TextField class. Use the syntax
	 * `AntiAliasType.ADVANCED`.
	 */
	public var ADVANCED = "advanced";

	/**
	 * Sets anti-aliasing to the anti-aliasing that is used in Flash Player 7 and
	 * earlier. This setting is recommended for applications that do not have a
	 * lot of text. This constant is used for the `antiAliasType`
	 * property in the TextField class. Use the syntax
	 * `AntiAliasType.NORMAL`.
	 */
	public var NORMAL = "normal";
}
