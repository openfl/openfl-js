package openfl;

import haxe.Constraints.Function;

abstract Vector<T>(VectorData<T>) from VectorData<T>
{
	public var fixed(get, set):Bool;
	public var length(get, set):Int;

	public function new(?length:Int, ?fixed:Bool, ?array:Array<T>):Void
	{
		if (array != null)
		{
			this = VectorData.ofArray(array);
		}
		else
		{
			this = new VectorData(length, fixed);
		}
	}

	public inline function concat(?a:Vector<T>):Vector<T>
	{
		// Duplicating behavior of VectorData in abstract, to allow
		// for Vector.<T> with ActionScript target -- it preserves
		// the correct behavior for Haxe libraries, even if only
		// a bare Array object is passed in

		if (a == null)
		{
			return VectorData.ofArray(untyped #if haxe4 js.Syntax.code #else __js__ #end ("Array.prototype.concat.call")(this));
		}
		return VectorData.ofArray(untyped #if haxe4 js.Syntax.code #else __js__ #end ("Array.prototype.concat.call")(this, a));
	}

	public inline function copy():Vector<T>
	{
		// return cast this.copy ();
		return VectorData.ofArray(cast this);
	}

	@:arrayAccess public inline function get(index:Int):T
	{
		// return this.get (index);
		return this[index];
	}

	public inline function indexOf(x:T, ?from:Int = 0):Int
	{
		// return this.indexOf (x, from);
		return untyped #if haxe4 js.Syntax.code #else __js__ #end ("Array.prototype.indexOf.call")(this, x, from);
	}

	public /*inline*/ function insertAt(index:Int, element:T):Void
	{
		// this.insertAt (index, element);
		if (!this.fixed || index < this.length)
		{
			untyped #if haxe4 js.Syntax.code #else __js__ #end ("Array.prototype.splice.call")(this, index, 0, element);
		}
	}

	public inline function iterator():Iterator<T>
	{
		// return this.iterator ();
		return new VectorIterator(this);
	}

	public inline function join(sep:String = ","):String
	{
		// return this.join (sep);
		return untyped #if haxe4 js.Syntax.code #else __js__ #end ("Array.prototype.join.call")(this, sep);
	}

	public /*inline*/ function lastIndexOf(x:T, ?from:Int):Int
	{
		// return this.lastIndexOf (x, from);
		if (from == null)
		{
			return untyped #if haxe4 js.Syntax.code #else __js__ #end ("Array.prototype.lastIndexOf.call")(this, x);
		}
		else
		{
			return untyped #if haxe4 js.Syntax.code #else __js__ #end ("Array.prototype.lastIndexOf.call")(this, x, from);
		}
	}

	public /*inline*/ function pop():Null<T>
	{
		// return this.pop ();
		if (!fixed)
		{
			return untyped #if haxe4 js.Syntax.code #else __js__ #end ("Array.prototype.pop.call")(this);
		}
		else
		{
			return null;
		}
	}

	public /*inline*/ function push(x:T):Int
	{
		// return this.push (x);
		if (!fixed)
		{
			return untyped #if haxe4 js.Syntax.code #else __js__ #end ("Array.prototype.push.call")(this, x);
		}
		else
		{
			return untyped #if haxe4 js.Syntax.code #else __js__ #end ("this").length;
		}
	}

	public /*inline*/ function removeAt(index:Int):T
	{
		// return this.removeAt (index);
		if (!this.fixed || index < this.length)
		{
			return untyped #if haxe4 js.Syntax.code #else __js__ #end ("Array.prototype.splice.call")(this, index, 1)[0];
		}

		return null;
	}

	public inline function reverse():Vector<T>
	{
		// return cast this.reverse ();
		return untyped #if haxe4 js.Syntax.code #else __js__ #end ("Array.prototype.reverse.call")(this);
	}

	@:arrayAccess public /*inline*/ function set(index:Int, value:T):T
	{
		// return this.set (index, value);
		if (!this.fixed || index < this.length)
		{
			return this[index] = value;
		}
		else
		{
			return value;
		}
	}

	public /*inline*/ function shift():Null<T>
	{
		// return this.shift ();
		if (!this.fixed)
		{
			return untyped #if haxe4 js.Syntax.code #else __js__ #end ("Array.prototype.shift.call")(this);
		}
		else
		{
			return null;
		}
	}

	public inline function slice(?startIndex:Int = 0, ?endIndex:Int = 16777215):Vector<T>
	{
		// return cast this.slice (pos, end);
		return VectorData.ofArray(untyped #if haxe4 js.Syntax.code #else __js__ #end ("Array.prototype.slice.call")(this, startIndex, endIndex));
	}

	public inline function sort(f:T->T->Int):Void
	{
		// this.sort (f);
		untyped #if haxe4 js.Syntax.code #else __js__ #end ("Array.prototype.sort.call")(this, f);
	}

	public inline function splice(pos:Int, len:Int):Vector<T>
	{
		// return cast this.splice (pos, len);
		return VectorData.ofArray(untyped #if haxe4 js.Syntax.code #else __js__ #end ("Array.prototype.splice.call")(this, pos, len));
	}

	public inline function toString():String
	{
		return (this != null) ? Std.string(this) : null;
	}

	public /*inline*/ function unshift(x:T):Void
	{
		// this.unshift (x);
		if (!this.fixed)
		{
			untyped #if haxe4 js.Syntax.code #else __js__ #end ("Array.prototype.unshift.call")(this, x);
		}
	}

	public inline function filter(callback:T->Bool):Vector<T>
	{
		return cast VectorData.ofArray(untyped #if haxe4 js.Syntax.code #else __js__ #end ("Array.prototype.filter.call")(this, callback));
	}

	public function some(callback:Function, ?thisObject:Dynamic):Bool
	{
		return untyped #if haxe4 js.Syntax.code #else __js__ #end ("Array.prototype.some.call")(this, callback, thisObject);
	}

	public function every(callback:Function, ?thisObject:Dynamic):Bool
	{
		return untyped #if haxe4 js.Syntax.code #else __js__ #end ("Array.prototype.every.call")(this, callback, thisObject);
	}

	public inline static function ofArray<T>(a:Array<T>):Vector<T>
	{
		return cast VectorData.ofArray(a);
	}

	public inline static function convert<T, U>(v:VectorData<T>):VectorData<U>
	{
		return cast v;
	}

	// Getters & Setters
	@:noCompletion private inline function get_fixed():Bool
	{
		return this.fixed;
	}

	@:noCompletion private inline function set_fixed(value:Bool):Bool
	{
		return this.fixed = value;
	}

	@:noCompletion private inline function get_length():Int
	{
		return this.length;
	}

	@:noCompletion private inline function set_length(value:Int):Int
	{
		return this.length = value;
	}
}

@:jsRequire("openfl/Vector", "default")
extern class VectorData<T> implements ArrayAccess<T>
{
	public var fixed:Bool;
	public var length:Int;
	public function new(?length:Int, ?fixed:Bool, ?array:Array<T>):Void;
	public function concat(?a:Vector<T>):Vector<T>;
	public function copy():Vector<T>;
	public function get(index:Int):T;
	public function indexOf(x:T, ?from:Int = 0):Int;
	public function insertAt(index:Int, element:T):Void;
	public function join(sep:String = ","):String;
	public function lastIndexOf(x:T, ?from:Int = 0):Int;
	public function pop():Null<T>;
	public function push(x:T):Int;
	public function removeAt(index:Int):T;
	public function reverse():Vector<T>;
	public function set(index:Int, value:T):T;
	public function shift():Null<T>;
	public function slice(?pos:Int, ?end:Int):Vector<T>;
	public function sort(f:T->T->Int):Void;
	public function splice(pos:Int, len:Int):Vector<T>;
	public function unshift(x:T):Void;
	public function filter(callback:T->Bool):Vector<T>;
	public function some(callback:Function, ?thisObject:Dynamic):Bool;
	public function every(callback:Function, ?thisObject:Dynamic):Bool;
	public static function ofArray<T>(a:Array<T>):VectorData<T>;
	@:noCompletion public function iterator():Iterator<T>;
}

private class VectorIterator<T>
{
	private var index:Int;
	private var vector:Vector<T>;

	public function new(vector:Vector<T>)
	{
		this.vector = vector;
		index = -1;
	}

	public function hasNext():Bool
	{
		return index < vector.length - 1;
	}

	public function next():T
	{
		index++;
		return vector[index];
	}
}
