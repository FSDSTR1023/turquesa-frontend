// src/pages/GestionDeInvitados.jsx

import React, { useState } from 'react';
import FormularioAñadirInvitado from '../components/FormularioAñadirInvitado';
import ListaDeInvitados from '../components/ListaDeInvitados';
import Navbar from "../components/Navbar.jsx";
import ListaDeInvitadosEnviados from '../components/ListaDeInvitadosEnviados';
import '../styles/GestionDeInvitados.css';

function GestionDeInvitados() {
  const [guests, setGuests] = useState([]);
  const [sentInvites, setSentInvites] = useState([]);

  const handleAddGuest = (newGuest) => {
    setGuests([...guests, newGuest]);
  };

  const handleRemoveGuest = (index) => {
    const updatedGuests = guests.filter((_, i) => i !== index);
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
          <div className='screenUno'>
              {/*componente Navbar*/}
              <Navbar />
              <FormularioAñadirInvitado onAddGuest={handleAddGuest} />
              <ListaDeInvitados guests={guests} onRemoveGuest={handleRemoveGuest} />
               <ListaDeInvitadosEnviados sentInvites={sentInvites} onUpdateStatus={handleUpdateStatus} /> 
         </div>
      </section>
    </div>
  );
}

export default GestionDeInvitados;
