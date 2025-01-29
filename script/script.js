const url = '../script/data-index.json';

async function getData(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error.message);
	}
}


document.addEventListener('DOMContentLoaded', async (e) => {
	const data = await getData(url);
	const list = document.querySelector('.fetured_items__grid');
	data.forEach(element => {
		list.insertAdjacentHTML('beforeend', `
				<div class="item${element.id} items">
					<div class="items__img">
						<img src="${element.img}" alt="" />
						<button class="hiden_button">Add to Cart</button>
					</div>

					<div class="card_items">
						<h3 class="card_items__head">${element.title}</h3>
						<p class="card_items__text">
						${element.text}
						</p>
						<p class="card_items__price">$${element.price}</p>
					</div>
				</div>
			`)
	});
});


const dropDownMenu = document.querySelector('.dropdown-menu');
const burger = document.querySelector('#button_lines');
const closeMenu = document.querySelector('#close_but');

function dropMenu(){
	dropDownMenu.classList.toggle('hidden-menu');
}

burger.addEventListener('click', dropMenu);
closeMenu.addEventListener('click', dropMenu);

