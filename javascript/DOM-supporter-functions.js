import { displayArrowAnimation, removeArrowAnimation } from "./arrow-animations.js";

export const createTextNode = (tag, text) => {
	const textNode = document.createElement(tag);
	const newText = document.createTextNode(text);
	textNode.appendChild(newText);
	return textNode;
};

export const openAppModal = (id) => {
	const targetApp = document.querySelector(id);
	targetApp.classList.remove("close-modal");
	targetApp.classList.add("open-modal");
	targetApp.style.display = "flex";
	displayArrowAnimation();
};

export const closeAppModal = () => {
	const targetApp = document.querySelector(".open-modal");
	targetApp.classList.add("close-modal");
	removeArrowAnimation();
	setTimeout(function () {
		targetApp.classList.remove("open-modal");
		targetApp.style.display = "none";
	}, 250);
};

export const resetToMainModal = (openModal) => {
	openModal.classList.remove("open-modal");
	openModal.style.display = "none";
};
