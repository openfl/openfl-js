package openfl.ui;

/**
	The MultitouchInputMode class provides values for the
	`inputMode` property in the openfl.ui.Multitouch class. These
	values set the type of touch events the Flash runtime dispatches when the
	user interacts with a touch-enabled device.
**/
#if (haxe_ver >= 4.0) enum #else @:enum #end abstract MultitouchInputMode(String) from String to String
{
	/**
		Specifies that TransformGestureEvent, PressAndTapGestureEvent, and
		GestureEvent events are dispatched for the related user interaction
		supported by the current environment, and other touch events(such as a
		simple tap) are interpreted as mouse events.
	**/
	public var GESTURE = "gesture";

	/**
		Specifies that all user contact with a touch-enabled device is interpreted as a
		type of mouse event.
	**/
	public var NONE = "none";

	/**
		Specifies that all user contact with a touch-enabled device is interpreted
		as a type of mouse event.
	**/
	public var TOUCH_POINT = "touchPoint";
}
