import { Link, useLoaderData } from "react-router-dom";
import MentorSessionCard from "../../../components/MentorSessionCard";
import "./mentorSessionStyle.scss";
import { useSelector } from "react-redux";
import GroupSessionCard from "../../../components/GroupSessionCard";

export default function AllUserSessions() {
    const { allSessions, allGroupSessions } = useLoaderData();
    const { mentor } = useSelector(state => state.authMentor);
    console.log(allGroupSessions);

    // Filter group sessions
    const mentorGroupSessions = allGroupSessions.filter(
        (session) => session.mentor.id === mentor.id
    )

    // filters sessions based on user ID in redux store
    const mentorSessions = allSessions.filter(
        (session) => session.mentor.id === mentor.id
    );

    // filters pending users sessions 
    const pendingSessions = mentorSessions.filter(
        (session) => session.accepted === 0
    );

    // filters on-going sessions
    const currentSessions = mentorSessions.filter(
        (session) => session.accepted === 1
    )

    return (
        <div className="animated2 fadeInDown">
            <div className="mt-1 mentor-sessions-box">
                <h5 className="mt-1 mb-1">
                    <i className="bi bi-tags"></i> On-going Sessions
                </h5>

                <div className="mentor-sessions">
                    {currentSessions.length !== 0 ?
                        currentSessions.map((session) => (<MentorSessionCard session={session} key={session.id} />)) :
                        (<small className="text-secondary"><i>You have no sessions</i></small>)
                    }
                </div>
            </div>

            <div className="mt-3 mentor-sessions-box">
                <h5 className="mt-1 mb-1">
                    <i className="bi bi-arrow-clockwise"></i> Pending Sessions
                </h5>

                <div className="mentor-sessions">
                    {pendingSessions.length !== 0 ?
                        pendingSessions.map((session) => (<MentorSessionCard session={session} key={session.id} />)) :
                        (<small className="text-secondary"><i>You have no sessions</i></small>)
                    }
                </div>
            </div>

            <div className="mt-3 mentor-sessions-box">
                <h5 className="mt-1 mb-1">
                    <i className="fs-1 bi bi-people"></i> Group Sessions
                </h5>

                <div className="mentor-sessions">
                    <div>
                        {mentorGroupSessions.length !== 0 ?
                            mentorGroupSessions.map((session) => (<GroupSessionCard session={session} key={session.id} />)) :
                            (<>
                                <small className="text-secondary d-block"><i>No group sessions</i></small><br />
                                <Link to={"group-sessions/create"}>
                                    <button className="btn">
                                        Create Group Session
                                    </button>
                                </Link>
                            </>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
