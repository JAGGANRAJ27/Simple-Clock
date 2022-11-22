setInterval(Time, 1000);
function Time() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
  let date = time.getDate();
  let month = time.getMonth();
  let year = time.getFullYear();
	meridiem = "AM";

	if (hour > 12) {
		hour = hour-12;
		meridiem = "PM";
	}
	if (hour == 0) {
		hour = 12;
		meridiem = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":" + min + ":" + sec + " " + meridiem + "<br/> " + date + "-" + month +"-" +year;

	const full = document.getElementsByClassName("clock");full[0].innerHTML = currentTime;
}
Time();
