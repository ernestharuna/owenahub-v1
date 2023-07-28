import { Outlet } from "react-router-dom";

export async function loader() {
    return null
}

export default function MentorSessions() {
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
