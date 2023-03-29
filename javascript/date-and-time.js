const updateDate = () => {
	const dateDisplay = document.querySelector(
		".date-and-time__date"
	);
	var day = new Date().getDay();
	switch (day) {
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
			break;
	}
	var date = new Date().getDate();
	var month = new Date().getMonth();
	switch (month) {
		case 0:
			month = "January";
			break;
		case 1:
			month = "February";
			break;
		case 2:
			month = "March";
			break;
		case 3:
			month = "April";
			break;
		case 4:
			month = "May";
			break;
		case 5:
			month = "June";
			break;
		case 6:
			month = "July";
			break;
		case 7:
			month = "August";
			break;
		case 8:
			month = "September";
			break;
		case 9:
			month = "October";
			break;
		case 10:
			month = "November";
			break;
		case 11:
			month = "December";
			break;
	}
	var fullDate = `${day} ${date} ${month}`;
	dateDisplay.textContent = fullDate;
};
setInterval(updateDate, 1000);

const updateTime = () => {
	const timeDisplay = document.querySelector(
		".date-and-time__time"
	);
	let time = new Date().toString();
	// time = time.substring(16, 21);
	// timeDisplay.textContent = time;
	timeDisplay.textContent = time.substring(16, 21);
};
setInterval(updateTime, 1000);
