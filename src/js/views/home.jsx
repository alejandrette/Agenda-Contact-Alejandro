import React, { useEffect, useState } from "react";
import { BookUser } from 'lucide-react';
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

export const Home = () => {
	const [ agendas, setAgendas ] = useState([]);

	const getAllAgendas = () => {
		fetch('https://playground.4geeks.com/contact/agendas')
			.then(resp => resp.json())
			.then(data => setAgendas(data.agendas))
	}

	useEffect(() => getAllAgendas(), []);

	return(
		<Container className="my-4">
      		{agendas.length > 0 ? (
				<Row>
					{agendas.map(agenda => (
						<Col key={agenda.id} className="mb-4">
							<Card className="h-100 shadow-sm" style={{ borderRadius: '10px', background: '#1A1A1A' }}>
								<Card.Body className="text-center">
									<div className="mb-3">
										<BookUser style={{ color: '#007bff' }} />
									</div>
									<Card.Title className="mb-2" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fff' }}>
										{agenda.slug}
									</Card.Title>
									<Button>
										<Link to={`/single/${agenda.slug}`} className="text-light" style={{textDecoration: 'none'}}>
											See Contacts
										</Link>
									</Button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			) : (
				<p style={{ color: '#fff', textAlign: 'center' }}>There are no agendas</p>
			)}
    	</Container>
	)
};
