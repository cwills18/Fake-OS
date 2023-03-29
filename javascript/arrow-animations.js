import { createTextNode } from "./DOM-supporter-functions.js";

const homeBar = document.querySelector(".home-bar");

export const displayArrowAnimation = () => {
	const arrowL = createTextNode("p", "→");
	const arrowR = createTextNode("p", "←");
	arrowL.classList.add("home-bar__arrows--left");
	arrowR.classList.add("home-bar__arrows--right");
	homeBar.insertBefore(
		arrowL,
		document.querySelector(".home-bar__link")
	);
	homeBar.appendChild(arrowR);
};

export const removeArrowAnimation = () => {
	const arrowL = document.querySelector(
		".home-bar__arrows--left"
	);
	const arrowR = document.querySelector(
		".home-bar__arrows--right"
	);
	homeBar.removeChild(arrowL);
	homeBar.removeChild(arrowR);
};
