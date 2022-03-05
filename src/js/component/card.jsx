import React from "react";

function Card() {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				src="https://i.pinimg.com/originals/29/ff/c7/29ffc772419eeb4c58a81fb2afd2f263.jpg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Fin out more!
				</a>
			</div>
		</div>
	);
}
export default Card;
