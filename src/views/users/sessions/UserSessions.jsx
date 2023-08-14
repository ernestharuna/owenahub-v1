import { Outlet, Link, useLocation } from "react-router-dom";
import axiosClient from "../../../axios-client";

export async function loader() {
    const res = await axiosClient.get('/sessions');
    const res2 = await axiosClient.get("/group-sessions");

    const allSessions = res.data.data;
    const allGroupSessions = res2.data.data;
    return { allSessions, allGroupSessions };
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
