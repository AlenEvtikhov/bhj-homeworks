const menuElements = document.getElementsByClassName('menu__link');
const menuSub = document.getElementsByClassName('menu menu_sub');

let arrForElements = Array.from(menuElements);

arrForElements.forEach(el => el.onclick = () => {
	if (el.closest('li').querySelector('ul.menu_sub')) {
		el.closest('li').querySelector('ul.menu_sub').classList.add('menu_active');
		return false;
	}
})