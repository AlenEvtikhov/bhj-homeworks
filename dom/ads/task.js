const rotatorCase = Array.from(document.querySelectorAll(".rotator__case"));

setInterval(rotator, 1000, rotatorCase);

function rotator(rotatorArr) {
	let activeIdx = rotatorArr.findIndex((item) => item.className.includes('rotator__case_active'));
	let nextIdx;
	activeIdx == (rotatorArr.length - 1) ? nextIdx = 0 : nextIdx = activeIdx + 1;
	rotatorArr[activeIdx].classList.toggle('rotator__case_active');
	rotatorArr[nextIdx].classList.toggle('rotator__case_active');
};