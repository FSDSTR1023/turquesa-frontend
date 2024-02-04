// src/components/FormularioAniadirInvitado.jsx

import React, { useState } from 'react';
import '../styles/FormularioAniadirInvitado.css'; // Import your specific CSS file

function FormularioAniadirInvitado({ onAddGuest }) {
  const [guestName, setGuestName] = useState('');
  const [guestSurName, setGuestSurName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guestName && guestEmail && guestSurName) {
      onAddGuest({ name: guestName, surname: guestSurName, email: guestEmail });
      setGuestName('');
      setGuestSurName('');
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
          type="text"
          placeholder="Apellidos"
          value={guestSurName}
          onChange={(e) => setGuestSurName(e.target.value)}
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

export default FormularioAniadirInvitado;
