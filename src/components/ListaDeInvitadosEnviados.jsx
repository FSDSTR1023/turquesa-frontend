import React from 'react';
import '../styles/ListaDeInvitadosEnviados.css';

function ListaDeInvitadosEnviados({ sentInvites, onUpdateStatus }) {
  // Helper function to translate confirmation status
  const getConfirmationStatus = (confirmacion) => {
    switch (confirmacion) {
      case 'S':
        return 'Asistirá';
      case 'N':
        return 'No Asiste';
      case 'E':
      default:
        return 'Espera Respuesta';
    }
  };

  return (
    <div className="sent-invites-container">
      {/* Title for the sent invites section */}
      <h2 className="sent-invites-title">Invitaciones Enviadas</h2>
      {sentInvites.map((invite, index) => (
        <div key={index} className="invite-entry">
          <span>{invite.nombre}</span>
          {/* Display confirmation status based on invite.confirmacion */}
          <span className="confirmation-status">{getConfirmationStatus(invite.confirmacion)}</span>
        </div>
      ))}
    </div>
  );
}

export default ListaDeInvitadosEnviados;
