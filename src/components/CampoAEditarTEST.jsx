import { useRef } from 'react';
import '../styles/CampoAEditar.css';

describe('CampoAEditar Component', () => {
  it('should render without crashing', () => {
    const props = {
      campo: ['Nombre', 'Ingrese su nombre'],
      index: 0,
      campos: [{ valor: '' }],
    };
    const wrapper = shallow(<CampoAEditar {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should update value on input change', () => {
    const props = {
      campo: ['Nombre', 'Ingrese su nombre'],
      index: 0,
      campos: [{ valor: '' }],
    };
    const wrapper = shallow(<CampoAEditar {...props} />);
    
    // Simulate input change
    wrapper.find('input').simulate('change', { target: { value: 'Nuevo Valor' } });

    // Check if the value in campos array is updated
    expect(props.campos[0].valor).toBe('Nuevo Valor');
  });
});



/*Este test verifica dos cosas:

Asegura que el componente se renderiza correctamente sin errores.
Verifica que la función updateValue se ejecuta correctamente al cambiar el valor del input y actualiza el valor en el array campos.*/