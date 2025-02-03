const url = '../script/data-index.json';
let data = []; 

async function getData(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error.message);
	}
}

function addProductsToList(products){
	const list = document.querySelector('.fetured_items__grid');
	products.forEach(element => {
		list.insertAdjacentHTML('beforeend', `
				<div class="item${element.id} items">
					<div class="items__img">
						<img src="${element.img}" alt="" />
						<button class="hiden_button" data-id="${element.id}">Add to Cart</button>
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

}

function addToCart(productId) {
	   // Получаем данные о продукте по его ID
		const product = data.find(item => item.id === productId);
		console.log(productId);
		if (product) {
			 // Получаем текущую корзину из localStorage
			let cart = JSON.parse(localStorage.getItem('cart')) || [];
			// Проверяем, есть ли уже этот продукт в корзине
			const existingProductIndex = cart.findIndex(item => item.id === productId);
			if (existingProductIndex > -1) {
			  // Если продукт уже есть, увеличиваем количество
				cart[existingProductIndex].quantity += 1;
			} else {
			  // Если продукта нет, добавляем его в корзину с количеством 1
			  product.quantity = 1; // Добавляем свойство quantity
				cart.push(product);
			}
			
			// Сохраняем обновленную корзину в localStorage
			localStorage.setItem('cart', JSON.stringify(cart));
			alert('Товар добавлен в корзину!');
		} else {
			console.log('Product not found');
		}
	}



// Обработчик клика на кнопки "Add to Cart"
document.addEventListener('click', (event) => {
	if (event.target && 	event.target.classList.contains('hiden_button')) {
	const productId =	parseInt(event.target.getAttribute('data-id'), 10);
	addToCart(productId);
	}
});


document.addEventListener('DOMContentLoaded', async (e) => {
	data = await getData(url);
	addProductsToList(data);
});


const dropDownMenu = document.querySelector('.dropdown-menu');
const burger = document.querySelector('#button_lines');
const closeMenu = document.querySelector('#close_but');

function dropMenu(){
	dropDownMenu.classList.toggle('hidden-menu');
}

burger.addEventListener('click', dropMenu);
closeMenu.addEventListener('click', dropMenu);

