// src/pages/GestionDeInvitados.jsx
import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import FormularioAniadirInvitado from "../components/FormularioAniadirInvitado";
import ListaDeInvitados from "../components/ListaDeInvitados";
import ListaDeInvitadosEnviados from "../components/ListaDeInvitadosEnviados";
import "../styles/GestionDeInvitados.css";
import "../styles/ListaDeInvitados.css";
import "../styles/ListaDeInvitadosEnviados.css"; 


function GestionDeInvitados() {
  const [guests, setGuests] = useState([]);
  const [sentInvites, setSentInvites] = useState([]);
  const [invitationsSent, setInvitationsSent] = useState(false);

  const handleAddGuest = (newGuest) => {
    const guestWithId = { ...newGuest, id: Date.now() }; // Assign a unique ID
    setGuests([...guests, guestWithId]);
  };

  const handleRemoveGuest = (guestId) => {
    const updatedGuests = guests.filter((guest) => guest.id !== guestId);
    setGuests(updatedGuests);
  };

  const handleUpdateStatus = (index) => {
    const updatedInvites = sentInvites.map((invite, i) => {
      if (i === index) {
        return { ...invite, confirmed: !invite.confirmed };
      }
      return invite;
    });
    setSentInvites(updatedInvites);
  };

  const handleSendInvitations = () => {
    // Logic to send invitations, possibly with an API call
    console.log("Invitations sent to:", guests);

    // Move guests to sentInvites and assume they have not confirmed yet
    const invites = guests.map(guest => ({
      ...guest,
      confirmed: false // Default to not confirmed
    }));
    setSentInvites(invites);
    
    // Optionally clear the current guests list if they have been sent invites
    setGuests([]);

    setInvitationsSent(true);
  };


  return (
    <div className="gestion-invitados-container">
      <section>
        <div>
        <Navbar />
        </div>
        <div className="formulario-aniadir-invitado">
        <FormularioAniadirInvitado onAddGuest={handleAddGuest} />
        </div>
        <div className="lista-invitados-container">
          {guests.map((guest) => (
            <div key={guest.id} className="lista-invitados-item">
              <span className="lista-invitados-name">
                {guest.name} {guest.surname}
              </span>
              <button
                className="lista-invitados-remove-btn"
                onClick={() => handleRemoveGuest(guest.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        {/* Button for sending invitations */}
        {invitationsSent ? (
          <p>Invitaciones enviadas!</p>
        ) : (
          <button
            onClick={handleSendInvitations}
            className="send-invitations-btn"
          >
            Enviar Invitaciones
          </button>
        )}
        <ListaDeInvitadosEnviados
          sentInvites={sentInvites}
          onUpdateStatus={handleUpdateStatus}
        />
      </section>
    </div>
  );
}

export default GestionDeInvitados;
