import React, { useContext, useState } from "react";
import "../../styles/demo.css";
import { Context } from "../store/appContext";

export const CreateAgenda = () => {
  const [ nameAgenda, setNameAgenda ] = useState('');
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex flex-column align-items-center mt-5 text-light">
      <div className="card p-4" style={{ maxWidth: "400px", width: "100%", background: '#1A1A1A' }}>
        <h2 className="text-center mb-4">Create New Agenda</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter agenda name"
            autoFocus
            value={nameAgenda}
            onChange={e => setNameAgenda(e.target.value)}
            onKeyDown={e => e.key === 'Enter' ? actions.postNewAgenda(nameAgenda) : null}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={() => actions.postNewAgenda(nameAgenda)}>
          Create Agenda
        </button>
      </div>

      <div className="mt-3 text-center" style={{ width: '100%', maxWidth: '400px' }}>
        {store.showError && <div className="message-error text-danger">{store.messageError}</div>}
        {store.showSuccessful && <div className="message-successful">{store.messageSuccessful}</div>}
      </div>
    </div>
  );
};
