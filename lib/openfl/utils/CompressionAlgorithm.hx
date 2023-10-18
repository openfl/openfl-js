package openfl.utils;

#if (haxe_ver >= 4.0) enum #else @:enum #end abstract CompressionAlgorithm(String) from String to String
{
	public var DEFLATE = "deflate";
	// GZIP;
	public var LZMA = "lzma";
	public var ZLIB = "zlib";
}
