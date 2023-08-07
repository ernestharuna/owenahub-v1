import { Link } from "react-router-dom";
import UserSessionCard from "../../../components/UserSessionCard";
import "./userSessionStyle.scss";

export default function AllUserSessions() {
    return (
        <div className="animated fadeInDown">
            <div className="mt-2 user-sessions-box">
                <h5 className="mt-1">
                    Pending Sessions
                </h5>

                <div className="user-sessions">
                    <p>
                        <small className="text-secondary">
                            No Pending Sessions
                        </small>
                    </p>
                </div>
            </div>

            <div className="mt-2 user-sessions-box">
                <h5 className="mt-1 mb-1">
                    On-going Sessions
                </h5>

                <div className="user-sessions">
                    <UserSessionCard />
                    <UserSessionCard />
                    <UserSessionCard />
                </div>
            </div>

            <div className="mt-3 user-sessions-box">
                <h5 className="mt-1 mb-1">
                    Upcoming Group Sessions
                </h5>

                <div className="user-sessions">
                    <UserSessionCard />
                    <UserSessionCard />
                    <UserSessionCard />
                </div>
            </div>
        </div>
    )
}
