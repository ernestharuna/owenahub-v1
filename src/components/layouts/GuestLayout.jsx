import { Outlet, Link } from "react-router-dom";
import logo from '../../assets/owena_logo.png'

const GuestLayout = () => {
    return (
        <>
            <header>
                <nav>
                    <div id="nav-list">
                        <img src={logo} alt="_logo" style={{ width: '60px' }} />
                        <Link>
                            <h1>OwenaHub</h1>
                        </Link>
                    </div>

                    <div className="auth-btns">
                        {/* <PrimaryBtn text="Start for free" link="/auth/register" /> */}
                        <Link to={"/auth/login"}>
                            <span className="sign-in">
                                Sign in
                            </span>
                        </Link>
                        <Link to={"/getstarted"}>
                            <span className="register">
                                Register
                            </span>
                        </Link>
                    </div>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
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

export default GuestLayout