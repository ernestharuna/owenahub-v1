import { Link } from "react-router-dom";
import UserSessionCard from "../../../components/UserSessionCard";
import "./userSessionStyle.scss";

export default function AllUserSessions() {
    return (
        <div className="container-md animated fadeInDown">
            <h4>
                Sessions
            </h4>

            <div className="mt-1">
                <Link to="#">
                    <button className="btn btn-dark">
                        Create a Session ⇗
                    </button>
                </Link>
            </div>

            <div className="mt-1 user-sessions-box">
                <h5>
                    On-going Sessions
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
