import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ArrowBigLeft } from 'lucide-react';
import { Context } from "../store/appContext";

export const EditContact = () => {
    const params = useParams();
	const [ nameAgenda ] = useState(params.nameAgenda);
	const [ idContact ] = useState(params.id_contact);
    const { store, actions } = useContext(Context);

    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ address, setAddress ] = useState('');

    const [ filtros, setFiltros ] = useState([]);

    useEffect(() => {
        fetch(`https://playground.4geeks.com/contact/agendas/${nameAgenda}`)
            .then(resp => resp.json())
            .then(data => setFiltros(data.contacts))
    }, [nameAgenda])

    const newFiltros = filtros.filter(filtro => filtro.id == idContact)[0] || [];
    
    console.log('filtros', filtros);
    console.log('New filtros', newFiltros);
    
    useEffect(() => {
        setName(newFiltros.name || '');
        setPhone(newFiltros.phone || '');
        setEmail(newFiltros.email || '');
        setAddress(newFiltros.address || '');
    }, [newFiltros]);

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
                        autoFocus
                        value={name}
                        onChange={e => setName(e.target.value)}
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
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="text-light">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter address"
                        name="address"
                        required
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </div>

                <div className="text-center">
                    <button className="btn btn-success" onClick={e => {actions.putContact(nameAgenda, idContact, name, phone, email, address); e.preventDefault()}}>
                        Edit Contact
                    </button>
                </div>
            </form>
            {store.showError && <div className="message-error text-danger">{store.messageError}</div>}
            {store.showSuccessful && <div className="message-successful">{store.messageSuccessful}</div>}
        </div>
    );
};