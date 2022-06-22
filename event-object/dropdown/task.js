const dropDown = document.querySelector('.dropdown__value');
const dropDownList = document.querySelector('.dropdown__list');

dropDown.addEventListener('click', listFixed);
dropDownList.addEventListener('click', choiceItem);

function listFixed() {
	dropDownList.classList.toggle('dropdown__list_active');
}


function choiceItem(event) {
	event.preventDefault();
	dropDown.innerHTML = event.target.innerText;
	listFixed();
}