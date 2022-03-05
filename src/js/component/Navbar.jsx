import React from "react";

function Navbar() {
	return (
		<div className="Navbar">
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand" href="#">
					Start Booststrap!
				</a>
				<div className="float-right">
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div
						class="collapse navbar-collapse"
						id="navbarNavAltMarkup">
						<div class="navbar-nav">
							<a class="nav-item nav-link active" href="#">
								Home <span class="sr-only">(current)</span>
							</a>
							<a class="nav-item nav-link" href="#">
								About
							</a>
							<a class="nav-item nav-link" href="#">
								Services
							</a>
							<a class="nav-item nav-link disabled" href="#">
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
export default Navbar;