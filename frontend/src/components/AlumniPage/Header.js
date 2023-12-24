import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className={`resources-list-header ${isVisible ? "show" : ""}`}>
			<div class="resources-list-header-title">OUR ALUMNI NETWORK</div>
			<div
				class="resources-list-header-subtitle"
				style={{ fontSize: "1.2rem" }}
			>
				Meet the distinguished alumni of Kharagpur Data Analytics Group and discover the impact they've made in the world of Machine Learning and Artificial Intelligence.
			</div>
		</div>
	);
};

export default Header;
