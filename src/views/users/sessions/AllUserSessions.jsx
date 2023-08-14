import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import UserSessionCard from "../../../components/UserSessionCard";
import "./userSessionStyle.scss";

export default function AllUserSessions() {
    const { allSessions } = useLoaderData(); // All sessions in DB
    const { user } = useSelector(state => state.authUser);

    // filters sessions based on user ID in redux store
    const userSessions = allSessions.filter(
        (session) => session.mentee.id === user.id
    );

    // filters pending users sessions 
    const pendingSessions = userSessions.filter(
        (session) => session.accepted === 0
    );

    // filters on-going sessions
    const currentSessions = userSessions.filter(
        (session) => session.accepted === 1
    )

    return (
        <div className="animated fadeInDown">
            <div className="mt-3 user-sessions-box">
                <h5 className="mt-1 mb-1">
                    Pending Sessions
                </h5>

                <div className="user-sessions">
                    {pendingSessions.length !== 0 ?
                        pendingSessions.map((session) => (<UserSessionCard session={session} key={session.id} />)) :
                        (<small className="text-secondary"><i>You have no sessions</i></small>)
                    }
                </div>
            </div>

            <div className="mt-3 user-sessions-box">
                <h5 className="mt-1 mb-1">
                    On-going Sessions
                </h5>

                <div className="user-sessions">
                    {currentSessions.length !== 0 ?
                        currentSessions.map((session) => (<UserSessionCard session={session} key={session.id} />)) :
                        (<small className="text-secondary"><i>You have no sessions</i></small>)
                    }
                </div>
            </div>

            <div className="mt-3 user-sessions-box">
                <h5 className="mt-1 mb-1">
                    Upcoming Group Sessions
                </h5>

                <div className="user-sessions">
                    <small className="text-secondary">
                        <i>No Pending Group-Sessions</i>
                    </small>
                </div>
            </div>
        </div>
    )
}
