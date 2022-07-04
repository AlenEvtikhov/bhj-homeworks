const interest = document.querySelectorAll(".interests_main > ul > .interest");

for (let i = 0; i < interest.length; i++) {
	const mainInterest = interest[i].querySelector("label > input");
	const secondaryInterest = interest[i].querySelectorAll(".interests > .interest > label > input");
	mainInterest.addEventListener("click", () => {
		if (mainInterest.checked) {
			secondaryInterest.forEach(item => {
				item.checked = true;
			});
		} else {
			secondaryInterest.forEach(item => {
				item.checked = false;
			});
		}
	});
}