package openfl.system;

#if (haxe_ver >= 4.0) enum #else @:enum #end abstract ImageDecodingPolicy(String) from String to String
{
	public var ON_DEMAND = "onDemand";
	public var ON_LOAD = "onLoad";
}
