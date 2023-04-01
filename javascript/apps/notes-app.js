import { openAppModal, resetToMainModal } from "./../DOM-supporter-functions.js";
import { removeArrowAnimation } from "./../arrow-animations.js";
import { createTextNode } from "./../DOM-supporter-functions.js";

//variables for main display of list of notes
const mainNoteDisplay = document.querySelector(".notes__note-container");
const createButton = document.querySelector("#createNote");
const noNotesMessage = document.querySelector(".notes__item--none");

//variables for new note modal
const noteCreationModal = document.querySelector(".create-new-note");
const noteCreationBack = document.querySelector(".create-new-note__header-row--back");
const completeNote = document.querySelector(".create-new-note__header-row--done");
const rawNoteData = noteCreationModal.querySelector(".create-new-note__note-constructor");

//variables for expanded note modal
const expandedNoteModal = document.querySelector(".expanded-note-page");
const expandedNoteBack = document.querySelector(".expanded-note-page__header-row--back");
const noteContainer = document.querySelector(".expanded-note-page__note-container");
const trashButton = document.querySelector(".expanded-note-page__header-row--delete");

//Functions for exclusive use in notes app
const createNote = () => {
	const title = rawNoteData.firstElementChild.value;
	const body = rawNoteData.lastElementChild.value;
	if (!title && !body) {
		resetToMainModal();
	} else {
		if (noNotesMessage.isConnected) {
			mainNoteDisplay.removeChild(noNotesMessage);
		}
		const titleEl = createTextNode("h4", title);
		const bodyEl = createTextNode("p", body);
		let newNote = document.createElement("div");
		newNote.appendChild(titleEl);
		newNote.appendChild(bodyEl);
		newNote.classList.add("notes__item");
		mainNoteDisplay.appendChild(newNote);
		newNote.addEventListener("click", () => {
			newNote.classList.add("expanded-note");
			expandNote();
		});
		rawNoteData.firstElementChild.value = "";
		rawNoteData.lastElementChild.value = "";
		resetToMainModal(noteCreationModal);
	}
};

const expandNote = () => {
	const targetNote = document.querySelector(".expanded-note");
	const title = targetNote.firstElementChild.cloneNode(true);
	// const title = titleMain
	const body = targetNote.lastElementChild.cloneNode(true);
	// const body = bodyMain
	removeArrowAnimation();
	openAppModal("#expandedNotePage");
	noteContainer.appendChild(title);
	noteContainer.appendChild(body);
};

const backFromExpanded = () => {
	const title = document.querySelector(".expanded-note-page__note-container").querySelector("h4");
	const body = document.querySelector(".expanded-note-page__note-container").querySelector("p");
	noteContainer.removeChild(title);
	noteContainer.removeChild(body);
	const currentNote = document.querySelector(".expanded-note");
	currentNote.classList.remove("expanded-note");
	resetToMainModal(expandedNoteModal);
	// expandedNoteModal.classList.remove("open-modal");
	// expandedNoteModal.style.display = "none";
};

const deleteNote = () => {
	const currentNote = document.querySelector(".expanded-note");
	let arrayToMatch = [];
	arrayToMatch.push(currentNote.firstChild.innerHTML);
	arrayToMatch.push(currentNote.lastChild.innerHTML);
	backFromExpanded();
	const notes = document.querySelectorAll(".notes__item");
	let noteToDelete;
	let matchFound = false;
	let i = 0;
	while (!matchFound) {
		let noteTitle = notes[i].firstChild.innerHTML;
		if (noteTitle === arrayToMatch[0]) {
			let noteBody = notes[i].lastChild.innerHTML;
			if (noteBody === arrayToMatch[1]) {
				noteToDelete = notes[i];
				matchFound = true;
			}
		}
		i++;
	}
	mainNoteDisplay.removeChild(noteToDelete);
	if (mainNoteDisplay.children.length < 1) {
		mainNoteDisplay.appendChild(noNotesMessage);
	}
};

//DOM interactions inside the Notes App
createButton.addEventListener("click", () => {
	removeArrowAnimation();
	openAppModal("#createNewNote");
});

completeNote.addEventListener("click", () => {
	createNote();
});

noteCreationBack.addEventListener("click", () => {
	resetToMainModal(noteCreationModal);
});

expandedNoteBack.addEventListener("click", () => {
	backFromExpanded();
});

trashButton.addEventListener("click", () => {
	deleteNote();
});
