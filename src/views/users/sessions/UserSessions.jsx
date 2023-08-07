import { Outlet, Link, useLocation } from "react-router-dom";

export async function loader() {
    return null
}

export default function UserSessions() {
    const location = useLocation();

    return (
        <div className="container-md animated fadeInDown">
            <h4>
                Sessions
            </h4>
            <div className="mt-1 user-sessions-banner">
                <h4>
                    Let&apos;s give you the essentials
                </h4>
                <p className="text-secondary">
                    Create private sessions with mentors that best fit you caeere aspirations
                </p>
                {location.pathname === "/user/sessions/create" ?
                    "" :
                    (<Link to="/user/mentors">
                        <button className="btn btn-dark">
                            Create a Session ⇗
                        </button>
                    </Link>)
                }
            </div>

            <div className="animated2 fadeInDown">
                <Outlet />
            </div>
        </div>
    )
}
