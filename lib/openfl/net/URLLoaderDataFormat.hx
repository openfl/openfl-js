package openfl.net;

/**
 * The URLLoaderDataFormat class provides values that specify how downloaded
 * data is received.
 */
#if (haxe_ver >= 4.0) enum #else @:enum #end abstract URLLoaderDataFormat(String) from String to String
{
	/**
	 * Specifies that downloaded data is received as raw binary data.
	 */
	public var BINARY = "binary";

	/**
	 * Specifies that downloaded data is received as text.
	 */
	public var TEXT = "text";

	/**
	 * Specifies that downloaded data is received as URL-encoded variables.
	 */
	public var VARIABLES = "variables";
}
