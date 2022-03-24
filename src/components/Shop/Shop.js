import React, { useEffect, useState } from "react";
import { Cart } from "../../Cart/Cart";
import { addToDb } from "../../utilities/fakedb";
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

	//addToCart Function
	const handleAddToCart = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
		addToDb(product.id);
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
				<Cart cart={cart} />
			</div>
		</div>
	);
};

export default Shop;
