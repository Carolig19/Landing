import React from "react";
import Navbar from "./Navbar.jsx";
import Card from "./card.jsx";
import Jumbo from "./jumbo.jsx";

const Home = () => {
	return (
		<>
			<div className="Home">
				<Navbar />
				<div className="Jtron">
					<Jumbo />
				</div>

				<div className="container col-12 ml-0">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
};

export default Home;
