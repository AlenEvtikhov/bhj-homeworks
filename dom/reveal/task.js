const banner = document.querySelectorAll(".reveal");

function revealCheck() {
	for (let i = 0; i < banner.length; i++) {
		let el = banner[i].getBoundingClientRect().el;
		let top = banner[i].getBoundingClientRect().top;

		if (top >= 0 && top <= 700) {
			banner[i].classList.toggle("reveal_active");
		}
	}
}

document.addEventListener("scroll", revealCheck);