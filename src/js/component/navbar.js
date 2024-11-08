import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light" style={{background: '#1A1A1A '}}>
			<Link to="/">
				<span className="navbar-brand ms-3 mb-0" style={{color: '#E0E0E0'}}>Agendas</span>
			</Link>
			<div className="ml-auto me-3">
				<Link to="/createAgenda">
					<button className="btn btn-primary">Create Agenda</button>
				</Link>
			</div>
		</nav>
	);
};
