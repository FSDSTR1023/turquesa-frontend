// src/pages/GestionDeInvitados.jsx
import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import FormularioAniadirInvitado from "../components/FormularioAniadirInvitado";
import ListaDeInvitados from "../components/ListaDeInvitados";
import ListaDeInvitadosEnviados from "../components/ListaDeInvitadosEnviados";
import "../styles/GestionDeInvitados.css";
import "../styles/ListaDeInvitados.css";

function GestionDeInvitados() {
  const [guests, setGuests] = useState([]);
  const [sentInvites, setSentInvites] = useState([]);

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

  // Additional logic to handle sending invites will go here

  return (
    <div className="gestion-invitados-container">
      <section>
        <div className="s1">
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
              </span>{" "}
              {/* Display name and surname */}
              <button
                className="lista-invitados-remove-btn"
                onClick={() => handleRemoveGuest(guest.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>{" "}
        <div>
          <ListaDeInvitadosEnviados
            sentInvites={sentInvites}
            onUpdateStatus={handleUpdateStatus}
          />
        </div>
      </section>
    </div>
  );
}

export default GestionDeInvitados;
