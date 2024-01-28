// src/components/ListaDeInvitados.jsx

import React from 'react';

function ListaDeInvitados({ guests, onRemoveGuest, onSendInvitations }) {
  return (
    <div className="lista-invitados-container">
        {guests.map((guest) => (
          <div key={guest.id} className="guest-entry">
            <span>{guest.name} {guest.surname}</span>
            <button onClick={() => onRemoveGuest(guest.id)}>Eliminar</button>
          </div>
        ))}
      {/* New button for sending invitations */}
      <button className="send-invitations-btn" onClick={onSendInvitations}>
        Enviar Invitaciones
      </button>        
    </div>
  );
}

export default ListaDeInvitados;

