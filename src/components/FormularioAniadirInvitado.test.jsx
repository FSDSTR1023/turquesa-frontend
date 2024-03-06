import React, { useState } from 'react';
import '../styles/FormularioAniadirInvitado.css';

describe('FormularioAniadirInvitado Component', () => {
    it('should render without crashing', () => {
      const wrapper = shallow(<FormularioAniadirInvitado onAddGuest={() => {}} />);
      expect(wrapper.exists()).toBe(true);
    });
  
    it('should update state on input change', () => {
      const wrapper = shallow(<FormularioAniadirInvitado onAddGuest={() => {}} />);
      
      // Simulate input change for guestName
      wrapper.find('input').at(0).simulate('change', { target: { value: 'John' } });
  
      // Check if guestName state is updated
      expect(wrapper.find('input').at(0).prop('value')).toBe('John');
    });
  
    it('should call onAddGuest prop on form submission', () => {
      const onAddGuestMock = jest.fn();
      const wrapper = shallow(<FormularioAniadirInvitado onAddGuest={onAddGuestMock} />);
      
      // Simulate form submission
      wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  
      // Check if onAddGuest prop is called
      expect(onAddGuestMock).toHaveBeenCalled();
    });
  });

  /*
  Este test verifica tres cosas:

Asegura que el componente se renderiza correctamente sin errores.
Verifica que la función setGuestName se ejecuta correctamente al cambiar el valor del input de nombre.
Verifica que la función onAddGuest prop es llamada correctamente al enviar el formulario.
Adapta los valores según tus necesidades específicas y extiende los tests según sea necesario. */