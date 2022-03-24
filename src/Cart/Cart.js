import React from "react";
import "./Cart.css";

export const Cart = (props) => {
	const { cart } = props;
	const totalPrice = cart.reduce(
		(previousTotal, currentTotal) => previousTotal + currentTotal.price,
		0
	);
	const totalShipingPrice = cart.reduce(
		(previousTotal, currentTotal) => previousTotal + currentTotal.shipping,
		0
	);
	const tax = parseFloat((totalPrice * 0.1).toFixed(2));
	const grandTotalPrice = parseFloat(
		(totalPrice + totalShipingPrice + tax).toFixed(2)
	);
	//console.log(total);
	return (
		<div className="cart">
			<h4>Order Summary</h4>
			<p>Selected item: {cart.length}</p>
			<p>Total Price: {totalPrice}</p>
			<p>Total Shipping: {totalShipingPrice}</p>
			<p>Tax: {tax}</p>
			<h3>Grand Total: ${grandTotalPrice}</h3>
		</div>
	);
};
