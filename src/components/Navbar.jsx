import { Link } from "react-router-dom";
import {useUsuario} from "./UsuarioContexto";

const Navbar = () => {
    const {authenticated} = useUsuario();
    const {logOut} = useUsuario();

    return (
        <nav>
            <div className="rectangulo"></div>
            <div className="navMenu">
            <div className="navLogo">
                <Link to='/'></Link>
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
                                    <Link to='/gestion-invitados'>Gestión de Invitados</Link> {/* Nuevo enlace */}
                            </li>
                            <li>
                                <p onClick={logOut}>Logout</p>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to='/'>Sign in</Link>
                            </li>
                            <li>
                                <Link to='/login'>Log in</Link>
                            </li>
                            <li className="line"></li>
                        </>
                    )}
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;