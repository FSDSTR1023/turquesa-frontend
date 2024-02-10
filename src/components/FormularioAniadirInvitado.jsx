// FormularioAniadirInvitado.jsx
import React, { useState } from 'react';
import '../styles/FormularioAniadirInvitado.css'; // Import your specific CSS file

function FormularioAniadirInvitado({ onAddGuest }) {
  const [guestName, setGuestName] = useState('');
  const [guestSurName, setGuestSurName] = useState('');
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
    <div className="formulario-aniadir-invitado">
      {/* Title for the form */}
      <h2 className="formulario-title">Añadir Invitado</h2>
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

export default FormularioAniadirInvitado;
