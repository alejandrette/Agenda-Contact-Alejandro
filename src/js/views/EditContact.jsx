import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ArrowBigLeft } from 'lucide-react';

export const EditContact = () => {
    const params = useParams();
	const [ nameAgenda, setNameAgenda ] = useState(params.nameAgenda);
	const [ idContact, setIdContact ] = useState(params.id_contact);

    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ address, setAddress ] = useState('');

    const putContact = () => {
        fetch(`https://playground.4geeks.com/contact/agendas/${nameAgenda}/contacts/${idContact}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "name": name,
                "phone": phone,
                "email": email,
                "address": address
              }),
            redirect: "follow"
        })
    }

    return(
        <div className="mt-3">
            <Link to={`/Agenda/${nameAgenda}`}>
                <ArrowBigLeft className="text-warning ms-2" style={{position: 'absolute'}} size={40}/>
            </Link>
            <h1 className="text-light text-center mb-4 fs-1">Edit {nameAgenda}</h1>
            <form className="p-4 shadow-sm rounded mx-auto" style={{ background: "#1A1A1A", maxWidth: '500px' }}>
                <div className="mb-3">
                    <label className="text-light">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter name"
                        name="name"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter phone number"
                        name="phone"
                        required
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email address"
                        name="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="text-light">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter address"
                        name="address"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary" onClick={putContact}>
                        Edit Contact
                    </button>
                </div>
            </form>
        </div>
    )
}