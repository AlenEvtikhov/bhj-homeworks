const addText = setInterval(function () {
	const timer = document.getElementById("timer");
	timer.textContent -= 1;
	if (timer.textContent <= 0) {
		alert("Вы победили в конкурсе!");
		clearInterval(addText);
	}
}, 1000);