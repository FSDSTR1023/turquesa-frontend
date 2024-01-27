// src/components/ListaDeInvitados.jsx

import React from 'react';

function ListaDeInvitados({ guests, onRemoveGuest }) {
  return (
    <div className="guest-list-container">
      {guests.map((guest, index) => (
        <div key={index} className="guest-entry">
          <span>{guest.name}</span>
          <button onClick={() => onRemoveGuest(index)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default ListaDeInvitados;
