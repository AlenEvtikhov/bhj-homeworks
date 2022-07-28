let dataText = document.getElementById("editor");
let previousText = localStorage.getItem("dataText");

dataText.value = previousText;
dataText.addEventListener("key", dataText_load);

function dataText_load() {
	localStorage.setItem("dataText", this.value);
}

clear.addEventListener("click", function () {
	dataText.value = "";
	localStorage.removeItem("dataText");
});