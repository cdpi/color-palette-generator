
import { throttle } from "https://cdn.jsdelivr.net/gh/cdpi/cdpi.github.io/scripts/throttle.mjs";

import { Color } from "./color.mjs";

class ColorSelector extends EventTarget
	{
	constructor(element)
		{
		super();

		this.element = element;

		this.color = new Color(0, 0, 100);

		this.element.addEventListener("mousemove", this.mouseMoveHandler);
		this.element.addEventListener("wheel", this.mouseWheelHandler);
		this.element.addEventListener("click", this.mouseClickHandler);
		}

	get mouseClickHandler()
		{
		return e =>
			{
			// TODO: Quel Event ? click, change,...
			let event = new Event("select");

			event.color = this.color;

			this.dispatchEvent(event);
			};
		}

	get mouseMoveHandler()
		{
		return throttle(20, e =>
			{
			//console.debug(this.element.clientLeft);
			//console.debug(this.element.offsetLeft);
			console.debug(e.clientX);

			this.color.hue = Math.floor(e.clientX * 360 / this.element.clientWidth);
			this.color.lightness = Math.floor(e.clientY * 100 / this.element.clientHeight);

			this.setBackgroundColor();
			});
		}

	get mouseWheelHandler()
		{
		return throttle(10, e =>
			{
			this.color.saturation += ((e.deltaY > 0) ? 1 : -1);

			this.setBackgroundColor();
			});
		}

	setBackgroundColor()
		{
		this.element.style.backgroundColor = this.color.hsl();
		}
	}

const _ColorSelector = ColorSelector;

export
	{
	_ColorSelector as ColorSelector
	};
