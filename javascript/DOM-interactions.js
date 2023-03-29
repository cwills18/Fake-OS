import { openAppModal, closeAppModal } from "./DOM-supporter-functions.js";

const notesApp = document.querySelector("#notes");
const weatherApp = document.querySelector("#weather");
const clockApp = document.querySelector("#clock");
const photosApp = document.querySelector("#photos");
const phoneApp = document.querySelector("#phone");
const messagesApp = document.querySelector("#messages");
const calculatorApp = document.querySelector("#calculator");
const settingsApp = document.querySelector("#settings");
const homeButton = document.querySelector(".home-bar__btn");

notesApp.addEventListener("click", () => {
	openAppModal("#notesModal");
});
weatherApp.addEventListener("click", () => {
	openAppModal("#weatherModal");
});
clockApp.addEventListener("click", () => {
	openAppModal("#clockModal");
});
photosApp.addEventListener("click", () => {
	openAppModal("#photosModal");
});
phoneApp.addEventListener("click", () => {
	openAppModal("#phoneModal");
});
messagesApp.addEventListener("click", () => {
	openAppModal("#messagesModal");
});
calculatorApp.addEventListener("click", () => {
	openAppModal("#calculatorModal");
});
settingsApp.addEventListener("click", () => {
	openAppModal("#settingsModal");
});
homeButton.addEventListener("click", () => {
	closeAppModal();
});
