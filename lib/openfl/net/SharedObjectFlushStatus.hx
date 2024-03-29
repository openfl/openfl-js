package openfl.net;

/**
 * The SharedObjectFlushStatus class provides values for the code returned
 * from a call to the `SharedObject.flush()` method.
 */
#if (haxe_ver >= 4.0) enum #else @:enum #end abstract SharedObjectFlushStatus(String) from String to String
{
	/**
	 * Indicates that the flush completed successfully.
	 */
	public var FLUSHED = "flushed";

	/**
	 * Indicates that the user is being prompted to increase disk space for the
	 * shared object before the flush can occur.
	 */
	public var PENDING = "pending";
}
