import React from "react";

export default function Footer() {

		const year = new Date().getFullYear();
		
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<h5 className="pt-4">Alihan &copy; {year}</h5>
				</div>
			</div>
		);
}
