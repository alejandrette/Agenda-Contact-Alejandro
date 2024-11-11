import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
import { CreateAgenda } from "./views/CreateAgenda.jsx";
import { Agenda } from "./views/Agenda.jsx";
import { CreateContact } from './views/CreateContact.jsx';
import { EditContact } from "./views/EditContact.jsx";
import { Error404 } from './views/Error404.jsx'
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/CreateAgenda" element={<CreateAgenda />} />
						<Route path="/Agenda/:nameAgenda" element={<Agenda />} />
						<Route path="/Agenda/:nameAgenda/CreateContact/" element={<CreateContact />} />
						<Route path="/Agenda/:nameAgenda/CreateContact/:id_contact" element={<EditContact />} />
						<Route path="*" element={<Error404 />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
