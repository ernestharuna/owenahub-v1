import { Outlet, Link, useNavigation } from "react-router-dom";
import logo from '../assets/owena_logo.png'
import { useSelector } from "react-redux";

const GuestLayout = () => {
    const navigation = useNavigation();
    const { message } = useSelector(state => state.notification);

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
                            <span className="sign-in fw-2">
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
                        <div className="logo">
                            <img src={logo} alt="_logo" style={{ width: '60px' }} />
                        </div>
                        <p>
                            <small>
                                Fostering global connections, leveraging experts to empower learners through mentorship.
                            </small>
                        </p>
                    </div>

                    <hr />

                    <p>
                        <b> Contact Us</b> <br />
                        hello@owenahub.com
                    </p>

                    <p>
                        <b> Sign in </b> <br />
                        <Link to={"/auth/login"}>Learner</Link> | <Link to={"/auth/mentor/login"}>Mentor</Link> | <Link to={"/auth/admin/login"}>Admin</Link>
                    </p>

                    <p>
                        <small>
                            Owenahub, &copy; 2023 - All rights reserved <br />
                            <i>
                                version 1.0.0
                            </i>
                        </small>
                    </p>
                </div>
            </footer>

            {message &&
                (<div id="notification" className="animated2 sideBounce">
                    {message}
                </div>)
            }
        </>
    )
}

export default GuestLayout