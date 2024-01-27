// src/components/ListaDeInvitadosEnviados.jsx

import React from 'react';

function ListaDeInvitadosEnviados({ sentInvites, onUpdateStatus }) {
  return (
    <div className="sent-invites-container">
      {sentInvites.map((invite, index) => (
        <div key={index} className="invite-entry">
          <span>{invite.name}</span>
          <label>
            <input
              type="checkbox"
              checked={invite.confirmed}
              onChange={() => onUpdateStatus(index)}
            />
            {invite.confirmed ? 'Asistirá' : 'No Asiste'}
          </label>
        </div>
      ))}
    </div>
  );
}

export default ListaDeInvitadosEnviados;
