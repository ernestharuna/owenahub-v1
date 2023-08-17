import { Outlet, Link, Navigate } from "react-router-dom";
import logo from '../assets/owena_logo.png'
import { useSelector } from "react-redux";

export default function AuthLayout() {
    const user_token = useSelector(state => state.authUser.token);
    const admin_token = useSelector(state => state.authAdmin.token);
    const mentor_token = useSelector(state => state.authMentor.token)

    if (user_token) {
        return <Navigate to={"/user/dashboard"} />
    } else if (admin_token) {
        return <Navigate to={"/admin/dashboard"} />
    } else if (mentor_token) {
        return <Navigate to={"/mentor/dashboard"} />
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
                        <div className="logo">
                            <img src={logo} alt="_logo" style={{ width: '60px' }} />
                        </div>
                        <p>
                            To cultivate meaningful interactions and partnerships within our global community, <br className="hidden" /> harnessing the collective expertise of tech professionals to empower eager learners through mentorship.
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