import React, { useEffect, useState } from "react";
import { Cart } from "../Cart/Cart";
import {
	addToDb,
	deleteShoppingCart,
	getStoredCart,
} from "../../utilities/fakedb";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	//load data
	useEffect(() => {
		fetch("products.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	useEffect(() => {
		const storedCart = getStoredCart();
		const savedCart = [];
		for (const id in storedCart) {
			const addedProduct = products.find((product) => product.id === id);
			if (addedProduct) {
				const quantity = storedCart[id];
				addedProduct.quantity = quantity;
				savedCart.push(addedProduct);
			}
		}
		setCart(savedCart);
	}, [products]);

	//addToCart Function
	const handleAddToCart = (selectedProduct) => {
		let newCart = [];
		const exists = cart.find(
			(product) => product.id === selectedProduct.id
		);
		if (!exists) {
			selectedProduct.quantity = 1;
			newCart = [...cart, selectedProduct];
		} else {
			const rest = cart.filter(
				(product) => product.id !== selectedProduct.id
			);
			exists.quantity += 1;
			newCart = [...rest, exists];
		}
		setCart(newCart);
		addToDb(selectedProduct.id);
	};

	//clear cart data

	const clearCartData = () => {
		deleteShoppingCart();
		setCart([]);
	};
	//return components
	return (
		<div className="shop-container">
			<div className="product-container">
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						handleAddToCart={handleAddToCart}
					/>
				))}
			</div>

			{/* cart container section */}
			<div className="cart-container">
				<Cart cart={cart} clearCartData={clearCartData} />
			</div>
		</div>
	);
};

export default Shop;
