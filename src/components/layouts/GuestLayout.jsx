import { Outlet, Link, useNavigation } from "react-router-dom";
import logo from '../../assets/owena_logo.png'

const GuestLayout = () => {
    const navigation = useNavigation();

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

                    <div className="large-screen">
                        <small className="cursive">
                            The Learner's Hub
                        </small>
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

            <main className={navigation.state === "loading" ? " loading" : ""}>
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
                        <b> Sign in </b> <br />
                        <Link to={"/auth/login"}>Learner</Link> | <Link to={"/auth/mentor/login"}>Mentor</Link> | <Link to={"/auth/admin/login"}>Admin</Link>
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