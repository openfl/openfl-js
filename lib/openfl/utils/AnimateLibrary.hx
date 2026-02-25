package openfl.utils;

import openfl.display.MovieClip;
import openfl.utils.AssetLibrary;
import openfl.utils.Future;

@:jsRequire("swf/exporters/animate/AnimateLibrary", "default")
extern class AnimateLibrary extends AssetLibrary
{
	public function new(id:String, uuid:String = null);
	public static function loadFromBundle(bundle:AssetBundle):Future<AnimateLibrary>;
    public static function loadFromBytes(bytes:Dynamic):Future<AnimateLibrary>;
	public override function bind(className:String, instance:Dynamic = null):Bool;
	public override function exists(id:String, type:String):Bool;
	public override function getImage(id:String):Dynamic;
	public override function getMovieClip(id:String):MovieClip;
	public override function isLocal(id:String, type:String):Bool;
	public override function list(type:String):Array<String>;
	public override function load():Future<Dynamic>;
	public override function unload():Void;
}
