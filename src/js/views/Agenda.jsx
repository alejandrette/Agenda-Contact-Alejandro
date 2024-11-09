import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Phone, Mail, MapPinHouse, Pencil, BadgeX } from 'lucide-react';

export const Agenda = () => {
	const params = useParams();
	const [ nameAgenda, setNameAgenda ] = useState(params.nameAgenda);
	const [ agendaConcat, setAgendaConcat ] = useState([]);

	const getAgendaConcat = () => {
		fetch(`https://playground.4geeks.com/contact/agendas/${nameAgenda}`)
			.then(resp => resp.json())
			.then(data => setAgendaConcat(data.contacts))
	};

    const deleteContact = async idContact => {
        try {
            await fetch(`https://playground.4geeks.com/contact/agendas/${nameAgenda}/contacts/${idContact}`, { method: "DELETE", redirect: "follow" });
            getAgendaConcat();
        } catch (error) {
            console.error(error);
        }        
    };

	useEffect(() => getAgendaConcat(), []);
	
	return (
		<div className="agenda-container">
			<h1 className="text-light text-center">Agenda of {nameAgenda}</h1>
			{agendaConcat.length > 0 ? (
                agendaConcat.map((agenda, index) => (
                    <Card key={index} className="mb-3 shadow-sm card-uniform" style={{ maxWidth: "500px", height: "150px", borderRadius: "10px" }}>
                        <Card.Body className="d-flex align-items-center justify-content-start text-start">
                            <div className="me-3">
                                <img
                                    src={`https://unavatar.io/${agenda.name}`}
                                    alt={`${agenda.name}'s avatar`}
                                    style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover" }}
                                />
                            </div>

                            <div>
                                <h5 className="mb-1 text-light" style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                                    {agenda.name}
                                </h5>
                                <p className="mb-1 text-light">
                                    <Phone className="me-2" /> {agenda.phone}
                                </p>
                                <p className="mb-1 text-light">
                                    <Mail className="me-2" /> {agenda.email}
                                </p>
                                <p className="mb-1 text-light">
                                    <MapPinHouse className="me-2" /> {agenda.address}
                                </p>
                            </div>

                            <div className="d-flex flex-column ms-auto text-center">
                                <Link to="" className="mb-2">
                                    <Pencil className="text-warning"/>
                                </Link>
                                <button className="btn btn-danger" onClick={() => deleteContact(agenda.id)}>
                                    <BadgeX />
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <h3 style={{ color: '#fff', textAlign: 'center' }}>There are no Contacts</h3>
            )}
		</div>
	);
};
