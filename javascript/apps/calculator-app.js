//display
const display = document.querySelector(".calculator__display").firstElementChild;
const displayOuterContainer = document.querySelector(".calculator__display");
//top row
const resetBtn = document.querySelector(".calculator__keypad").children[0];
const negativeBtn = document.querySelector(".calculator__keypad").children[1];
const percentageBtn = document.querySelector(".calculator__keypad").children[2];
const divideBtn = document.querySelector(".calculator__keypad").children[3];
//second row
const sevenBtn = document.querySelector(".calculator__keypad").children[4];
const eightBtn = document.querySelector(".calculator__keypad").children[5];
const nineBtn = document.querySelector(".calculator__keypad").children[6];
const multiplyBtn = document.querySelector(".calculator__keypad").children[7];
//third row
const fourBtn = document.querySelector(".calculator__keypad").children[8];
const fiveBtn = document.querySelector(".calculator__keypad").children[9];
const sixBtn = document.querySelector(".calculator__keypad").children[10];
const subtractBtn = document.querySelector(".calculator__keypad").children[11];
//fourth row
const oneBtn = document.querySelector(".calculator__keypad").children[12];
const twoBtn = document.querySelector(".calculator__keypad").children[13];
const threeBtn = document.querySelector(".calculator__keypad").children[14];
const additionBtn = document.querySelector(".calculator__keypad").children[15];
//bottom row
const zeroBtn = document.querySelector(".calculator__keypad").children[16];
//adding the following extra "button" because the styling was preventing the left side of the zero button from being clicked
const zeroExtraBtn = document.querySelector(".calculator__keypad").children[19];
const decimalBtn = document.querySelector(".calculator__keypad").children[17];
const equalBtn = document.querySelector(".calculator__keypad").children[18];

//Functions needed only in calculator app
const checkForOverflow = (child, parent) => {
	const childWidth = child.scrollWidth;
	const parentWidth = parent.scrollWidth;
	return childWidth > parentWidth;
};

const changeNumDisplay = (num) => {
	const currentNum = display.innerHTML;
	let newNum;
	if (currentNum === "0") {
		newNum = num;
	} else if (currentNum === "-0") {
		newNum = `-${num}`;
	} else {
		newNum = currentNum + num;
	}
	display.innerHTML = newNum;
	if (checkForOverflow(display, displayOuterContainer)) {
		display.style.direction = "rtl";
	}
};

let storedVariable = 0;
let currentOperator = "";

const calculatePercentage = () => {
	storedVariable = parseFloat(display.innerHTML);
	let newVal = (storedVariable / 100).toString();
	display.innerHTML = newVal;
};

const pendingOperation = (type) => {
	storedVariable = parseFloat(display.innerHTML);
	currentOperator = type;
	display.innerHTML = "";
};

const calculateTotal = () => {
	let newVariable = parseFloat(display.innerHTML);
	let result;
	switch (currentOperator) {
		case "divide":
			result = storedVariable / newVariable;
			break;
		case "multiply":
			result = storedVariable * newVariable;
			break;
		case "subtract":
			result = storedVariable - newVariable;
			break;
		case "add":
			result = storedVariable + newVariable;
			break;
		default:
			result = display.innerHTML;
			break;
	}
	display.innerHTML = result;
};

//DOM Interactions - Top Row
resetBtn.addEventListener("click", () => {
	display.style.direction = "ltr";
	display.innerHTML = "0";
	storedVariable = 0;
	currentOperator = "";
});

negativeBtn.addEventListener("click", () => {
	let currentDisplay = display.innerHTML;
	let newDisplay;
	if (currentDisplay[0] === "-") {
		newDisplay = currentDisplay.slice(1, currentDisplay.length);
	} else {
		newDisplay = `-${currentDisplay}`;
	}
	display.innerHTML = newDisplay;
});

percentageBtn.addEventListener("click", () => {
	calculatePercentage();
});

//DOM Interactions - Basic Numbers and Decimal
zeroBtn.addEventListener("click", () => {
	changeNumDisplay("0");
});
zeroExtraBtn.addEventListener("click", () => {
	changeNumDisplay("0");
});
oneBtn.addEventListener("click", () => {
	changeNumDisplay("1");
});
twoBtn.addEventListener("click", () => {
	changeNumDisplay("2");
});
threeBtn.addEventListener("click", () => {
	changeNumDisplay("3");
});
fourBtn.addEventListener("click", () => {
	changeNumDisplay("4");
});
fiveBtn.addEventListener("click", () => {
	changeNumDisplay("5");
});
sixBtn.addEventListener("click", () => {
	changeNumDisplay("6");
});
sevenBtn.addEventListener("click", () => {
	changeNumDisplay("7");
});
eightBtn.addEventListener("click", () => {
	changeNumDisplay("8");
});
nineBtn.addEventListener("click", () => {
	changeNumDisplay("9");
});
decimalBtn.addEventListener("click", () => {
	changeNumDisplay(".");
});

//DOM Interactions - Operators
divideBtn.addEventListener("click", () => {
	pendingOperation("divide");
});
multiplyBtn.addEventListener("click", () => {
	pendingOperation("multiply");
});
subtractBtn.addEventListener("click", () => {
	pendingOperation("subtract");
});
additionBtn.addEventListener("click", () => {
	pendingOperation("add");
});
equalBtn.addEventListener("click", () => {
	calculateTotal();
});
