// src/components/FormularioAñadirInvitado.jsx

import React, { useState } from 'react';

function FormularioAñadirInvitado({ onAddGuest }) {
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guestName && guestEmail) {
      onAddGuest({ name: guestName, email: guestEmail });
      setGuestName('');
      setGuestEmail('');
    }
  };

  return (
    <div className="add-guest-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={guestEmail}
          onChange={(e) => setGuestEmail(e.target.value)}
        />
        <button type="submit">Añadir</button>
      </form>
    </div>
  );
}

export default FormularioAñadirInvitado;
