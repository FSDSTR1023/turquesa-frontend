// src/components/ListaDeInvitados.jsx

import React from 'react';

function ListaDeInvitados({ guests, onRemoveGuest }) {
  return (
    <div className="lista-invitados-container">
        {guests.map((guest) => (
          <div key={guest.id} className="guest-entry">
            <span>{guest.name} {guest.surname}</span>
            <button onClick={() => onRemoveGuest(guest.id)}>Eliminar</button>
          </div>
        ))}
    </div>
  );
}

export default ListaDeInvitados;
