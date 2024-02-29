import '../styles/ListaDeInvitados.css';

function ListaDeInvitados({ guests, onRemoveGuest, onSendInvitations }) {
  return (
    <div className="lista-invitados-container">
     
      <h2 className="lista-invitados-title">Lista de Invitaciones no enviadas</h2>
      
      {guests.map((guest) => (
        // Use the correct class name for styling as per your CSS
        <div key={guest.id} className="lista-invitados-item">
          <span className="lista-invitados-name">{guest.name}</span> {/* Ensure the name is styled correctly */}
          {/* Apply the correct class name for the "Eliminar" button */}
          <button onClick={() => onRemoveGuest(guest.id)} className="lista-invitados-remove-btn">Eliminar</button>
        </div>
      ))}
      
      {/* Button for sending invitations, already correctly styled */}
      <button className="send-invitations-btn" onClick={onSendInvitations}>
        Enviar Invitaciones
      </button>        
    </div>
  );
}

export default ListaDeInvitados;
