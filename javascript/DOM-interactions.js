import { openAppModal, closeAppModal } from "./DOM-supporter-functions.js";

const notesApp = document.querySelector("#notes");
const weatherApp = document.querySelector("#weather");
const photosApp = document.querySelector("#photos");
const appStoreApp = document.querySelector("#appStore");
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
photosApp.addEventListener("click", () => {
	openAppModal("#photosModal");
});
appStoreApp.addEventListener("click", () => {
	openAppModal("#appStoreModal");
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
