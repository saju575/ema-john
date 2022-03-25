import React from "react";
import CartButton from "../CartButton/CartButton";
import "./Cart.css";

export const Cart = (props) => {
	const { cart, clearCartData } = props;
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

	//btn style
	const commonStyle = {
		border: "none",
		borderRadius: "3px",
		padding: "8px 20px",
		width: "80%",
		color: "#fff",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: "20px 0",
		cursor: "pointer",
	};
	const deleteBtnStyle = {
		backgroundColor: "#FF3030",
	};
	const orderBtnStyle = {
		backgroundColor: "#FF9900",
	};
	return (
		<div className="cart">
			<h4>Order Summary</h4>
			<p>Selected item: {quantity}</p>
			<p>Total Price: {totalPrice}</p>
			<p>Total Shipping: {totalShipingPrice}</p>
			<p>Tax: {tax}</p>
			<h3>Grand Total: ${grandTotalPrice}</h3>
			<CartButton
				commonStyle={commonStyle}
				btnName={"Clear Cart"}
				deleteBtnStyle={deleteBtnStyle}
				deleteBtn={true}
				clearCartData={clearCartData}
			/>

			<CartButton
				commonStyle={commonStyle}
				orderBtnStyle={orderBtnStyle}
				btnName={"Review Order"}
				deleteBtn={false}
			/>
		</div>
	);
};
