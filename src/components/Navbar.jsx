import { Link } from "react-router-dom";

const Navbar = (conectado) => {

    const logOut = () => {}

    return (
        <nav>
            <div className="rectangulo"></div>
            <div className="navMenu">
            <div className="navLogo">
                <ul>
                    <li>
                        <Link to='/'><img /></Link>
                    </li>
                </ul>
            </div>
            <div className="navInicio">
                <ul>
                    {conectado ? (
                        <>
                            <li>
                                <Link to='/'>Mis tarjetas</Link>
                            </li>
                            <li>
                                Usuario     
                            </li>
                            <li>
                                <Link to='/' onClick={logOut}>Logout</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to='/'>Sign in</Link>
                            </li>
                            <li>
                                <Link to='/'>Log in</Link>
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