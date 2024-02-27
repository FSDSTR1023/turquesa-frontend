import { Link } from "react-router-dom";
import { useUsuario } from "./UsuarioContexto";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const {authenticated} = useUsuario();
    const {logOut} = useUsuario();
    const navigate = useNavigate();

    const handleLogout = async () => {
        console.log("hace logout");
        await logOut();
        console.log("sale del logout");

    }
    const handleLogo = ()=>{
        navigate("/");

    }

    return (
        <nav>
            <div className="rectangulo"></div>
            <div className="navMenu">
            <div className="navLogo" onClick={handleLogo}>
                
            </div>
            <div className="navInicio">
                <ul>
                    {authenticated ? (
                        <>
                            <li>
                                <Link to='/mis-tarjetas'>Mis tarjetas</Link>
                            </li>
                            <li>
                                    <Link to='/gestion-invitados'>Gestión de Invitados</Link> {/* Nuevo enlace */}
                            </li>
                            <li>
                                <a onClick={handleLogout}>Logout</a>
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
};

export default Navbar;
