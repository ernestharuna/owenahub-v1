import { Outlet, Link } from "react-router-dom";
import UserSessionCard from "../../../components/UserSessionCard";

export async function loader() {
    return null
}

export default function UserSessions() {
    return (
        <div className="container-md animated fadeInDown">
            <h4>
                Sessions
            </h4>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
