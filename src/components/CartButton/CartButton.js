import React from "react";

import { faTrash, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartButton = (props) => {
	const {
		commonStyle,
		btnName,
		orderBtnStyle,
		deleteBtnStyle,
		deleteBtn,
		clearCartData,
	} = props;
	//console.log(bgColor);
	let btnStyle;
	if (deleteBtn) {
		btnStyle = { ...commonStyle, ...deleteBtnStyle };
	} else {
		btnStyle = { ...commonStyle, ...orderBtnStyle };
	}

	return (
		<div>
			<button
				onClick={() => clearCartData()}
				style={btnStyle}
				className="cartBtn"
			>
				<p style={{ marginRight: "5px" }}>{btnName}</p>

				<FontAwesomeIcon icon={deleteBtn ? faTrash : faArrowRight} />
			</button>
		</div>
	);
};

export default CartButton;
