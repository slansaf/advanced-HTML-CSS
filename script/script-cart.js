function displayCart() {
	const cart = JSON.parse(localStorage.getItem('cart')) || [];
	const cartList = document.querySelector('.cart__add-cards');
	cartList.innerHTML = ''; 

	if (cart.length === 0) {
		cartList.innerHTML = '<p>Корзина пуста</p>';
		return;
	}

	const numberOfOrders = document.querySelector('.header__number');

		let item = cart.length;
		numberOfOrders.textContent = `${item}`;
	
	
	

	cart.forEach(element => {
		cartList.insertAdjacentHTML('beforeend', `
			<div class="cart__card" data-id="${element.id}"> <!-- Добавлен атрибут data-id -->
					<img class="cart__img" src="${element.img}" alt="man-in-cart" />
					<div class="cart__price">
						<a href="#" class="cart__head"> ${element.title} </a>
						<ul class="cart__ul">
							<li>Price: <span class="cart__ul_color">${element.price}</span></li>
							<li>Color: ${element.color}</li>
							<li>Size: ${element.size}</li>
							<li>
									Quantity:
									<input type="number" value="${element.count}" class="cart__ul_quantity" />
							</li>
						</ul>
						<a href="#" class="cart__cross">
							<svg width="18.000000" height="18.000000" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<desc>Created with Pixso.</desc>
									<defs />
									<path id="Vector" d="M11.24 9L17.53 2.71C17.82 2.41 17.99 2.01 17.99 1.59C17.99 1.17 17.82 0.76 17.53 0.46C17.23 0.16 16.83 0 16.4 0C15.98 0 15.58 0.16 15.28 0.46L9 6.75L2.71 0.46C2.41 0.16 2.01 0 1.59 0C1.16 0 0.76 0.16 0.46 0.46C0.16 0.76 0 1.16 0 1.59C0 2.01 0.16 2.41 0.46 2.71L6.75 9L0.46 15.28C0.16 15.58 0 15.98 0 16.4C0 16.83 0.16 17.23 0.46 17.53C0.76 17.83 1.16 18 1.59 18C2.01 18 2.41 17.83 2.71 17.53L9 11.24L15.28 17.53C15.58 17.83 15.98 18 16.4 18C16.83 18 17.23 17.83 17.53 17.53C17.83 17.23 18 16.83 18 16.4C18 15.98 17.83 15.58 17.53 15.28L11.24 9Z" fill="#575757" fill-opacity="1.000000" fill-rule="nonzero" />
							</svg>
						</a>
					</div>
			</div>
		`);
	});

	cartList.addEventListener('click', (e) => {
		if (e.target.closest('.cart__cross')) {
			const item = e.target.closest('.cart__card');
			const productId = parseInt(item.getAttribute('data-id'), 10); // Получаем ID товара
			removeFromCart(productId); // Передаем ID в функцию удаления
		}
	});
}

function removeFromCart(productId) {
	// Получаем текущую корзину из localStorage
	let cart = JSON.parse(localStorage.getItem('cart')) || [];
	// Фильтруем корзину, удаляя товар с указанным ID
	cart = cart.filter(item => item.id !== productId);
	// Сохраняем обновленную корзину в localStorage
	localStorage.setItem('cart', JSON.stringify(cart));
	// Обновляем отображение корзины
	displayCart();
}

document.addEventListener('DOMContentLoaded', displayCart);

// const url = './script/data.json';

// async function getData(url) {
// 	try {
// 		const response = await fetch(url);
// 		const data = await response.json();
// 		return data;
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// }

// document.addEventListener('DOMContentLoaded', async (e) => {
// 	const data = await getData(url);
// 	const list = document.querySelector('.cart__cards');
// 	data.forEach(element => {
		// list.insertAdjacentHTML('afterbegin', `
		// 	<div class="cart__card">
		// 				<img
		// 					class="cart__img"
		// 					src=${element.img}
		// 					alt="man-in-cart"
		// 				/>
		// 				<div class="cart__price">
		// 					<a href="#" class="cart__head"> ${element.title} </a>
		// 					<ul class="cart__ul">
		// 						<li>Price: <span class="cart__ul_color">$${element.price}</span></li>
		// 						<li>Color: ${element.color}</li>
		// 						<li>Size: ${element.size}</li>
		// 						<li>
		// 							Quantity:
		// 							<input
		// 								type="number"
		// 								value=${element.count}
		// 								class="cart__ul_quantity"
		// 							/>
		// 						</li>
		// 					</ul>
		// 					<a href="#" class="cart__cross">
		// 						<svg
		// 							width="18.000000"
		// 							height="18.000000"
		// 							viewBox="0 0 18 18"
		// 							fill="none"
		// 							xmlns="http://www.w3.org/2000/svg"
		// 							xmlns:xlink="http://www.w3.org/1999/xlink"
		// 						>
		// 							<desc>Created with Pixso.</desc>
		// 							<defs />
		// 							<path
		// 								id="Vector"
		// 								d="M11.24 9L17.53 2.71C17.82 2.41 17.99 2.01 17.99 1.59C17.99 1.17 17.82 0.76 17.53 0.46C17.23 0.16 16.83 0 16.4 0C15.98 0 15.58 0.16 15.28 0.46L9 6.75L2.71 0.46C2.41 0.16 2.01 0 1.59 0C1.16 0 0.76 0.16 0.46 0.46C0.16 0.76 0 1.16 0 1.59C0 2.01 0.16 2.41 0.46 2.71L6.75 9L0.46 15.28C0.16 15.58 0 15.98 0 16.4C0 16.83 0.16 17.23 0.46 17.53C0.76 17.83 1.16 18 1.59 18C2.01 18 2.41 17.83 2.71 17.53L9 11.24L15.28 17.53C15.58 17.83 15.98 18 16.4 18C16.83 18 17.23 17.83 17.53 17.53C17.83 17.23 18 16.83 18 16.4C18 15.98 17.83 15.58 17.53 15.28L11.24 9Z"
		// 								fill="#575757"
		// 								fill-opacity="1.000000"
		// 								fill-rule="nonzero"
		// 							/>
		// 						</svg>
		// 					</a>
		// 				</div>
		// 			</div>
		// 	`)
// 	});
	
	// list.addEventListener('click', (e) => {
	// 	if(e.target.closest('.cart__cross')){
	// 		const item = e.target.closest('.cart__card');
	// 		if (item) {
	// 			item.remove();
	// 		}
	// 	}
	// });
// });

