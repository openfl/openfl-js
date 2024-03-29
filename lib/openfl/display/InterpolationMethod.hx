package openfl.display;

/**
	The InterpolationMethod class provides values for the
	`interpolationMethod` parameter in the
	`Graphics.beginGradientFill()` and
	`Graphics.lineGradientStyle()` methods. This parameter
	determines the RGB space to use when rendering the gradient.
**/
#if (haxe_ver >= 4.0) enum #else @:enum #end abstract InterpolationMethod(String) from String to String
{
	/**
		Specifies that the RGB interpolation method should be used. This means
		that the gradient is rendered with exponential sRGB(standard RGB) space.
		The sRGB space is a W3C-endorsed standard that defines a non-linear
		conversion between red, green, and blue component values and the actual
		intensity of the visible component color.

		For example, consider a simple linear gradient between two colors(with
		the `spreadMethod` parameter set to
		`SpreadMethod.REFLECT`). The different interpolation methods
		affect the appearance as follows:
	**/
	public var LINEAR_RGB = "linearRGB";

	/**
		Specifies that the RGB interpolation method should be used. This means
		that the gradient is rendered with exponential sRGB(standard RGB) space.
		The sRGB space is a W3C-endorsed standard that defines a non-linear
		conversion between red, green, and blue component values and the actual
		intensity of the visible component color.

		For example, consider a simple linear gradient between two colors(with
		the `spreadMethod` parameter set to
		`SpreadMethod.REFLECT`). The different interpolation methods
		affect the appearance as follows:
	**/
	public var RGB = "rgb";
}
