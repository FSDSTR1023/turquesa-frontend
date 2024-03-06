import React from 'react';
import '../styles/ListaDeInvitados.css';

describe('ListaDeInvitados Component', () => {
    const guestsMock = [
      { id: 1, name: 'Invitado 1' },
      { id: 2, name: 'Invitado 2' },
      { id: 3, name: 'Invitado 3' },
    ];
  
    it('should render without crashing', () => {
      const wrapper = shallow(<ListaDeInvitados guests={guestsMock} onRemoveGuest={() => {}} onSendInvitations={() => {}} />);
      expect(wrapper.exists()).toBe(true);
    });
  
    it('should render the correct number of guests', () => {
      const wrapper = shallow(<ListaDeInvitados guests={guestsMock} onRemoveGuest={() => {}} onSendInvitations={() => {}} />);
      expect(wrapper.find('.lista-invitados-item')).toHaveLength(guestsMock.length);
    });
  
    it('should call onRemoveGuest prop when "Eliminar" button is clicked', () => {
      const onRemoveGuestMock = jest.fn();
      const wrapper = shallow(<ListaDeInvitados guests={guestsMock} onRemoveGuest={onRemoveGuestMock} onSendInvitations={() => {}} />);
      
      // Simular haciendo clic en el botón "Eliminar" para el primer invitado
      wrapper.find('.lista-invitados-remove-btn').at(0).simulate('click');
  
      // Comprobar si se llama a la propiedad onRemoveGuest con el argumento correcto
      expect(onRemoveGuestMock).toHaveBeenCalledWith(guestsMock[0].id);
    });
  
    it('should call onSendInvitations prop when "Enviar Invitaciones" button is clicked', () => {
      const onSendInvitationsMock = jest.fn();
      const wrapper = shallow(<ListaDeInvitados guests={guestsMock} onRemoveGuest={() => {}} onSendInvitations={onSendInvitationsMock} />);
      
      // checkea el clic en el botón "Enviar Invitaciones"
      wrapper.find('.send-invitations-btn').simulate('click');
  
      // Ccompruebasi funciona OnSendInvitatoinsMock
      expect(onSendInvitationsMock).toHaveBeenCalled();
    });
  });