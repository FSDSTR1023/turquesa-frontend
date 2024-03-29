// src/pages/GestionDeInvitados.jsx
import { useState } from "react";

// Components
import Navbar from "../components/Navbar.jsx";
import FormularioAniadirInvitado from "../components/FormularioAniadirInvitado";
import ListaDeInvitados from "../components/ListaDeInvitados";
import ListaDeInvitadosEnviados from "../components/ListaDeInvitadosEnviados";
import {Link} from 'react-router-dom';

// Context and API utilities
import { useTarjeta } from '../components/TarjetaContexto';
import { crearAsistente, getAsistentes } from '../api/asistente.api';

// Styles
import "../styles/GestionDeInvitados.css";
import "../styles/ListaDeInvitados.css";
import "../styles/ListaDeInvitadosEnviados.css";

const hardcodedTarjetaId = "65b52c36e01dc2b66e6edae5";

function GestionDeInvitados() {
    const [guests, setGuests] = useState([]);
    const [sentInvites, setSentInvites] = useState([]);
    const [invitationsSent, setInvitationsSent] = useState(false);
    
    // Use the useTarjeta hook to access the currently selected tarjeta
    const { tarjeta } = useTarjeta();

    const handleAddGuest = (newGuest) => {
        const guestWithId = { ...newGuest, id: Date.now() };
        setGuests([...guests, guestWithId]);
    };

    const handleRemoveGuest = (guestId) => {
        setGuests(guests.filter((guest) => guest.id !== guestId));
    };

    const handleSendInvitations = async () => {
        // This check is now commented out to bypass the alert since we're using a hardcoded ID.
        // if (!tarjeta) {
        //     alert('No tarjeta selected. Please select a tarjeta before sending invitations.');
        //     return;
        // }
    
        // Attempt to create an asistente for each guest
        for (const guest of guests) {
            const asistenteData = {
                nombre: guest.name,
                email: guest.email, // Assuming each guest has a 'name' and 'email'
                id_tarjeta: hardcodedTarjetaId, // Use the hardcoded tarjeta ID
                confirmacion: 'E', // Default confirmation status
            };
    
            try {
                await crearAsistente(asistenteData);
            } catch (error) {
                console.error('Error creating assistant for guest:', guest.name, error);
                // Handle errors appropriately (e.g., notify the user of the failed operation)
            }
        }
    
        // After attempting to send all invitations, fetch the updated list of asistentes
        try {
            const response = await getAsistentes();
            setSentInvites(response.data); // Update your state with the fetched asistentes
        } catch (error) {
            console.error('Error fetching updated asistentes:', error);
            // Handle fetch error (e.g., notify the user)
        }
    
        // Clear the guests list and mark the invitation process as complete
        setGuests([]);
        setInvitationsSent(true);
    };
    

    return (
    <>
        <Navbar />
        <div className="gestion-invitados-container">
            
            <section className="formulario-aniadir-invitado">
                <FormularioAniadirInvitado onAddGuest={handleAddGuest} />
            </section>
            <ListaDeInvitados
                guests={guests}
                onRemoveGuest={handleRemoveGuest}
                onSendInvitations={handleSendInvitations}
            />
            {invitationsSent && <p>Invitaciones enviadas!</p>}
            <ListaDeInvitadosEnviados
                sentInvites={sentInvites}
                onUpdateStatus={() => {}} // Define or update this function based on your needs
            />
             <div className="container-buttom-gestiondeinvitados">
        <button className="buttomMorado"><Link to="/adquirida">Volver</Link></button>
        </div>
        </div>
       
        </>
    );
}

export default GestionDeInvitados;


