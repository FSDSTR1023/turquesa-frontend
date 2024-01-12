import { Link } from "react-router-dom";

const Navbar = (conectado) => {

    const logOut = () => {}

    return (
        <nav>
            <div>
                <ul>
                    <li>
                        <Link to='/'><img /></Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    {conectado ? (
                        <>
                            <li>
                                <Link to='/'>Mis tarjetas</Link>
                            </li>
                            <li>
                                <p>Usuario</p>
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
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;