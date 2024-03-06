import React from 'react';
import '../styles/ListaDeInvitadosEnviados.css';

describe('ListaDeInvitadosEnviados Component', () => {
    const sentInvitesMock = [
      { nombre: 'Invitado 1', confirmacion: 'S' },
      { nombre: 'Invitado 2', confirmacion: 'N' },
      { nombre: 'Invitado 3', confirmacion: 'E' },
    ];
  
    it('should render without crashing', () => {
      const wrapper = shallow(<ListaDeInvitadosEnviados sentInvites={sentInvitesMock} />);
      expect(wrapper.exists()).toBe(true);
    });
  
    it('should display confirmation status correctly', () => {
      const wrapper = shallow(<ListaDeInvitadosEnviados sentInvites={sentInvitesMock} />);
  
      // Compruebe si la primera invitación tiene el texto de estado de confirmación correcto
      expect(wrapper.find('.confirmation-status').at(0).text()).toBe('Asistirá');
  
      // Compruebe si la segunda invitación tiene el texto de estado de confirmación correcto
      expect(wrapper.find('.confirmation-status').at(1).text()).toBe('No Asiste');
  
      // Compruebe si la tercera invitación tiene el texto de estado de confirmación correcto
      expect(wrapper.find('.confirmation-status').at(2).text()).toBe('Espera Respuesta');
    });
  });

  /* Este test verifica dos cosas:

1.Asegura que el componente se renderiza correctamente sin errores.
2.Verifica que la función getConfirmationStatus traduce correctamente el estado de confirmación y se muestra correctamente en la interfaz.
*/