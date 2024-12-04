
import { throttle } from "https://cdn.jsdelivr.net/gh/cdpi/cdpi.github.io/scripts/throttle.mjs";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const between = (value, minimum, maximum) => (value > maximum) ? maximum : ((value < minimum) ? minimum : value);

class Color
	{
	/**
	 * @param {Number} hue
	 * @param {Number} saturation
	 * @param {Number} lightness
	 */
	constructor(hue, saturation, lightness, alpha = null)
		{
		this.hue = hue;
		this.saturation = saturation;
		this.lightness = lightness;
		this.alpha = alpha;
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
		this._hue = between(value, 0, 360);
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
		this._saturation = between(value, 0, 100);
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
		this._lightness = between(value, 0, 100);
		}

	/*
	hsl(hue, saturation, lightness)
		{
		this._hue(hue);
		this._saturation(saturation);
		this._lightness(lightness);
		}
	*/

	toString()
		{
		return `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
		}
	}

const _Color = Color;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class ColorSelector extends EventTarget
	{
	constructor(element)
		{
		super();

		this.element = element;

		this.color = new Color(0, 50, 50);

		this.element.addEventListener("mousemove", this.mouseMoveHandler);
		this.element.addEventListener("wheel", this.mouseWheelHandler);
		this.element.addEventListener("click", this.mouseClickHandler);
		}

	changeBackgroundColor()
		{
		this.element.style.backgroundColor = this.color.toString();
		}

	get mouseClickHandler()
		{
		return e =>
			{
			let event = new Event("select");

			event.color = this.color;

			this.dispatchEvent(event);
			};
		}

	get mouseMoveHandler()
		{
		return throttle(20, e =>
			{
			this.color.hue = Math.floor(e.clientX * 360 / this.element.clientWidth);
			this.color.lightness = Math.floor(e.clientY * 100 / this.element.clientHeight);

			this.changeBackgroundColor();
			});
		}

	get mouseWheelHandler()
		{
		return throttle(10, e =>
			{
			this.color.saturation += ((e.deltaY > 0) ? 1 : -1);

			this.changeBackgroundColor();
			});
		}
	}

const _ColorSelector = ColorSelector;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Palette
	{
	constructor(element)
		{
		this.element = element;

		this.colors = [];
		}

	c(color)
		{
		let rect = document.createElement("div");

		rect.style.backgroundColor = color.toString();
		rect.style.width = "50px";
		rect.style.height = "50px";
		rect.style.display = "inline-block";

		this.element.appendChild(rect);
		}
	}

const _Palette = Palette;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	_Color as Color,
	_ColorSelector as ColorSelector,
	_Palette as Palette
	};
