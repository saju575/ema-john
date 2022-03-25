import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<nav className="header-main">
			<div className="container header">
				<img src={logo} alt="logo" />
				<div>
					<NavLink
						to="/"
						className={(navInfo) =>
							navInfo.isActive ? styles.active : styles.notActive
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/shop"
						className={(navInfo) =>
							navInfo.isActive ? styles.active : styles.notActive
						}
					>
						Shop
					</NavLink>
					<NavLink
						to="/orders"
						className={(navInfo) =>
							navInfo.isActive ? styles.active : styles.notActive
						}
					>
						Orders
					</NavLink>
					<NavLink
						to="/inventory"
						className={(navInfo) =>
							navInfo.isActive ? styles.active : styles.notActive
						}
					>
						Inventory
					</NavLink>
					<NavLink
						to="/about"
						className={(navInfo) =>
							navInfo.isActive ? styles.active : styles.notActive
						}
					>
						About
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Header;
