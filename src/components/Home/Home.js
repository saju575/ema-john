import React from "react";
import "./Home.css";
import homeImg from "../../images/homeImg.png";
const Home = () => {
	return (
		<div className="container home-section">
			<div className="items-container">
				<div className="item">
					<span>Sale up to 70% off</span>
					<h1>New Collection For Fall</h1>
					<p>
						Discover all the new arrivals of ready-to-wear
						collection.
					</p>
					<button className="btn-hm">SHOP NOW</button>
				</div>
				<div className="item">
					<img src={homeImg} alt="homeImg" />
				</div>
			</div>
		</div>
	);
};

export default Home;
