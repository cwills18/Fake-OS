import { createTextNode } from "./../DOM-supporter-functions.js";

const one = document.querySelector(".phone__buttons").children[0];
const two = document.querySelector(".phone__buttons").children[1];
const three = document.querySelector(".phone__buttons").children[2];
const four = document.querySelector(".phone__buttons").children[3];
const five = document.querySelector(".phone__buttons").children[4];
const six = document.querySelector(".phone__buttons").children[5];
const seven = document.querySelector(".phone__buttons").children[6];
const eight = document.querySelector(".phone__buttons").children[7];
const nine = document.querySelector(".phone__buttons").children[8];
const asterisk = document.querySelector(".phone__buttons").children[9];
const zero = document.querySelector(".phone__buttons").children[10];
const hash = document.querySelector(".phone__buttons").children[11];
const back = document.querySelector(".phone__buttons").children[13];
const inputDisplay = document.querySelector(".phone__input-display");

const displayInput = (element) => {
	const text = element.innerHTML;
	const newElement = createTextNode("p", text);
	inputDisplay.appendChild(newElement);
};

const removeLastInput = (parentNode) => {
	const lastInput = parentNode.lastChild;
	parentNode.removeChild(lastInput);
};

one.addEventListener("click", () => {
	displayInput(one);
});
two.addEventListener("click", () => {
	displayInput(two);
});
three.addEventListener("click", () => {
	displayInput(three);
});
four.addEventListener("click", () => {
	displayInput(four);
});
five.addEventListener("click", () => {
	displayInput(five);
});
six.addEventListener("click", () => {
	displayInput(six);
});
seven.addEventListener("click", () => {
	displayInput(seven);
});
eight.addEventListener("click", () => {
	displayInput(eight);
});
nine.addEventListener("click", () => {
	displayInput(nine);
});
asterisk.addEventListener("click", () => {
	displayInput(asterisk);
});
zero.addEventListener("click", () => {
	displayInput(zero);
});
hash.addEventListener("click", () => {
	displayInput(hash);
});
back.addEventListener("click", () => {
	removeLastInput(inputDisplay);
});
