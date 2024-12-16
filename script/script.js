const dropDownMenu = document.querySelector('.dropdown_menu');
const burger = document.querySelector('#button_lines');
const closeMenu = document.querySelector('#close_but');

function dropMenu(){
	dropDownMenu.classList.toggle('hidden_menu');
}

burger.addEventListener('click', dropMenu);
closeMenu.addEventListener('click', dropMenu);