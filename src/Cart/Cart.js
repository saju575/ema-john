import React from "react";

export const Cart = (props) => {
	const { cart } = props;
	return (
		<div>
			<h4>Order Summary</h4>
			<p>selected item: {cart.length}</p>
		</div>
	);
};
