import React, { useState } from "react";
import "../styles/diseñop.css";
import SignInForm from "../components/SignIn";
import SignUpForm from "../components/SignUp";

const VentanaLogin = () => {
  const [type, setType] = useState("signIn");

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
    }
  };

  const containerClass = "containerLogin " + (type === "signUp" ? "right-panel-active" : "");

  return (
    <div className="VentanaBody">
      <h2>Sign in/up</h2>
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlayLogin-containerLogin">
          <div className="overlayLogin">
            <div className="overlayLogin-panel overlayLogin-left">
              <h1>¡Bienvenido de nuevo!</h1>
              <p>
                Para mantenerse conectado con nosotros, inicie sesión con su
                información personal
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Iniciar sesión
              </button>
            </div>
            <div className="overlayLogin-panel overlayLogin-right">
              <h1>¡Bienvenido!</h1>
              <p>¡Invitaciones digitales para vuestra boda!</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Regístrate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentanaLogin;