import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
const Product = (props) => {
	const { handleAddToCart, product } = props;
	const { name, img, seller, price, ratings } = product;
	return (
		<div className="product">
			<img src={img} alt="product" />
			<div className="product-info">
				<p className="product-name">{name}</p>
				<p className="product-price">Price : ${price}</p>
			</div>
			<div className="product-manufacture">
				<p className="manufacture">Manufacturer : {seller}</p>
				<p className="rating">Rating : {ratings} start</p>
			</div>
			<button onClick={() => handleAddToCart(product)} className="btn">
				<p style={{ marginRight: "6px" }}>Add to Cart</p>
				<FontAwesomeIcon icon={faShoppingCart} />
			</button>
		</div>
	);
};

export default Product;
