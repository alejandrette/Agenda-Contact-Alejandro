import React from "react";
import { Link } from "react-router-dom";
import { SquareUser } from 'lucide-react';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light" style={{background: '#1A1A1A '}}>
			<Link to="/" style={{ textDecoration: "none" }}>
				<span className="navbar-brand ms-3 mb-0" style={{color: '#E0E0E0'}}><SquareUser/> Agendas</span>
			</Link>
			<div className="ml-auto me-3">
				<Link to="/createAgenda">
					<button className="btn btn-primary">Create Agenda</button>
				</Link>
			</div>
		</nav>
	);
};
