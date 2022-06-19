const image = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');
let lastClick = Date.now();
let button = 0;
let counter = 0;

function sizeChange() {
	counter += 1;
	let clickTimer = Date.now();
	if (button === 0) {
		button = 1;
		image.width += 100;
	} else {
		button = 0;
		image.width -= 100;
	}
	clickerCounter.textContent = counter + '\n' + 'Скорость клика: ' + (1000 / (clickTimer - lastClick)).toFixed(2) + ' сек.';
	lastClick = Date.now();
}
image.onclick = sizeChange;