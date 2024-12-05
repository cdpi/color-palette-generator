
class Palette
	{
	constructor(element)
		{
		this.element = element;

		this.colors = [];
		}

	/*
	c(color)
		{
		let rect = document.createElement("div");

		rect.style.backgroundColor = color.toString();
		rect.style.width = "50px";
		rect.style.height = "50px";
		rect.style.display = "inline-block";

		this.element.appendChild(rect);
		}
	*/
	}

const _Palette = Palette;

export
	{
	_Palette as Palette
	};
