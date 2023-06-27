import { Outlet, Link, Navigate } from "react-router-dom";
import logo from '../../assets/owena_logo.png'
import { useSelector } from "react-redux";

export default function AuthLayout() {
    const { token } = useSelector(state => state.authUser);

    if (token) {
        return <Navigate to={"/user/dashboard"} />
    }

    return (
        <>
            <header>
                <nav>
                    <div id="nav-list">
                        <img src={logo} alt="_logo" style={{ width: '60px' }} />
                        <Link to="/">
                            <h1>OwenaHub</h1>
                        </Link>
                    </div>

                    <div>

                    </div>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer style={margin}>
                <div className="container">
                    <h1>OwenaHub</h1>
                    <div id="footer-quote">
                        <div>
                            <img src={logo} alt="_logo" style={{ width: '60px' }} />
                        </div>
                        <p>To inspire powerful conversations and collaborations among members <br className="hidden" /> worldwide so together we can change the world with creativity.</p>
                    </div>

                    <hr />

                    <p>
                        <b> Contact Us</b> <br />
                        owenacenter@gmail.com
                    </p>
                    <p>
                        <small>
                            Owenahub, &copy; 2023 - All rights reserved
                        </small>
                    </p>
                </div>
            </footer>
        </>
    )
}

const margin = {
    marginTop: 0
}