
import { Color, ColorSelector, Palette } from "./palette.mjs";

let palette = new Palette(document.querySelector("aside"));

let selector = new ColorSelector(document.querySelector("main"));

selector.addEventListener("select", e =>
	{
	palette.c(e.color);
	});
