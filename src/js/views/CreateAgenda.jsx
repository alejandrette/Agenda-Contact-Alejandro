import React, { useState } from "react";
import "../../styles/demo.css";

export const CreateAgenda = () => {
  const [ nameAgenda, setNameAgenda ] = useState('');
  const [ messageError, setMessageError ] = useState('');
  const [ showError, setShowError ] = useState(false);
  const [ messageSuccessful, setMessageSuccessful ] = useState('');
  const [ showSuccessful, setShowSuccessful ] = useState(false);

  const postNewAgenda = async () => {
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/${nameAgenda}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug: `${nameAgenda}` }),
        }
      );

      if (response.status === 400) {
        setMessageError("The agenda already exists");
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
      } else {
        setMessageSuccessful("Agenda Created");
        setShowSuccessful(true);
        setTimeout(() => setShowSuccessful(false), 3000);
      }

      await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5 text-light">
      <div className="card p-4" style={{ maxWidth: "400px", width: "100%", background: '#1A1A1A' }}>
        <h2 className="text-center mb-4">Create New Agenda</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter agenda name"
            value={nameAgenda}
            onChange={e => setNameAgenda(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={postNewAgenda}>
          Create Agenda
        </button>
      </div>

      <div className="mt-3 text-center" style={{ width: '100%', maxWidth: '400px' }}>
        {showError && <div className="message-error text-danger">{messageError}</div>}
        {showSuccessful && <div className="message-successful">{messageSuccessful}</div>}
      </div>
    </div>
  );
};
