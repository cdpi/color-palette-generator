
import { paragraph, label, input, button } from "./website.mjs";

function append(element, html)
	{
	element.insertAdjacentHTML("beforeend", html);
	}

const element = document.querySelector("main");

const addParagraph = () => append(element, paragraph());

const addInputText = () => append(element, ["<div>", label(), input(), "</div>"].join("\n"));

const addButtons = () => append(element, ["<div>", button("Save"), button("Cancel"), "</div>"].join("\n"));

/*
addInputText();
addInputText();
addInputText();
addInputText();

addButtons();

addParagraph();
addParagraph();
addParagraph();
addParagraph();
addParagraph();
*/

document.querySelector("#p").addEventListener("click", e => addParagraph());
document.querySelector("#f").addEventListener("click", e => addInputText());
document.querySelector("#b").addEventListener("click", e => addButtons());
