const image = document.getElementById('cookie');
let timer = Date.now();
let button = 0;
let counter = 0;

function changeSizes() {
	counter += 1;
	let clickTimer = Date.now();
	if (button === 0) {
		button = 1;
		image.width += 100;
	} else {
		button = 0;
		image.width -= 100;
	}
	document.getElementById('clicker__counter').textContent = counter + '\n' + 'Скорость клика: ' + ((clickTimer - timer) / 1000).toFixed(2);
	timer = Date.now();
}
image.onclick = changeSizes;