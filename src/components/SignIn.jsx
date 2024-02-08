import React from "react";
import {useUsuario} from "./UsuarioContexto";
import { useNavigate } from 'react-router-dom';

function SignInForm() {
  const {logIn} = useUsuario();
  const navigate = useNavigate();
  const [state, setState] = React.useState({
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
    
    const { email, password } = state;

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }

    const tryLogin = async () => {
      await logIn({"email":email, "contraseña":password})
        .then((user)=>{
          if(!user || !user.email) {
            alert("No se ha podido iniciar sesión. Email o contraseña inválidos");
          } else {
            alert(`Has iniciado sesión correctamente`);
            navigate("/");
          }
        }
        ).catch((error)=> {
          console.log("Error al realizar el login: ", error);
        });
    }

    await tryLogin();
  };

  return (
    <div className="Sign-In-Container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="">Inicio de sesion</h1>
        <div className="SignIn-social-container">
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
        <span>o usa tu cuenta</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">¿Has olvidado tu contraseña?</a>
        <button>Acceder</button>
      </form>
    </div>
  );
}

export default SignInForm;
