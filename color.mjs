
const between = (value, min, max) => (value > max) ? max : ((value < min) ? min : value);

const between100 = value => between(value, 0, 100);

const between360 = value => between(value, 0, 360);

class Color
	{
	/**
	 * @param {Number} hue
	 * @param {Number} saturation
	 * @param {Number} lightness
	 */
	constructor(hue, saturation, lightness)
		{
		this.hue = hue;
		this.saturation = saturation;
		this.lightness = lightness;
		}

	get hue()
		{
		return this._hue;
		}

	/**
	 * @param {Number} value
	 */
	set hue(value)
		{
		this._hue = between360(value);
		}

	get saturation()
		{
		return this._saturation;
		}

	/**
	 * @param {Number} value
	 */
	set saturation(value)
		{
		this._saturation = between100(value);
		}

	get lightness()
		{
		return this._lightness;
		}

	/**
	 * @param {Number} value
	 */
	set lightness(value)
		{
		this._lightness = between100(value);
		}

	hsl()
		{
		return `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
		}
	}

const _Color = Color;

export
	{
	_Color as Color
	};
