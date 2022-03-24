import React from "react";
import "./Cart.css";

export const Cart = (props) => {
	const { cart } = props;
	let totalPrice = 0;
	let totalShipingPrice = 0;
	let quantity = 0;
	for (const product of cart) {
		quantity += product.quantity;
		totalPrice += product.price * product.quantity;
		totalShipingPrice += product.shipping;
	}
	const tax = parseFloat((totalPrice * 0.1).toFixed(2));
	const grandTotalPrice = parseFloat(
		(totalPrice + totalShipingPrice + tax).toFixed(2)
	);
	//console.log(total);
	return (
		<div className="cart">
			<h4>Order Summary</h4>
			<p>Selected item: {quantity}</p>
			<p>Total Price: {totalPrice}</p>
			<p>Total Shipping: {totalShipingPrice}</p>
			<p>Tax: {tax}</p>
			<h3>Grand Total: ${grandTotalPrice}</h3>
		</div>
	);
};
