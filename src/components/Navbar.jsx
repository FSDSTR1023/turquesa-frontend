import { Link } from "react-router-dom";
import { useUsuario } from "./UsuarioContexto";

const Navbar = () => {
    const { authenticated, logOut } = useUsuario(); // Destructura ambos valores en una sola llamada

    return (
        <nav>
            <div className="rectangulo"></div>
            <div className="navMenu">
                <div className="navLogo">
                    <Link to='/'>Inicio</Link> {/* Asegúrate de que el logo tenga un enlace al inicio */}
                </div>
                <div className="navInicio">
                    <ul>
                        {authenticated ? (
                            <>
                                <li>
                                    <Link to='/mis-tarjetas'>Mis tarjetas</Link>
                                </li>
                                <li>
                                    Usuario     
                                </li>
                                <li>
                                    <Link to='/gestion-invitados'>Gestión de Invitados</Link>
                                </li>
                                {/* Enlace a Añadir Tarjeta */}
                                <li>
                                    <Link to='/añadir-tarjeta'>Añadir Tarjeta</Link>
                                </li>
                                <li>
                                    <p onClick={logOut} style={{cursor: 'pointer'}}>Logout</p>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to='/register'>Sign in</Link> {/* Asume que tienes una ruta /register */}
                                </li>
                                <li>
                                    <Link to='/login'>Log in</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
