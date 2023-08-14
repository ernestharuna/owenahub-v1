import { Outlet } from "react-router-dom";

export default function MentorSessions() {
    return (
        <div className="container-md animated fadeInDown">
            <h4>
                Sessions
            </h4>
            <div className="mb-1">
                <small>
                    Manage your sessions from this tab.
                </small>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
