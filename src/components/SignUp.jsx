import React from "react";
import {useUsuario} from "./UsuarioContexto";
import { useNavigate } from 'react-router-dom';
function SignUpForm() {
  const {register} = useUsuario();
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    const { name, email, password } = state;
    alert(
      `You are sign up with name: ${name} email: ${email} and password: ${password}`
    );

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }

    const tryRegister = async () => {
      await register({"email":email, "contraseña":password})
        .then((user)=>{
          if(!user || !user.email) {
            alert("No se ha podido realizar el registro");
          } else {
            alert(`Te has registrado correctamente`);
            navigate("/");
          }
        })
        .catch((error)=>{
          console.log("Error al realizar el registro: ", error);
        });
    }

    await tryRegister();
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Crea tu cuenta</h1>
        <div className="socialContainer">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>o utiliza tu correo electrónico para registrarte</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button>Registrarse</button>
      </form>
    </div>
  );
}

export default SignUpForm;
